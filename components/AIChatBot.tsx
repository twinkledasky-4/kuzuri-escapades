
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { KUZURI_KNOWLEDGE_BASE } from '../constants/knowledge.ts';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: `You are the Kuzuri Concierge, a lead curator for high-end luxury travel in Uganda. 
          KNOWLEDGE BASE: ${KUZURI_KNOWLEDGE_BASE}
          TONE: Refined, professional, knowledgeable. Use "we". 
          STYLE: "Silence as Luxury". Focus on evocativeness and high-fidelity native storytelling. Avoid exclamation marks in the body of your responses. 
          PRIMARY GOAL: Assist with availability inquiries, lodge details, and itinerary curation. 
          SECONDARY GOAL: For specific bookings, guide users to our official WhatsApp (+256 708 012030) or email (info@kuzuri-escapades.com).`
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
      <div className="fixed bottom-8 right-8 z-[1000] flex flex-col items-end gap-4 pointer-events-none">
        {!isOpen && (
          <div className="animate-fade-in flex flex-col items-end gap-3 pointer-events-auto">
             <button
              onClick={() => setIsOpen(true)}
              className="relative w-[68px] h-[68px] rounded-full bg-[#1A1A1A] border-2 border-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 transition-all duration-500 group cursor-pointer focus:outline-none"
              aria-label="Ask about availability"
            >
              <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20 pointer-events-none" />
              <MessageSquare className="w-7 h-7 text-[#D4AF37] group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
              
              {/* Online Indicator */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-[#1A1A1A]" />
            </button>
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed md:bottom-10 md:right-10 bottom-0 right-0 w-full md:w-[450px] h-full md:h-[680px] bg-[#F5F5DC] z-[1001] shadow-[0_30px_100px_rgba(0,0,0,0.6)] border-2 border-[#1A1A1A] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#1A1A1A] p-8 flex justify-between items-center border-b-2 border-[#D4AF37]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
               <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xl font-serif font-bold text-white mb-0 uppercase tracking-tight">Kuzuri <span className="italic font-light">Concierge</span></p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-black">Native Steward Online</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white/40 p-2 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none"
            aria-label="Close Concierge"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#FAF8F3] scrollbar-thin">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}>
              <div className={`max-w-[90%] p-6 border border-[#1A1A1A]/10 shadow-sm ${msg.role === 'user' ? 'bg-[#8B5A2B] text-white rounded-l-2xl rounded-tr-2xl' : 'bg-white text-[#1A1A1A] rounded-r-2xl rounded-tl-2xl'}`}>
                <p className="text-[15px] leading-relaxed font-normal">
                  {msg.text}
                </p>
              </div>
              <span className="text-[9px] mt-3 font-black opacity-30 uppercase tracking-[0.2em]">{msg.timestamp}</span>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 p-4 bg-white/50 rounded-full w-fit">
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s]" />
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        <div className="p-8 border-t border-[#1A1A1A]/10 bg-white">
          <div className="flex gap-4">
            <input 
              type="text"
              placeholder="Ask about availability..."
              className="flex-grow py-4 px-6 bg-[#FAF8F3] border border-[#1A1A1A]/10 outline-none text-base font-medium focus:border-[#D4AF37] transition-all rounded-sm"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !inputValue.trim()} 
              className="bg-[#1A1A1A] text-[#D4AF37] w-14 h-14 flex items-center justify-center rounded-sm transition-all hover:bg-[#8B5A2B] hover:text-white disabled:opacity-20 active:scale-95 shadow-xl"
              aria-label="Send message"
            >
              <Send size={20} strokeWidth={2} />
            </button>
          </div>
          <p className="text-[9px] text-center mt-6 text-[#1A1A1A]/40 font-bold uppercase tracking-widest">
            Typically responds in under 1 minute
          </p>
        </div>
      </div>
    </>
  );
};
