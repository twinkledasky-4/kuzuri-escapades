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
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: "Hello! 👋 I am your Kuzuri concierge assistant. I can guide you through our territories, curated odysseys, and bespoke services. How may I assist your vision today?",
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
          GOAL: Guide users to WhatsApp (+256 708 012030) for specific bookings or provide deep knowledge about our curated territories like Bwindi, Murchison, and Queen Elizabeth.`
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
          text: response.text || "I apologize, our digital concierge is temporarily unavailable. Please contact us at info@kuzuri-escapades.com.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: "The concierge desk is currently quiet. Please reach us via WhatsApp at +256 708 012030 for immediate assistance.",
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
        className="fixed bottom-6 right-6 z-[1000] w-[64px] h-[64px] rounded-full bg-[#1A1A1A] border-2 border-[#D4AF37] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform focus:outline-none"
        aria-label="Open Digital Concierge"
      >
        <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      <div 
        className={`fixed md:bottom-24 md:right-8 bottom-0 right-0 w-full md:w-[420px] h-full md:h-[650px] bg-[#F5F5DC] z-[1001] shadow-2xl border-2 border-[#1A1A1A] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19, 1, 0.22, 1)] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}
      >
        <div className="bg-[#1A1A1A] p-8 flex justify-between items-center border-b-2 border-[#D4AF37]">
          <div>
            <p className="text-xl font-serif font-bold text-white mb-0">Digital Concierge</p>
            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-2 font-bold">Native Stewardship</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#FAF8F3]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-6 border-2 border-[#1A1A1A] shadow-sm ${msg.role === 'user' ? 'bg-[#8B5A2B] text-white' : 'bg-white text-[#1A1A1A]'}`}>
                <p className={`text-base leading-relaxed ${idx === 0 && msg.role === 'model' ? 'font-medium' : 'font-normal'}`}>
                  {msg.text}
                </p>
              </div>
              <span className="text-[10px] mt-3 font-bold opacity-50 uppercase tracking-widest">{msg.timestamp}</span>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2 p-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce [animation-delay:-0.3s]" />
            </div>
          )}
        </div>

        <div className="p-8 border-t-2 border-[#1A1A1A] bg-white">
          <div className="flex gap-3">
            <input 
              type="text"
              placeholder="How shall we author your odyssey?"
              className="flex-grow p-5 bg-[#FAF8F3] border-2 border-[#1A1A1A] outline-none text-base font-medium focus:border-[#D4AF37] transition-all"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading || !inputValue.trim()} 
              className="bg-[#1A1A1A] text-[#D4AF37] px-8 font-bold uppercase text-[11px] tracking-widest transition-all hover:bg-[#8B5A2B] hover:text-white disabled:opacity-30"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
