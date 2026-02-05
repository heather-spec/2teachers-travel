
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "I'm the 2Teachers assistant. How can I help you plan your Washington, D.C. trip today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      // Check for API key
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        // Fallback for demo/development if no key is present
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'bot', text: "I'm currently in demo mode. Please contact Jeane and René directly at 937-238-7388 for a personalized quote!" }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `
              You are the AI assistant for "2 Teachers Travel". 
              TONE: Modern, minimal, expert, helpful, educator-led.
              
              ABOUT THE FOUNDERS:
              - Jeane Toadvine: 40+ years experience. Expert in 8th-grade and NYC student trips. Organized Presidential Inauguration trips for 5 election cycles.
              - René Offenberger: 34 years classroom experience. Led 15+ DC trips. Expert in curriculum alignment.
              
              BUSINESS DIFFERENTIATORS:
              - "The smarter agency search" for school trips.
              - Founder-led: Every trip is led by Jeane or René. No anonymous corporate guides.
              - Budget Flexible: We build itineraries based on what schools can actually afford.
              - Safety: FMCSA-vetted buses and night security.
              
              INSTRUCTIONS:
              - Answer questions accurately using the founders' backgrounds.
              - Encourage users to "Request a Quote" or "Book a Planning Call".
              - Capture the user's intent to connect with the founders.
              - Mention the Central Ohio/Ohio service area if relevant.
              
              USER QUESTION: ${userMsg}
            `}]
          }
        ],
        config: {
          temperature: 0.7,
        }
      });

      const botText = response.text || "I'm having a connection issue. Please email us at 2TeachersTravelCompany@gmail.com or call 937-238-7388!";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Please fill out our contact form or email 2TeachersTravelCompany@gmail.com directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-brass text-white rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-inkNavy opacity-0 group-hover:opacity-10 transition-opacity"></div>
        {isOpen ? (
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /></svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] sm:w-[450px] h-[650px] bg-white rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] flex flex-col border border-slate-100 overflow-hidden animate-in slide-in-from-bottom-12 duration-500">
          <div className="bg-white p-10 border-b border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-inkNavy font-black text-2xl shadow-sm border border-slate-100">2T</div>
              <div>
                <h3 className="text-inkNavy font-black text-xl tracking-tight leading-none">Assistant</h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-slate text-[10px] uppercase font-black tracking-[0.2em]">Educator Insight</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate hover:text-inkNavy p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-10 space-y-8 bg-[#F9F7F2]/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-6 rounded-3xl text-[16px] leading-relaxed font-medium shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-inkNavy text-white rounded-br-none shadow-xl' 
                    : 'bg-white text-inkNavy border border-slate-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 flex gap-1.5 shadow-sm">
                   <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce"></div>
                   <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce delay-100"></div>
                   <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-10 bg-white border-t border-slate-50">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message the assistant..."
                className="w-full bg-[#F9F7F2] border-none rounded-3xl px-8 py-6 text-[15px] focus:ring-4 focus:ring-brass/10 transition-all pr-20 font-bold text-inkNavy placeholder:text-slate/40"
              />
              <button 
                onClick={handleSend}
                className="absolute right-4 w-12 h-12 bg-brass text-white rounded-2xl flex items-center justify-center hover:bg-inkNavy transition-all shadow-xl shadow-brass/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
