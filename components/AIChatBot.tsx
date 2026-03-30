
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { KUZURI_KNOWLEDGE_BASE } from '../constants/knowledge.ts';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { crmService } from '../services/crmService.ts';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Welcome to Kuzuri Escapades. I am your digital curator. I can check territory availability, share lodge insights, or help author your private itinerary. How may I assist your vision today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCapturedLead, setHasCapturedLead] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: `You are the Kuzuri Concierge, a lead curator for high-end luxury travel in Uganda. 
          KNOWLEDGE BASE: ${KUZURI_KNOWLEDGE_BASE}
          TONE: Refined, professional, knowledgeable. Use "we". 
          STYLE: "Silence as Luxury". Focus on evocativeness and high-fidelity native storytelling. Avoid exclamation marks in the body of your responses. 
          PRIMARY GOAL: Assist with availability inquiries, lodge details, and itinerary curation. 
          SECONDARY GOAL: For specific bookings, guide users to our official WhatsApp (+256 708 012030) or email (info@kuzuri-escapedes.com).`
        },
      });
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;
    initChat();
    const userMsg: Message = {
      role: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Functional Integration: Track live leads for Nasif
    if (!hasCapturedLead) {
      crmService.captureChatLead(inputValue);
      setHasCapturedLead(true);
    }

    try {
      if (chatRef.current) {
        const response = await chatRef.current.sendMessage({ message: inputValue });
        setMessages(prev => [...prev, {
          role: 'model',
          text: response.text || "I apologize, our digital concierge is temporarily quiet. Please contact our lead curator directly.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: "The concierge desk is currently resetting. For immediate availability, please message us on WhatsApp at +256 708 012030.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat/Inquiry Bubble - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-4 pointer-events-none">
        {!isOpen && (
          <div className="animate-fade-in flex flex-col items-end gap-3 pointer-events-auto">
             <button
              onClick={() => setIsOpen(true)}
              className="relative w-[60px] h-[60px] rounded-full bg-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center hover:scale-110 transition-all duration-500 group cursor-pointer focus:outline-none"
              aria-label="Ask about availability"
            >
              <MessageSquare className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" strokeWidth={2} />
              
              {/* Online Indicator */}
              <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
            </button>
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed md:bottom-10 md:right-10 bottom-4 right-4 w-[92vw] md:w-[320px] h-[75vh] md:h-[450px] bg-[#F5F5DC] z-[10005] shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] border border-white/20 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-xl overflow-hidden ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#1A1A1A] p-4 flex justify-between items-center border-b border-[#D4AF37]/30 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
               <Sparkles size={14} />
            </div>
            <div>
              <p className="text-sm font-serif font-bold text-white mb-0 uppercase tracking-tight">Kuzuri <span className="italic font-light">Concierge</span></p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[7px] uppercase tracking-widest text-[#D4AF37] font-black">Native Steward Online</p>
              </div>
            </div>
          </div>
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }} 
            className="text-white p-2 hover:bg-white/20 rounded-full transition-all cursor-pointer flex items-center justify-center relative z-30 border border-white/20"
            role="button"
            aria-label="Close Concierge"
          >
            <X size={18} strokeWidth={2.5} />
          </div>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6 bg-[#FAF8F3] scrollbar-thin">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}>
              <div className={`max-w-[90%] p-4 border border-[#1A1A1A]/10 shadow-sm ${msg.role === 'user' ? 'bg-[#8B5A2B] text-white rounded-l-xl rounded-tr-xl' : 'bg-white text-[#1A1A1A] rounded-r-xl rounded-tl-xl'}`}>
                <p className="text-[13px] leading-relaxed font-normal">
                  {msg.text}
                </p>
              </div>
              <span className="text-[8px] mt-2 font-black opacity-30 uppercase tracking-[0.2em]">{msg.timestamp}</span>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-1.5 p-3 bg-white/50 rounded-full w-fit">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s]" />
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[#1A1A1A]/10 bg-white">
          <div className="flex gap-3">
            <input 
              type="text"
              placeholder="Ask about availability..."
              className="flex-grow py-3 px-4 bg-[#FAF8F3] border border-[#1A1A1A]/10 outline-none text-sm font-medium focus:border-[#D4AF37] transition-all rounded-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !inputValue.trim()} 
              className="bg-[#1A1A1A] text-[#D4AF37] w-12 h-12 flex items-center justify-center rounded-sm transition-all hover:bg-[#8B5A2B] hover:text-white disabled:opacity-20 active:scale-95 shadow-xl"
              aria-label="Send message"
            >
              <Send size={16} strokeWidth={2} />
            </button>
          </div>
          <p className="text-[8px] text-center mt-4 text-[#1A1A1A]/40 font-bold uppercase tracking-widest">
            Typically responds in under 1 minute
          </p>
        </div>
      </div>
    </>
  );
};
