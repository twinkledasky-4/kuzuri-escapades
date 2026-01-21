import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { KUZURI_KNOWLEDGE_BASE } from '../constants/knowledge';

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
      text: "Hello! 👋 I'm your Kuzuri travel assistant. I can help you with destination recommendations, tour package details, service inquiries, and more. How may I assist you today?",
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
        setOpacity(0.7); // Scroll down
      } else {
        setOpacity(1); // Scroll up or at top
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
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the Kuzuri Travel Assistant, a luxury travel concierge for Kuzuri Escapades.
          
          KNOWLEDGE BASE:
          ${KUZURI_KNOWLEDGE_BASE}
          
          TONE & STYLE:
          - Refined, professional, and warm (never robotic)
          - Use "we" when referring to Kuzuri
          - Enthusiastic about Uganda's beauty
          - Concise but comprehensive, maintaining "Silent Luxury"
          
          RULES:
          - Answer questions strictly based on the provided Knowledge Base.
          - If asked about bookings, guide users to WhatsApp: +256 708 012030.
          - If asked about pricing, use specific amounts from the KB.
          - If asked about visas/health, use specific details from the KB FAQs.
          - If info is missing, politely say so and offer to connect with a human agent (Lucky .K).`,
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
          text: response.text || "I apologize, I couldn't process that request. How else can I help?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, modelMsg]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        role: 'model',
        text: "I apologize, I'm experiencing a brief technical issue. Please reach out via WhatsApp (+256 708 012030) and our team will assist you immediately.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[1000] flex items-center justify-center w-[48px] h-[48px] md:w-[56px] md:h-[56px] rounded-full bg-[#002d04] shadow-[0_4px_12px_rgba(0,45,4,0.3)] transition-all duration-500 transform hover:scale-110 active:scale-95 focus:outline-none animate-fab-pulse-once`}
        style={{ opacity }}
        aria-label="Open AI Assistant"
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {/* Chat Window Interface */}
      <div 
        className={`fixed inset-0 md:inset-auto md:bottom-6 md:right-[96px] z-[1001] transition-all duration-700 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        } bg-white md:rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] md:w-[380px] md:h-[600px] flex flex-col overflow-hidden border border-stone-100`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#002d04] to-[#004d08] p-6 flex justify-between items-center text-white shrink-0">
          <div>
            <h3 className="text-lg font-serif tracking-wide">Kuzuri Travel Assistant</h3>
            <p className="text-[9px] uppercase tracking-[0.3em] opacity-60">Powered by AI</p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close chat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Message Area */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-6 space-y-6 bg-white scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-[#d4af37] text-white rounded-tr-none' 
                  : 'bg-stone-100 text-[#002d04] border border-stone-50 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
              <span className="text-[11px] text-stone-300 mt-2 font-medium tracking-tighter opacity-70">
                {msg.timestamp}
              </span>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-stone-200 animate-pulse px-2">
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
              <div className="w-1.5 h-1.5 bg-current rounded-full" />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 border-t border-stone-100 bg-white shrink-0">
          <div className="relative flex items-center">
            <input 
              type="text"
              placeholder="Ask about destinations, packages..."
              className="w-full pl-0 pr-12 py-3 bg-transparent border-b border-stone-100 text-sm focus:border-[#d4af37] outline-none transition-all font-light"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              maxLength={500}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-0 p-2 text-[#d4af37] disabled:text-stone-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <p className="text-[8px] text-stone-300 mt-4 text-center uppercase tracking-[0.2em] font-medium">Your private travel dialogue</p>
        </div>
      </div>
    </>
  );
};
