
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Info, HelpCircle, Lock, Smartphone, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { crmService } from '../services/crmService.ts';

import { paymentService } from '../services/paymentService.ts';

interface PaymentPortalProps {
  onBack: () => void;
}

type PaymentStage = 'landing' | 'details' | 'processing' | 'success';

export const PaymentPortal: React.FC<PaymentPortalProps> = ({ onBack }) => {
  const [stage, setStage] = useState<PaymentStage>('landing');
  const [orderTrackingId, setOrderTrackingId] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    firstName: '',
    lastName: '',
    companyName: '',
    address1: '',
    address2: '',
    city: '',
    country: 'Uganda',
    state: '',
    zip: '',
    email: '',
    phone: '',
    bookingRef: '',
    amount: '50',
    currency: 'USD',
    category: 'Safari Deposit',
    paymentMethod: '',
    agreedToTerms: false
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackingId = params.get('OrderTrackingId');
    
    if (trackingId) {
      setOrderTrackingId(trackingId);
      
      // Attempt to restore session
      const savedData = localStorage.getItem('kuzuri_pending_payment');
      if (savedData) {
        try {
          const parsed = JSON.parse(savedData);
          setFormData(parsed);
          // Auto-verify if we have data
          setStage('processing');
          setTimeout(() => verifyPaymentStatus(trackingId, parsed), 1000);
        } catch (e) {
          console.error("Failed to restore session data", e);
        }
      } else {
        // Just verify tracking if no local data
        setStage('processing');
        setTimeout(() => verifyPaymentStatus(trackingId), 1000);
      }
      
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const logoUrl = 'https://i.postimg.cc/NFtScdZf/Capturezzzzzzzzz.png';

  const showSupportMessage = () => {
    toast.info(
      <div className="space-y-2">
        <p className="font-bold text-[#1A1A1A]">Having trouble?</p>
        <p className="text-xs text-[#1A1A1A]/60">Contact our support team at <a href="tel:+256708012030" className="text-[#D4AF37] font-bold">0708012030</a> or <a href="mailto:info@kuzuri-escapades.com" className="text-[#D4AF37] font-bold">info@kuzuri-escapades.com</a>.</p>
      </div>,
      { duration: 6000 }
    );
  };

  const handleNext = async () => {
    if (stage === 'landing') {
      setStage('details');
    } else if (stage === 'details') {
      if (!formData.fullName || !formData.email || !formData.phone || !formData.bookingRef || !formData.amount) {
        toast.error('Please complete all required fields.');
        return;
      }
      if (!formData.agreedToTerms) {
        toast.error('Please agree to the Terms & Conditions.');
        return;
      }
      
      setStage('processing');
      
      try {
        // Save session to survive redirect
        localStorage.setItem('kuzuri_pending_payment', JSON.stringify(formData));

        // Split fullName if needed
        const nameParts = formData.fullName.trim().split(' ');
        const fName = nameParts[0] || 'Client';
        const lName = nameParts.slice(1).join(' ') || 'User';

        const response = await paymentService.submitOrder({
          currency: formData.currency,
          amount: formData.amount,
          description: `${formData.category} - Ref: ${formData.bookingRef}`,
          email: formData.email,
          phone: formData.phone,
          firstName: fName,
          lastName: lName,
          address: formData.address1 || 'Not Provided',
          city: formData.city || 'Kampala',
          state: formData.state || 'Central',
          zip: formData.zip || '0000'
        });

        if (response.redirect_url) {
          // IMMEDIATE REDIRECT TO PESAPAL HOSTED PAGE
          window.location.href = response.redirect_url;
        } else {
          throw new Error("No redirect URL received from Pesapal");
        }
      } catch (error: any) {
        console.error("Pesapal Initialization Error:", error);
        toast.error(error.message || 'Failed to initialize secure payment session.');
        setStage('details');
        showSupportMessage();
      }
    }
  };

  const verifyPaymentStatus = async (trackingId?: string, restoredData?: any) => {
    const idToVerify = trackingId || orderTrackingId;
    const activeData = restoredData || formData;
    
    if (!idToVerify) return;
    
    setIsVerifying(true);
    try {
      const status = await paymentService.getTransactionStatus(idToVerify);
      
      if (status.status_code === 1) { // COMPLETED
        // Capture lead in CRM
        await crmService.captureLead({
          source: 'payment_portal',
          packageViewing: activeData.category,
          data: {
            fullName: activeData.fullName,
            email: activeData.email,
            phone: activeData.phone,
            bookingRef: activeData.bookingRef,
            amount: `${activeData.currency} ${activeData.amount}`,
            paymentMethod: 'Pesapal Secure Gateway',
            message: `Successful Transaction. Tracking ID: ${idToVerify}`
          }
        });
        
        // Clear session on success
        localStorage.removeItem('kuzuri_pending_payment');
        setStage('success');
      } else if (status.status_code === 3) { // FAILED
        toast.error('Payment was unsuccessful. Please check your card or mobile money balance.');
        setStage('details');
      } else {
        toast.info('Payment is still being processed or is pending.');
        // If they come back here and it's still pending, we might want to stay in success or just show status
        setStage('success'); // Usually if they are redirected back it's a good sign or just show order status
      }
    } catch (error) {
      console.error("Verification error:", error);
      toast.error('Could not verify payment status. Please contact support.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleBack = () => {
    if (stage === 'details') setStage('landing');
    else if (stage === 'success') {
       onBack();
    }
    else onBack();
  };

  const renderStage = () => {
    switch (stage) {
      case 'landing':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col items-center justify-center text-center py-12 space-y-12"
          >
            <div className="w-32 md:w-40 p-4 bg-white shadow-xl rounded-2xl border border-[#1A1A1A]/5">
              <img src={logoUrl} alt="Kuzuri Escapades Logo" className="w-full h-auto object-contain" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight">
                Welcome to our <span className="text-[#D4AF37]">Payment Portal</span>
              </h2>
              <p className="text-sm text-[#1A1A1A]/60 max-w-md mx-auto leading-relaxed">
                Securely settle your safari investment using our encrypted gateway. We accept all major credit cards and regional mobile money services.
              </p>
            </div>

            <div className="w-full max-w-sm space-y-4">
              <button 
                type="button"
                onClick={() => setStage('details')}
                className="w-full py-6 bg-[#1A1A1A] text-[#D4AF37] text-[12px] uppercase tracking-[0.6em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center gap-4"
              >
                MAKE A PAYMENT
                <ArrowRight size={18} />
              </button>
              <button 
                type="button"
                onClick={onBack}
                className="w-full py-4 text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors"
              >
                Return to Website
              </button>
            </div>
          </motion.div>
        );

      case 'details':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            {/* Company Address Header */}
            <div className="text-center pb-6 border-b border-[#1A1A1A]/5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-black mb-2">Billing Entity</p>
              <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Kuzuri Escapades Limited</p>
              <p className="text-[11px] text-[#1A1A1A]/50 uppercase tracking-widest font-black leading-relaxed">
                Plot 87, Bukoto Street, Kampala, Uganda<br/>
                info@kuzuri-escapades.com | +256 708 012030
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-white border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="As it appears on your passport"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="For your digital receipt"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Account Reference / Booking ID</label>
                <input 
                  type="text" 
                  value={formData.bookingRef}
                  onChange={(e) => setFormData({...formData, bookingRef: e.target.value})}
                  className="w-full bg-white border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="KUZ-XXXXXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Payment Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-white border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
                >
                  <option value="Safari Deposit">Safari Deposit</option>
                  <option value="Full Safari Payment">Full Safari Payment</option>
                  <option value="Accommodation Only">Accommodation Only</option>
                  <option value="Bespoke Service">Bespoke Service</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Amount to Pay (USD)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <span className="text-sm font-bold text-[#1A1A1A]">{formData.currency}</span>
                  </div>
                  <input 
                    type="number" 
                    value={formData.amount}
                    onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    className="w-full bg-white border border-[#1A1A1A]/10 p-4 pl-16 text-sm font-bold text-[#D4AF37] focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <input 
                type="checkbox" 
                id="terms"
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({...formData, agreedToTerms: e.target.checked})}
                className="mt-1 w-4 h-4 accent-[#D4AF37]"
              />
              <label htmlFor="terms" className="text-[11px] text-[#1A1A1A]/60 leading-relaxed cursor-pointer">
                I agree to the <span className="text-[#D4AF37] font-bold underline">Terms & Conditions</span> and understand that I am being redirected to Pesapal's secure payment gateway. I confirm that all details provided above are accurate.
              </label>
            </div>

            <div className="flex items-center gap-4 p-6 bg-[#1A1A1A] border border-[#D4AF37]/20">
              <ShieldCheck size={24} className="text-[#D4AF37] shrink-0" />
              <div className="space-y-1">
                <p className="text-[10px] text-[#D4AF37] font-black uppercase tracking-wider">Secure Pesapal S3 Integration</p>
                <p className="text-[9px] text-[#D4AF37]/60 leading-relaxed uppercase tracking-widest font-bold">
                  You will be redirected to the official Pesapal portal to complete your transaction with bank-level encryption.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                type="button"
                onClick={handleBack}
                className="flex-1 py-5 border border-[#1A1A1A]/10 text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
              >
                BACK
              </button>
              <button 
                type="button"
                onClick={handleNext}
                className="flex-[2] py-6 bg-[#D4AF37] text-[#1A1A1A] text-[12px] uppercase tracking-[0.6em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex items-center justify-center gap-4"
              >
                GENERATE SECURE LINK
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        );

      case 'processing':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 flex flex-col items-center justify-center text-center space-y-8"
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-4 border-[#D4AF37]/20 rounded-full" />
              <div className="absolute inset-0 border-4 border-[#D4AF37] rounded-full border-t-transparent animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Lock size={24} className="text-[#D4AF37]" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1A1A1A] uppercase tracking-tighter">Securing Transaction</h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#1A1A1A]/40 font-bold">Please do not refresh this page</p>
            </div>
            <div className="max-w-xs text-[11px] text-[#1A1A1A]/60 leading-relaxed italic">
              "Your journey is our priority. We are encrypting your details to ensure a safe passage for your funds."
            </div>
          </motion.div>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center justify-center text-center space-y-12"
          >
            <div className="relative">
              <div className="w-28 h-28 bg-[#00C853]/10 flex items-center justify-center rounded-full animate-pulse">
                <CheckCircle2 size={64} className="text-[#00C853]" />
              </div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-2 -right-2 bg-[#D4AF37] p-2 rounded-full shadow-lg"
              >
                <ShieldCheck size={20} className="text-[#1A1A1A]" />
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tight">Payment Successful</h3>
              <p className="text-sm text-[#1A1A1A]/60 max-w-md mx-auto leading-relaxed uppercase tracking-[0.1em] font-bold">
                Your safari investment has been secured. A formal digital receipt and itinerary confirmation have been dispatched to:
                <br />
                <span className="text-[#D4AF37] font-black">{formData.email}</span>
              </p>
            </div>

            <div className="w-full max-w-2xl bg-white border border-[#1A1A1A]/5 shadow-[0_40px_100px_rgba(0,0,0,0.05)] overflow-hidden">
               <div className="bg-[#1A1A1A] p-6 text-left border-b border-[#D4AF37]/20 flex justify-between items-center">
                 <h4 className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em]">Official Order Summary</h4>
                 <span className="text-[9px] text-[#D4AF37]/40 uppercase tracking-widest font-bold">Verified by Pesapal S3</span>
               </div>
               
               <div className="p-10 space-y-8 text-left">
                 <div className="grid grid-cols-2 gap-10">
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase tracking-widest font-black text-[#1A1A1A]/30">Reference Number</p>
                     <p className="text-sm font-mono font-bold text-[#1A1A1A]">{formData.bookingRef}</p>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase tracking-widest font-black text-[#1A1A1A]/30">Transaction ID</p>
                     <p className="text-sm font-mono font-bold text-[#1A1A1A]">{orderTrackingId.substring(0, 12).toUpperCase()}</p>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase tracking-widest font-black text-[#1A1A1A]/30">Payment Category</p>
                     <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">{formData.category}</p>
                   </div>
                   <div className="space-y-2">
                     <p className="text-[9px] uppercase tracking-widest font-black text-[#1A1A1A]/30">Payment Date</p>
                     <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                   </div>
                 </div>

                 <div className="pt-8 border-t border-[#1A1A1A]/5 flex justify-between items-center">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest font-black text-[#1A1A1A]/30 mb-1">Total Amount Settled</p>
                      <p className="text-3xl font-black text-[#1A1A1A]">{formData.currency} {Number(formData.amount).toLocaleString()}</p>
                    </div>
                    <div className="px-6 py-3 bg-[#00C853]/5 border border-[#00C853]/20 rounded-full">
                       <span className="text-[10px] font-black text-[#00C853] uppercase tracking-[0.2em]">PAID & SECURED</span>
                    </div>
                 </div>
               </div>

               <div className="bg-[#FAF8F3] p-6 border-t border-[#1A1A1A]/5 flex justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <Smartphone size={14} className="text-[#D4AF37]" />
                    <span className="text-[8px] font-black text-[#1A1A1A]/40 uppercase tracking-widest">MTN / AIRTEL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard size={14} className="text-[#D4AF37]" />
                    <span className="text-[8px] font-black text-[#1A1A1A]/40 uppercase tracking-widest">VISA / MASTERCARD</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm pt-8">
              <button 
                onClick={() => {
                  window.print();
                }}
                className="flex-1 py-5 border border-[#1A1A1A]/10 text-[#1A1A1A] text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
              >
                PRINT RECEIPT
              </button>
              <button 
                onClick={onBack}
                className="flex-[1.5] py-5 bg-[#1A1A1A] text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
              >
                START EXPLORING
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <span className="text-[11px] uppercase tracking-[0.6em] font-black text-[#D4AF37]">Official Portal</span>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-[#1A1A1A] uppercase tracking-tight leading-none">
            Secure <span className="text-[#D4AF37] italic font-light">Payment</span> Gateway
          </h1>
          <p className="text-sm text-[#1A1A1A]/60 uppercase tracking-[0.2em] font-bold">Kuzuri Escapades & Safaris Ltd</p>
        </div>

        {/* Portal Container */}
        <div className="bg-white shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-[#1A1A1A]/5 overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-[#FAF8F3] flex">
            <div 
              className="h-full bg-[#D4AF37] transition-all duration-1000 ease-out"
              style={{ 
                width: stage === 'details' ? '15%' : stage === 'billing' ? '30%' : stage === 'method' ? '45%' : stage === 'iframe' ? '70%' : stage === 'processing' ? '85%' : '100%' 
              }}
            />
          </div>

          <div className="p-8 md:p-16">
            <AnimatePresence mode="wait">
              {renderStage()}
            </AnimatePresence>
          </div>

          {/* Footer of Portal */}
          <div className="bg-[#1A1A1A] p-8 flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-90">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#D4AF37]" />
              <span className="text-[9px] text-white uppercase tracking-[0.3em] font-bold">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock size={18} className="text-[#D4AF37]" />
              <span className="text-[9px] text-white uppercase tracking-[0.3em] font-bold">PCI Compliant</span>
            </div>
            <div className="flex items-center gap-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-40 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 opacity-40 hover:opacity-100 transition-opacity" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-6 opacity-40 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Copyright & Trust Marker */}
        <div className="mt-8 text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A]/30 font-bold">
            Copyright © paybills.ug 2026 • Secure Payment Processing
          </p>
        </div>

        {/* Support Section */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A]/40 font-black">Need Assistance?</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a 
              href="https://wa.me/256708012030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-8 h-8 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <HelpCircle size={14} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">WhatsApp Support</span>
            </a>
            <a 
              href="mailto:info@kuzuri-escapades.com"
              className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-8 h-8 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <Mail size={14} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
