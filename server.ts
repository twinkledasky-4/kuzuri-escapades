import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import fs from "fs/promises";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function logMailError(error: any) {
  const logFile = path.join(__dirname, 'mail_error.log');
  const timestamp = new Date().toISOString();
  const errorMessage = error instanceof Error ? error.message : String(error);
  const logEntry = `[${timestamp}] [NODE SMTP FAILURE] Reason: ${errorMessage}\n`;
  
  try {
    await fs.appendFile(logFile, logEntry);
  } catch (err) {
    console.error("Failed to write to mail_error.log:", err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // SMTP Transporter Setup - Prioritize Environment Variables
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.kuzuri-escapades.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for 587/25
    auth: {
      user: process.env.SMTP_USER || "info@kuzuri-escapades.com",
      pass: process.env.SMTP_PASS || "Uganda@2006?",
    },
    debug: true,
    logger: true,
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  // Verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.error("[SMTP Setup] Verification failed:", error);
      logMailError(error);
    } else {
      console.log("[SMTP Setup] Server is ready to take our messages");
    }
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Kuzuri SMTP Relay is active" });
  });

  app.post("/api/send-email", async (req, res) => {
    const { to, subject, text, html, replyTo } = req.body;
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "info@kuzuri-escapades.com";
    const fromName = process.env.SMTP_FROM_NAME || 'Kuzuri Escapades';

    try {
      const info = await transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: to || process.env.SMTP_TO_EMAIL || "info@kuzuri-escapades.com",
        replyTo: replyTo,
        subject: subject,
        text: text,
        html: html,
      });

      console.log("[SMTP] Message sent: %s", info.messageId);
      res.json({ success: true, messageId: info.messageId });
    } catch (error) {
      console.error("[SMTP] Error sending email:", error);
      logMailError(error);
      res.status(500).json({ 
        error: "Failed to send email", 
        details: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Pesapal V3 Live Integration (Mandatory Production)
  const PESAPAL_BASE_URL = process.env.PESAPAL_BASE_URL || "https://pay.pesapal.com/v3/api";
  
  // OFFICIAL LIVE CREDENTIALS FOR KUZURI ESCAPADES LIMITED
  const CONSUMER_KEY = process.env.PESAPAL_CONSUMER_KEY || "2ZaHFEyUrkJLTirCtpiZbPIUK+zgGedj";
  const CONSUMER_SECRET = process.env.PESAPAL_CONSUMER_SECRET || "0jPZrbbpf6XQLOA7QjhHh0/Zw/k=";

  if (!process.env.PESAPAL_CONSUMER_KEY) {
    console.log("[Pesapal] Running with verified official Live keys.");
  }

  const getPesapalToken = async () => {
    try {
      // User specifically requested Auth/GetToken for Live environment
      const response = await axios.post(`${PESAPAL_BASE_URL}/Auth/GetToken`, {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET
      });
      const token = response.data.token;
      if (!token) {
        console.error("[Pesapal] Token missing from response:", response.data);
        throw new Error("Pesapal Account not yet activated for Live payments or keys are incorrect.");
      }
      console.log(`[Pesapal] Handshake Successful. Token: ${token.substring(0, 8)}...`);
      return token;
    } catch (error: any) {
      console.error("[Pesapal Auth Error] Authentication Handshake Failed:", error.response?.data || error.message);
      throw new Error(`Pesapal Handshake Failed: ${error.response?.data?.message || error.message}`);
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // If it starts with 0 and is 10 digits, assume Uganda (+256)
    let cleaned = phone.replace(/\s+/g, '');
    if (cleaned.startsWith('0') && cleaned.length === 10) {
      return `256${cleaned.substring(1)}`;
    }
    // Remove + for Pesapal if present, or ensure it's just numbers
    return cleaned.replace('+', '');
  };

  const registerIPN = async (req: express.Request) => {
    try {
      const token = await getPesapalToken();
      
      // Determine dynamic IPN URL based on current environment
      const protocol = req.get('x-forwarded-proto') || (req.secure ? 'https' : 'http');
      const forwardedHost = req.get('x-forwarded-host');
      const host = forwardedHost || req.get('host') || 'kuzuri-escapades.com';
      const ipnUrl = process.env.PESAPAL_IPN_URL || `${protocol}://${host}/api/pesapal/ipn`;
      
      console.log(`[Pesapal] IPN URL used for registration: ${ipnUrl}`);
      console.log(`[Pesapal] Checking for existing IPN registration at: ${PESAPAL_BASE_URL}/URLSetup/GetIpnList`);
      
      // First, try to list registered IPNs to see if our URL already exists
      try {
        const listResponse = await axios.get(`${PESAPAL_BASE_URL}/URLSetup/GetIpnList`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Accept": "application/json"
          }
        });
        
        if (Array.isArray(listResponse.data)) {
          const normalizedTarget = ipnUrl.trim().toLowerCase();
          const existing = listResponse.data.find((item: any) => 
            item.url && item.url.trim().toLowerCase() === normalizedTarget
          );
          
          if (existing && existing.ipn_id) {
            console.log(`[Pesapal] RECOVERY: Found matching IPN ID in list for ${ipnUrl}: ${existing.ipn_id}`);
            return existing.ipn_id;
          }
        }
        console.log("[Pesapal] No existing IPN match found in list.");
      } catch (listErr: any) {
        console.warn("[Pesapal] GetIpnList check failed (moving to registration):", listErr.message);
      }

      console.log(`[Pesapal] Sending RegisterIPN request to: ${PESAPAL_BASE_URL}/URLSetup/RegisterIPN`);
      
      const response = await axios.post(`${PESAPAL_BASE_URL}/URLSetup/RegisterIPN`, {
        url: ipnUrl,
        ipn_notification_type: "GET" // V3 supports "GET" or "POST", matching user sample
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      });
      
      console.log(`[Pesapal] IPN Registration Status: ${response.status}`);
      
      let ipnId = null;
      if (response.data && typeof response.data === 'object') {
        ipnId = response.data.ipn_id || response.data.IPN_id || response.data.ipnId;
      }

      if (ipnId) {
        console.log(`[Pesapal] IPN Registration Successful. ID: ${ipnId}`);
        return ipnId;
      }

      // If body is empty string but status is 200, it's very likely already registered.
      // We do a final list check as a failsafe.
      if (response.status === 200 || response.status === 201) {
        console.warn("[Pesapal] Registration returned success status but empty/missing ID. Performing final verification check...");
        try {
          const verifyResponse = await axios.get(`${PESAPAL_BASE_URL}/URLSetup/GetIpnList`, {
            headers: { Authorization: `Bearer ${token}`, "Accept": "application/json" }
          });
          if (Array.isArray(verifyResponse.data)) {
            const normalizedTarget = ipnUrl.trim().toLowerCase();
            const matched = verifyResponse.data.find((item: any) => 
              item.url && item.url.trim().toLowerCase() === normalizedTarget
            );
            if (matched && matched.ipn_id) {
              console.log(`[Pesapal] RECOVERY SUCCESS: Found IPN ID after empty registration: ${matched.ipn_id}`);
              return matched.ipn_id;
            }
          }
        } catch (e) {
          console.error("[Pesapal] Final recovery check failed:", e.message);
        }
      }

      throw new Error(`Pesapal IPN Registration returned no unrecognizable ipn_id. Status: ${response.status}, Body: ${JSON.stringify(response.data)}`);
    } catch (error: any) {
      const detail = error.response?.data || error.message;
      console.error("[Pesapal] IPN Registration Error Full Detail:", JSON.stringify(detail, null, 2));
      throw new Error(`Pesapal IPN Registration Failed: ${typeof detail === 'object' ? JSON.stringify(detail) : String(detail)}`);
    }
  };

  app.post("/api/pesapal/submit-order", async (req, res) => {
    const { orderDetails } = req.body;

    try {
      const token = await getPesapalToken();

      // Use the provided Live IPN ID directly to skip registration overhead
      let ipnId = process.env.PESAPAL_IPN_ID || "549553f1-4384-482d-8869-7096d194553c";
      
      console.log(`[Pesapal] Using Notification ID: ${ipnId}`);

      const protocol = req.get('x-forwarded-proto') || (req.secure ? 'https' : 'http');
      const forwardedHost = req.get('x-forwarded-host');
      const host = forwardedHost || req.get('host') || 'kuzuri-escapades.com';
      const origin = req.get('origin') || `${protocol}://${host}`;

      const orderData = {
        id: orderDetails.id || `KUZ-${Date.now()}`,
        currency: orderDetails.currency || "USD",
        amount: parseFloat(orderDetails.amount.replace(/,/g, '')), // Remove any currency formatting commas
        description: orderDetails.description || "Safari Payment",
        callback_url: process.env.PESAPAL_CALLBACK_URL || `${origin}/pay`,
        notification_id: ipnId,
        billing_address: {
          email_address: orderDetails.email,
          phone_number: formatPhoneNumber(orderDetails.phone),
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

      console.log("[Pesapal] Submitting order data to:", `${PESAPAL_BASE_URL}/Transactions/SubmitOrderRequest`);
      console.log("[Pesapal] Order Data:", JSON.stringify(orderData, null, 2));

      const response = await axios.post(`${PESAPAL_BASE_URL}/Transactions/SubmitOrderRequest`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      console.log("[Pesapal] Order Submission Status:", response.status);
      console.log("[Pesapal] Order Submission Response:", JSON.stringify(response.data, null, 2));

      if (!response.data.redirect_url) {
        // If Pesapal returns a 200 but no redirect_url, it's often an error message in the body
        const msg = response.data.message || "Unknown error from Pesapal (No redirect URL received)";
        console.error("[Pesapal] Error: Response missing redirect_url. Message:", msg);
        // We throw to handle it in the catch block and send a 500 with details
        throw new Error(`Pesapal Error: ${msg}`);
      }
      
      res.json(response.data);
    } catch (error: any) {
      const errorDetail = error.response?.data || error.message;
      console.error("Pesapal Order Submission Error:", JSON.stringify(errorDetail, null, 2));
      res.status(500).json({ 
        error: "Failed to submit order to Pesapal", 
        details: typeof errorDetail === 'object' ? JSON.stringify(errorDetail) : String(errorDetail) 
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
        
        const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || "info@kuzuri-escapades.com";
        const fromName = process.env.SMTP_FROM_NAME || 'Kuzuri Payment';

        await transporter.sendMail({
          from: `"${fromName}" <${fromEmail}>`,
          to: process.env.SMTP_TO_EMAIL || "info@kuzuri-escapades.com",
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
