import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // SMTP Transporter Setup
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Kuzuri SMTP Relay is active" });
  });

  app.post("/api/send-email", async (req, res) => {
    const { subject, text, html, replyTo } = req.body;

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("[SMTP] Missing configuration. Check environment variables.");
      return res.status(500).json({ 
        error: "SMTP configuration missing", 
        details: "Server is not configured to send emails." 
      });
    }

    try {
      const info = await transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || 'Kuzuri Escapades'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO_EMAIL || "info@kuzuri-escapades.com",
        replyTo: replyTo,
        subject: subject,
        text: text,
        html: html,
      });

      console.log("[SMTP] Message sent: %s", info.messageId);
      res.json({ success: true, messageId: info.messageId });
    } catch (error) {
      console.error("[SMTP] Error sending email:", error);
      res.status(500).json({ 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Pesapal S3 Integration (Production Environment)
  const PESAPAL_BASE_URL = process.env.PESAPAL_BASE_URL || "https://pay.pesapal.com/v3/api";
  
  // LIVE CREDENTIALS FOR KUZURI ESCAPADES LIMITED
  const CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY || "2ZaHFEyUrkJLTirCtpiZbPIUK+zgGedj";
  const CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET || "0jPZrbbpf6XQLOA7QjhHh0/Zw/k=";

  const getPesapalToken = async () => {
    try {
      const response = await axios.post(`${PESAPAL_BASE_URL}/Auth/RequestToken`, {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET
      });
      return response.data.token;
    } catch (error: any) {
      console.error("[Pesapal Auth Error] Authentication Handshake Failed:", error.response?.data || error.message);
      throw new Error(`Pesapal Handshake Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const registerIPN = async () => {
    try {
      const token = await getPesapalToken();
      const ipnUrl = process.env.PESAPAL_IPN_URL || "https://kuzuri-escapades.com/api/pesapal/ipn";
      
      const response = await axios.post(`${PESAPAL_BASE_URL}/URLSetup/RegisterIPN`, {
        url: ipnUrl,
        ipn_notification_type: "GET"
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      console.log("[Pesapal] IPN Registered Successfully:", response.data);
      return response.data.ipn_id;
    } catch (error: any) {
      console.error("[Pesapal] IPN Registration Error:", error.response?.data || error.message);
      return null;
    }
  };

  app.post("/api/pesapal/submit-order", async (req, res) => {
    const { orderDetails } = req.body;

    try {
      const token = await getPesapalToken();

      let ipnId = process.env.PESAPAL_IPN_ID;
      if (!ipnId) {
        console.warn("[Pesapal] PESAPAL_IPN_ID missing. Attempting dynamic registration...");
        ipnId = await registerIPN();
      }

      const orderData = {
        id: orderDetails.id || `KUZ-${Date.now()}`,
        currency: orderDetails.currency || "USD",
        amount: parseFloat(orderDetails.amount),
        description: orderDetails.description || "Safari Payment",
        callback_url: process.env.PESAPAL_CALLBACK_URL || `${req.get('origin')}/payment-success`,
        notification_id: ipnId,
        billing_address: {
          email_address: orderDetails.email,
          phone_number: orderDetails.phone,
          country_code: "UG",
          first_name: orderDetails.firstName,
          last_name: orderDetails.lastName,
          line_1: orderDetails.address,
          city: orderDetails.city,
          state: orderDetails.state,
          postal_code: orderDetails.zip,
          zip_code: orderDetails.zip
        }
      };

      const response = await axios.post(`${PESAPAL_BASE_URL}/Transactions/SubmitOrderRequest`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      res.json(response.data);
    } catch (error: any) {
      console.error("Pesapal Order Submission Error:", error.response?.data || error.message);
      res.status(500).json({ 
        error: "Failed to submit order to Pesapal", 
        details: error.response?.data || error.message 
      });
    }
  });

  app.get("/api/pesapal/transaction-status", async (req, res) => {
    const { orderTrackingId } = req.query;

    try {
      const token = await getPesapalToken();
      const response = await axios.get(`${PESAPAL_BASE_URL}/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      res.json(response.data);
    } catch (error: any) {
      console.error("Pesapal Transaction Status Error:", error.response?.data || error.message);
      res.status(500).json({ error: "Failed to fetch transaction status" });
    }
  });

  // IPN Listener URL
  app.get("/api/pesapal/ipn", async (req, res) => {
    const { OrderTrackingId, OrderMerchantReference, OrderNotificationType } = req.query;
    console.log(`[Pesapal IPN] Notification Received: ${OrderTrackingId} | Type: ${OrderNotificationType}`);

    if (!OrderTrackingId) {
      return res.status(400).send("OrderTrackingId is required");
    }

    try {
      const token = await getPesapalToken();
      const statusResponse = await axios.get(`${PESAPAL_BASE_URL}/Transactions/GetTransactionStatus?orderTrackingId=${OrderTrackingId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const transaction = statusResponse.data;
      
      // status_code 1 is COMPLETED in Pesapal S3
      if (transaction.status_code === 1) {
        console.log(`[Pesapal IPN] Payment cleared for tracking ID: ${OrderTrackingId}. Forwarding receipt to admin.`);
        
        await transporter.sendMail({
          from: `"${process.env.SMTP_FROM_NAME || 'Kuzuri Payment'}" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER}>`,
          to: "info@kuzuri-escapades.com",
          subject: `[CLEARED] Pesapal Receipt: ${OrderMerchantReference}`,
          html: `
            <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1A1A1A10; padding: 40px; color: #1A1A1A;">
              <h2 style="text-transform: uppercase; letter-spacing: 0.2em; font-weight: 900; border-bottom: 4px solid #D4AF37; padding-bottom: 15px; margin-bottom: 30px;">Payment Confirmation</h2>
              
              <div style="background-color: #FAF8F3; padding: 25px; margin-bottom: 30px; border-left: 4px solid #00C853;">
                <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #1A1A1A60; margin: 0 0 5px 0;">Transaction Status</p>
                <p style="font-size: 18px; font-weight: 900; color: #00C853; margin: 0;">SUCCESSFULLY CLEARED</p>
              </div>

              <div style="margin-bottom: 30px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 10px; text-transform: uppercase; font-weight: 900; color: #1A1A1A40;">Merchant Ref</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 12px; font-weight: 700; text-align: right;">${OrderMerchantReference}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 10px; text-transform: uppercase; font-weight: 900; color: #1A1A1A40;">Tracking ID</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 12px; font-mono; text-align: right;">${OrderTrackingId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 10px; text-transform: uppercase; font-weight: 900; color: #1A1A1A40;">Amount</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 16px; font-weight: 900; color: #D4AF37; text-align: right;">${transaction.currency} ${transaction.amount}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 10px; text-transform: uppercase; font-weight: 900; color: #1A1A1A40;">Payment Method</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #1A1A1A05; font-size: 12px; font-weight: 700; text-align: right;">${transaction.payment_method}</td>
                  </tr>
                </table>
              </div>

              <p style="font-size: 10px; color: #1A1A1A40; text-align: center; margin-top: 40px; text-transform: uppercase; letter-spacing: 0.1em;">
                Automated Notification • Kuzuri Escapades Payment System
              </p>
            </div>
          `
        });
      }

      // Return exact format Pesapal expects
      res.json({
        "order_tracking_id": OrderTrackingId,
        "merchant_reference": OrderMerchantReference,
        "status": "200"
      });
    } catch (error: any) {
      console.error("[Pesapal IPN] Internal Processing Error:", error.response?.data || error.message);
      res.status(500).json({ error: "Notification Failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
