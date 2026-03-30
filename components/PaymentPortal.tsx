
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CreditCard, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Info, HelpCircle, Lock, Smartphone, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentPortalProps {
  onBack: () => void;
}

type PaymentStage = 'landing' | 'details' | 'billing' | 'method' | 'cardDetails' | 'processing' | 'success';

export const PaymentPortal: React.FC<PaymentPortalProps> = ({ onBack }) => {
  const [stage, setStage] = useState<PaymentStage>('landing');
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
    amount: '',
    currency: 'USD',
    category: 'Safari Deposit',
    paymentMethod: '',
    agreedToTerms: false,
    cardInfo: {
      type: '',
      number: '',
      expiryMonth: '',
      expiryYear: '',
      cvn: ''
    }
  });

  const logoUrl = 'https://i.postimg.cc/nrcnnVL1/unnamed-(1).jpg';

  const showSupportMessage = () => {
    toast.info(
      <div className="space-y-2">
        <p className="font-bold text-[#1A1A1A]">Having trouble?</p>
        <p className="text-xs text-[#1A1A1A]/60">Contact our support team at <a href="tel:+256708012030" className="text-[#D4AF37] font-bold">0708012030</a> or <a href="mailto:info@kuzuri-escapedes.com" className="text-[#D4AF37] font-bold">info@kuzuri-escapedes.com</a>.</p>
      </div>,
      { duration: 6000 }
    );
  };

  const handleNext = () => {
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
      setStage('billing');
    } else if (stage === 'billing') {
      if (!formData.firstName || !formData.lastName || !formData.address1 || !formData.city || !formData.country || !formData.zip) {
        toast.error('Please complete all required billing fields.');
        return;
      }
      setStage('method');
    } else if (stage === 'method') {
      if (!formData.paymentMethod) {
        toast.error('Please select a payment method.');
        return;
      }
      if (formData.paymentMethod === 'card') {
        setStage('cardDetails');
      } else {
        setStage('processing');
        // Simulate processing
        setTimeout(() => {
          setStage('success');
        }, 3000);
      }
    } else if (stage === 'cardDetails') {
      if (!formData.cardInfo.type || !formData.cardInfo.number || !formData.cardInfo.expiryMonth || !formData.cardInfo.expiryYear || !formData.cardInfo.cvn) {
        toast.error('Please complete all card details.');
        return;
      }
      setStage('processing');
      // Simulate processing with potential error
      setTimeout(() => {
        // 10% chance of simulation error for demonstration
        if (Math.random() < 0.1) {
          setStage('cardDetails');
          toast.error('Payment failed. Please try again or contact support.');
          showSupportMessage();
        } else {
          setStage('success');
        }
      }, 3000);
    }
  };

  const handleBack = () => {
    if (stage === 'details') setStage('landing');
    else if (stage === 'billing') setStage('details');
    else if (stage === 'method') setStage('billing');
    else if (stage === 'cardDetails') {
      showSupportMessage();
      setStage('method');
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
                onClick={() => setStage('details')}
                className="w-full py-6 bg-[#1A1A1A] text-[#D4AF37] text-[12px] uppercase tracking-[0.6em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center gap-4"
              >
                MAKE A PAYMENT
                <ArrowRight size={18} />
              </button>
              <button 
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
              <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Kuzuri Escapades</p>
              <p className="text-[11px] text-[#1A1A1A]/50 uppercase tracking-widest">Kampala, Uganda</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Full Name</label>
                <input 
                  type="text" 
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="As it appears on your passport"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="For your digital receipt"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Account Reference / Booking ID</label>
                <input 
                  type="text" 
                  value={formData.bookingRef}
                  onChange={(e) => setFormData({...formData, bookingRef: e.target.value})}
                  className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                  placeholder="KUZ-XXXXXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Payment Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
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
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 pl-16 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
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
                I agree to the <span className="text-[#D4AF37] font-bold underline">Terms & Conditions</span> and understand that all payments are processed securely. I confirm that the booking reference provided is accurate.
              </label>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-sm">
              <Info size={18} className="text-[#D4AF37] shrink-0" />
              <p className="text-[11px] text-[#1A1A1A]/70 leading-relaxed">
                Please ensure your booking reference matches the one provided by our curators. For any assistance, please contact <span className="font-bold">info@kuzuri-escapedes.com</span>.
              </p>
            </div>

            <button 
              onClick={handleNext}
              className="w-full py-5 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4"
            >
              PROCEED TO PAYMENT
              <ArrowRight size={16} />
            </button>
          </motion.div>
        );

      case 'billing':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4 pb-6 border-b border-[#1A1A1A]/5">
                <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-full">
                  <Mail size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">Billing Information</h3>
                  <p className="text-[10px] text-[#1A1A1A]/40 uppercase tracking-widest font-bold">Please provide your official billing address</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">First Name</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Last Name</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Last Name"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Company Name (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Company Name"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Address Line 1</label>
                  <input 
                    type="text" 
                    value={formData.address1}
                    onChange={(e) => setFormData({...formData, address1: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Street address, P.O. box, etc."
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Address Line 2 (Optional)</label>
                  <input 
                    type="text" 
                    value={formData.address2}
                    onChange={(e) => setFormData({...formData, address2: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Apartment, suite, unit, building, floor, etc."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">City</label>
                  <input 
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="City"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Country / Region</label>
                  <select 
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
                  >
                    <option value="Uganda">Uganda</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">State / Province</label>
                  <input 
                    type="text" 
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="State / Province"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Zip / Postal Code</label>
                  <input 
                    type="text" 
                    value={formData.zip}
                    onChange={(e) => setFormData({...formData, zip: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Zip / Postal Code"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Email Address</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-8">
                <button 
                  onClick={handleBack}
                  className="flex-1 py-5 border border-[#1A1A1A]/10 text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
                >
                  BACK
                </button>
                <button 
                  onClick={handleNext}
                  className="flex-[2] py-5 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-2xl"
                >
                  PROCEED TO PAYMENT
                </button>
              </div>
            </div>

            {/* Side Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="bg-[#1A1A1A] p-8 border border-[#D4AF37]/20 shadow-2xl">
                  <h3 className="text-sm font-black text-[#D4AF37] uppercase tracking-widest mb-8 border-b border-[#D4AF37]/20 pb-4">Your Order</h3>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Service</p>
                        <p className="text-xs font-bold text-white">{formData.category}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">Reference</p>
                        <p className="text-xs font-bold text-white">{formData.bookingRef}</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-white/10">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-3">Total Amount</p>
                      <div className="bg-[#00C853] p-4 text-center rounded-sm shadow-[0_0_20px_rgba(0,200,83,0.3)]">
                        <span className="text-2xl font-black text-white">{formData.currency} {Number(formData.amount).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-[#1A1A1A]/5 bg-white space-y-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-[#D4AF37]" />
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#1A1A1A]/60">Secure Checkout</span>
                  </div>
                  <p className="text-[10px] text-[#1A1A1A]/40 leading-relaxed">
                    Your information is protected by industry-standard SSL encryption. Kuzuri Escapades ensures the highest level of security for your transaction.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      case 'method':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#1A1A1A]/40 mb-6">SELECT PAYMENT METHOD</p>
              
              <div 
                onClick={() => setFormData({...formData, paymentMethod: 'card'})}
                className={`p-6 border cursor-pointer transition-all flex items-center justify-between group ${formData.paymentMethod === 'card' ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-[#1A1A1A]/10 hover:border-[#D4AF37]/50'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white border border-[#1A1A1A]/5 flex items-center justify-center rounded-full">
                    <CreditCard size={20} className={formData.paymentMethod === 'card' ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/40'} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Credit / Debit Card</p>
                    <p className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest mt-1">Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'card' ? 'border-[#D4AF37]' : 'border-[#1A1A1A]/10'}`}>
                  {formData.paymentMethod === 'card' && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
                </div>
              </div>

              <div 
                onClick={() => setFormData({...formData, paymentMethod: 'mobile'})}
                className={`p-6 border cursor-pointer transition-all flex items-center justify-between group ${formData.paymentMethod === 'mobile' ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-[#1A1A1A]/10 hover:border-[#D4AF37]/50'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white border border-[#1A1A1A]/5 flex items-center justify-center rounded-full">
                    <Smartphone size={20} className={formData.paymentMethod === 'mobile' ? 'text-[#D4AF37]' : 'text-[#1A1A1A]/40'} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">Mobile Money</p>
                    <p className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest mt-1">MTN, Airtel (East Africa Only)</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'mobile' ? 'border-[#D4AF37]' : 'border-[#1A1A1A]/10'}`}>
                  {formData.paymentMethod === 'mobile' && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F3] p-8 border border-[#1A1A1A]/5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Booking Ref</span>
                <span className="text-xs font-bold text-[#1A1A1A]">{formData.bookingRef}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Subtotal</span>
                <span className="text-xs font-bold text-[#1A1A1A]">{formData.currency} {Number(formData.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-[#1A1A1A]/10">
                <span className="text-[11px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]">Total Amount</span>
                <span className="text-xl font-black text-[#D4AF37]">{formData.currency} {Number(formData.amount).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleBack}
                className="flex-1 py-5 border border-[#1A1A1A]/10 text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
              >
                BACK
              </button>
              <button 
                onClick={handleNext}
                className="flex-[2] py-5 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-2xl"
              >
                PROCEED TO PAYMENT
              </button>
            </div>
          </motion.div>
        );

      case 'cardDetails':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 pb-6 border-b border-[#1A1A1A]/5">
              <div className="w-10 h-10 bg-[#D4AF37]/10 flex items-center justify-center rounded-full">
                <Lock size={18} className="text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">Payment Details</h3>
                <p className="text-[10px] text-[#1A1A1A]/40 uppercase tracking-widest font-bold">Secure Encrypted Transaction</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Card Selection</label>
                <div className="flex flex-wrap gap-6">
                  {[
                    { id: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg', h: 'h-3' },
                    { id: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', h: 'h-5' },
                    { id: 'Amex', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg', h: 'h-5' }
                  ].map((card) => (
                    <label key={card.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="cardType"
                          value={card.id}
                          checked={formData.cardInfo.type === card.id}
                          onChange={(e) => setFormData({
                            ...formData, 
                            cardInfo: { ...formData.cardInfo, type: e.target.value }
                          })}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 transition-all ${formData.cardInfo.type === card.id ? 'border-[#D4AF37]' : 'border-[#1A1A1A]/10 group-hover:border-[#D4AF37]/50'}`}>
                          {formData.cardInfo.type === card.id && <div className="w-2.5 h-2.5 bg-[#D4AF37] rounded-full" />}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={card.logo} alt={card.id} className={`${card.h} w-auto opacity-80 group-hover:opacity-100 transition-opacity`} referrerPolicy="no-referrer" />
                        <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${formData.cardInfo.type === card.id ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'}`}>{card.id}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Card Number</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={formData.cardInfo.number}
                    onChange={(e) => setFormData({
                      ...formData, 
                      cardInfo: { ...formData.cardInfo, number: e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim() }
                    })}
                    className="w-full bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all font-mono tracking-widest"
                    placeholder="0000 0000 0000 0000"
                    maxLength={19}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <CreditCard size={18} className="text-[#1A1A1A]/20" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">Expiration Date</label>
                  <div className="flex gap-2">
                    <select 
                      value={formData.cardInfo.expiryMonth}
                      onChange={(e) => setFormData({
                        ...formData, 
                        cardInfo: { ...formData.cardInfo, expiryMonth: e.target.value }
                      })}
                      className="flex-1 bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(m => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                    <select 
                      value={formData.cardInfo.expiryYear}
                      onChange={(e) => setFormData({
                        ...formData, 
                        cardInfo: { ...formData.cardInfo, expiryYear: e.target.value }
                      })}
                      className="flex-1 bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all appearance-none"
                    >
                      <option value="">Year</option>
                      {Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() + i).toString()).map(y => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#1A1A1A]/60">CVN / Security Code</label>
                    <button 
                      type="button"
                      onClick={() => toast.info('The 3 or 4 digit security code on the back of your card.')}
                      className="text-[#D4AF37] hover:text-[#1A1A1A] transition-colors"
                    >
                      <HelpCircle size={14} />
                    </button>
                  </div>
                  <div className="flex gap-4">
                    <input 
                      type="password" 
                      value={formData.cardInfo.cvn}
                      onChange={(e) => setFormData({
                        ...formData, 
                        cardInfo: { ...formData.cardInfo, cvn: e.target.value }
                      })}
                      className="flex-1 bg-[#FAF8F3] border border-[#1A1A1A]/10 p-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all font-mono"
                      placeholder="***"
                      maxLength={4}
                    />
                    {/* CVN Visual Aid */}
                    <div className="hidden sm:flex items-center gap-2 px-3 bg-[#1A1A1A]/5 border border-[#1A1A1A]/5 rounded-sm">
                      <div className="w-10 h-6 bg-white border border-[#1A1A1A]/10 rounded-sm relative overflow-hidden">
                        <div className="absolute top-1 left-0 right-0 h-1.5 bg-[#1A1A1A]/20" />
                        <div className="absolute top-3.5 right-1 w-3 h-1.5 border border-[#D4AF37] rounded-[1px] flex items-center justify-center">
                          <div className="w-[1px] h-[1px] bg-[#D4AF37] rounded-full" />
                          <div className="w-[1px] h-[1px] bg-[#D4AF37] rounded-full mx-[1px]" />
                          <div className="w-[1px] h-[1px] bg-[#D4AF37] rounded-full" />
                        </div>
                      </div>
                      <span className="text-[8px] uppercase tracking-tighter font-bold text-[#1A1A1A]/40 leading-none">3-Digit<br/>Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F3] p-6 border border-[#1A1A1A]/5 flex items-center gap-4">
              <ShieldCheck size={20} className="text-[#D4AF37]" />
              <p className="text-[10px] text-[#1A1A1A]/60 leading-relaxed uppercase tracking-widest font-bold">
                Your payment is processed through a secure, encrypted connection. We do not store your full card details.
              </p>
            </div>

            {/* Dynamic Order Summary */}
            <div className="bg-[#1A1A1A] p-6 border border-[#D4AF37]/20 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[9px] uppercase tracking-widest font-bold text-white/40">Amount to Authorize</span>
                <span className="text-lg font-black text-[#D4AF37]">{formData.currency} {Number(formData.amount).toLocaleString()}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleBack}
                className="flex-1 py-5 border border-[#1A1A1A]/10 text-[#1A1A1A] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500"
              >
                CANCEL
              </button>
              <button 
                onClick={handleNext}
                className="flex-[2] py-5 bg-[#00C853] text-white text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#1A1A1A] hover:text-[#00C853] transition-all duration-500 shadow-[0_20px_50px_rgba(0,200,83,0.2)]"
              >
                PAY
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 flex flex-col items-center justify-center text-center space-y-10"
          >
            <div className="w-24 h-24 bg-green-50 flex items-center justify-center rounded-full">
              <CheckCircle2 size={48} className="text-green-600" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tight">Payment Confirmed</h3>
              <p className="text-sm text-[#1A1A1A]/60 max-w-md mx-auto">
                Your transaction was successful. A digital receipt has been dispatched to <span className="font-bold text-[#1A1A1A]">{formData.email}</span>.
              </p>
            </div>

            <div className="w-full bg-[#FAF8F3] p-8 border border-[#1A1A1A]/5 space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Transaction ID</span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]">KUZ-PAY-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Amount Paid</span>
                <span className="text-xs font-bold text-[#1A1A1A]">{formData.currency} {Number(formData.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/40">Date</span>
                <span className="text-xs font-bold text-[#1A1A1A]">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
            </div>

            <button 
              onClick={onBack}
              className="px-12 py-5 bg-[#1A1A1A] text-[#D4AF37] text-[11px] uppercase tracking-[0.5em] font-black hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all duration-500 shadow-2xl"
            >
              RETURN TO EXPLORATION
            </button>
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
                width: stage === 'details' ? '15%' : stage === 'billing' ? '30%' : stage === 'method' ? '45%' : stage === 'cardDetails' ? '60%' : stage === 'processing' ? '80%' : '100%' 
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
              href="tel:+256708012030"
              className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#D4AF37] transition-colors group"
            >
              <div className="w-8 h-8 bg-[#1A1A1A]/5 rounded-full flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-colors">
                <HelpCircle size={14} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Call Support / WhatsApp Us</span>
            </a>
            <a 
              href="mailto:info@kuzuri-escapedes.com"
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
