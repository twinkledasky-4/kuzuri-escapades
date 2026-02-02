import React, { useState } from 'react';
import { Lock, Eye, EyeOff, ChevronRight, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (password: string) => void;
  onCancel: () => void;
  error?: string;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel, error }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const logoUrl = 'https://i.postimg.cc/nrcnnVL1/unnamed-(1).jpg';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="fixed inset-0 z-[10005] flex items-center justify-center bg-[#050505] p-6 selection:bg-[#D4AF37] selection:text-[#050505]">
      {/* High-Fidelity Grain Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">
        {/* Logo Gateway */}
        <div className="mb-20">
          <div className="w-28 h-28 rounded-full border border-[#D4AF37]/20 p-1 flex items-center justify-center bg-white shadow-[0_0_80px_rgba(212,175,55,0.1)]">
            <img 
              src={logoUrl} 
              alt="Kuzuri Official" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        <div className="w-full text-center mb-12">
          <h2 className="text-white font-serif text-4xl font-bold tracking-[0.05em] uppercase mb-4">
            COMMAND <span className="italic font-light text-[#D4AF37]">CENTER</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-[1px] bg-[#D4AF37]/20" />
            <p className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-black">Secure Curator Gateway</p>
            <div className="w-10 h-[1px] bg-[#D4AF37]/20" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-12">
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#D4AF37]/30 group-focus-within:text-[#D4AF37]">
                <Lock size={18} strokeWidth={1.5} />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                autoFocus
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="AUTHENTICATION KEY"
                className="w-full bg-transparent border-b border-white/10 py-4 pl-10 pr-12 text-lg text-white focus:border-[#D4AF37] outline-none transition-all font-mono tracking-[0.3em] placeholder:text-white/5 placeholder:tracking-widest"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#D4AF37] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            {error && (
              <div className="flex items-center gap-3 text-red-500 text-[10px] uppercase tracking-[0.2em] font-black animate-pulse py-2">
                <ShieldCheck size={12} /> {error}
              </div>
            )}
          </div>

          <div className="pt-6 space-y-8">
            <button 
              type="submit"
              className="w-full py-6 bg-white text-black text-[12px] uppercase tracking-[0.8em] font-black hover:bg-[#D4AF37] hover:text-black transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 group/btn"
            >
              INITIALIZE <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            <button 
              type="button"
              onClick={onCancel}
              className="w-full py-2 text-[10px] uppercase tracking-[0.4em] text-white/10 font-bold hover:text-white transition-colors"
            >
              ← RETURN TO PUBLIC VIEW
            </button>
          </div>
        </form>

        <div className="mt-32 opacity-20">
          <p className="text-[9px] uppercase tracking-[0.5em] font-black text-white">
            KUZURI INFRASTRUCTURE v4.2.8 • ENCRYPTED SESSION
          </p>
        </div>
      </div>
    </div>
  );
};