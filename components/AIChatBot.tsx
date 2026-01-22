import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { KUZURI_KNOWLEDGE_BASE } from '../constants/knowledge.ts';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Greetings. I am your Kuzuri concierge assistant. I can guide you through our territories, curated odysseys, and bespoke services. How may I assist your vision today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const lastScrollY = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setOpacity(0.7);
      } else {
        setOpacity(1);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Kuzuri Concierge, a high-end luxury travel assistant for Kuzuri Escapades.
          
          KNOWLEDGE BASE:
          ${KUZURI_KNOWLEDGE_BASE}
          
          TONE & STYLE:
          - Extremely refined, professional, and knowledgeable.
          - Use "we" and maintain an aura of "Silent Luxury".
          - Be helpful but never overly casual.
          
          RULES:
          - Use the Knowledge Base strictly.
          - Guide bookings to WhatsApp: +256 708 012030 or Email: info@kuzuri-escapades.com.
          - Offer specific prices from the KB.`,
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
        const modelMsg: Message = {
          role: 'model',
          text: response.text || "I apologize, I couldn't process that vision. Please reach out to our human curators at info@kuzuri-escapades.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, modelMsg]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "I apologize, our digital concierge is currently unavailable. Please reach out via WhatsApp (+256 708 012030) or Email (info@kuzuri-escapades.com).",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-[1000] flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#1A1A1A] border-2 border-[#D4AF37] shadow-2xl transition-all duration-700 transform hover:scale-110 active:scale-95 focus:outline-none`}
        style={{ opacity }}
        aria-label="Open AI Assistant"
      >
        <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <div 
        className={`fixed inset-0 md:inset-auto md:bottom-10 md:right-[100px] z-[1001] transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        } bg-[#F5F5DC] md:rounded-2xl shadow-2xl md:w-[400px] md:h-[650px] flex flex-col overflow-hidden border-2 border-[#1A1A1A]`}
      >
        {/* Header */}
        <div className="bg-[#1A1A1A] p-8 flex justify-between items-center text-white shrink-0 border-b-2 border-[#D4AF37]">
          <div>
            <h3 className="text-xl font-serif tracking-tight text-white">Digital Concierge</h3>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mt-1 font-bold">Kuzuri Escapades</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#F5F5DC]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-5 text-sm leading-relaxed tracking-wide border-2 border-[#1A1A1A] ${
                msg.role === 'user' 
                  ? 'bg-[#8B5A2B] text-white shadow-lg' 
                  : 'bg-white text-[#1A1A1A] shadow-sm'
              }`}>
                {msg.text}
              </div>
              <span className="text-[10px] text-stone-600 mt-3 font-bold uppercase tracking-widest">{msg.timestamp}</span>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-3 text-stone-400 animate-pulse px-2">
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 border-t-2 border-[#1A1A1A] bg-white shrink-0">
          <div className="relative flex items-center">
            <input 
              type="text"
              placeholder="How shall we author your odyssey?"
              className="w-full py-4 px-6 bg-white border-2 border-[#1A1A1A] text-sm focus:border-[#8B5A2B] outline-none transition-all font-light text-[#1A1A1A]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} disabled={isLoading || !inputValue.trim()} className="absolute right-4 p-2 text-[#8B5A2B] hover:text-[#D4AF37]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
