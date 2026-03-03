import React, { useState } from 'react';

declare global {
  interface Window {
    FlutterwaveCheckout: (config: any) => void;
  }
}

interface PaymentSectionProps {
  tourName?: string;
  defaultAmount?: number;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({ 
  tourName = "Queen Elizabeth Park", 
  defaultAmount = 100 
}) => {
  const [currency, setCurrency] = useState('USD');
  const [isProcessing, setIsProcessing] = useState(false);

  const makePayment = () => {
    if (typeof window.FlutterwaveCheckout !== 'function') {
      alert("Payment system is still loading. Please try again in a moment.");
      return;
    }

    setIsProcessing(true);
    
    // Example logic: USD 100 or UGX 350,000 or KES 15,000
    let amountValue = defaultAmount;
    if (currency === "UGX") amountValue = 350000;
    if (currency === "KES") amountValue = 15000;
    if (currency === "USD") amountValue = defaultAmount;

    window.FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X", // Permanent Test Key
      tx_ref: "TOUR-" + Date.now(),
      amount: amountValue,
      currency: currency,
      payment_options: "card, mobilemoneyuganda, ussd",
      customer: {
        email: "client-test@example.com",
        phone_number: "0700000000",
        name: "Tourism Client",
      },
      customizations: {
        title: "Kuzuri Escapades",
        description: `Booking for ${tourName}`,
        logo: "https://i.postimg.cc/bYRVDkb8/ugandans.jpg",
      },
      callback: function (data: any) {
        setIsProcessing(false);
        alert("Payment Successful! Transaction ID: " + data.transaction_id);
        console.log(data);
      },
      onclose: function() {
        setIsProcessing(false);
        console.log("Payment window closed");
      }
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-black/5 w-full">
      <h3 className="text-xl font-sans font-black text-[#3B1E14] mb-6 uppercase tracking-tight">
        Select Your Package
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.3em] text-[#8B5A2B] font-black mb-3">
            Preferred Currency
          </label>
          <select 
            id="currency-picker" 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full bg-[#FAF8F3] border border-stone-200 py-4 px-6 text-[#1A1A1A] outline-none focus:border-[#D4AF37] transition-all font-sans rounded-lg appearance-none cursor-pointer"
          >
            <option value="UGX">Uganda Shillings (UGX)</option>
            <option value="USD">US Dollars (USD)</option>
            <option value="KES">Kenya Shillings (KES)</option>
          </select>
        </div>

        <div className="pt-4">
          <button 
            type="button" 
            onClick={makePayment}
            disabled={isProcessing}
            className={`w-full py-5 bg-[#D4AF37] text-[#1A1A1A] text-[11px] uppercase tracking-[0.8em] font-black hover:bg-[#1A1A1A] hover:text-[#D4AF37] transition-all duration-500 shadow-lg border-none flex items-center justify-center gap-3 ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isProcessing ? (
              <span className="animate-pulse">PROCESSING...</span>
            ) : (
              'BOOK TOUR NOW'
            )}
          </button>
        </div>
        
        <p className="text-[9px] text-stone-400 text-center uppercase tracking-widest font-bold mt-4">
          Secure Payment via Flutterwave
        </p>
      </div>
    </div>
  );
};
