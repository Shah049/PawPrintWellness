
import React, { useState, useRef, useEffect } from 'react';
import { getSymptomAdvice } from '../services/geminiService';
import { Message } from '../types';

const SymptomChecker: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm Pawsy, your AI vet assistant. How can I help you and your pet today? Please tell me about any symptoms or concerns." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    const newHistory = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(newHistory);
    
    setIsLoading(true);
    const response = await getSymptomAdvice(newHistory);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="checker" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-teal-400 font-bold uppercase tracking-widest text-sm">Advanced Assistance</h2>
            <h3 className="text-4xl font-extrabold font-jakarta text-white">AI Pet Symptom Checker</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              Not sure if you need a vet visit? Describe your pet's symptoms to <span className="text-white font-bold italic">Pawsy</span>, our intelligent assistant. Get instant guidance and determine if an emergency visit is necessary.
            </p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <i className="fa-solid fa-bolt-lightning text-teal-400"></i>
                  </div>
                  <span>Instant initial assessment</span>
               </div>
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <i className="fa-solid fa-shield-cat text-teal-400"></i>
                  </div>
                  <span>Safety-first emergency triage</span>
               </div>
               <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <i className="fa-solid fa-clock-rotate-left text-teal-400"></i>
                  </div>
                  <span>Available 24/7 for pet parents</span>
               </div>
            </div>
            
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
               <p className="text-xs text-yellow-200/80 italic">
                 Note: This tool is for informational purposes and is not a substitute for professional veterinary advice.
               </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[600px] border border-slate-200">
            {/* Chat Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center">
                    <i className="fa-solid fa-robot text-teal-600 text-xl"></i>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold font-jakarta text-slate-900">Pawsy Assistant</h4>
                  <span className="text-xs text-emerald-600 font-bold uppercase tracking-tight">Active Online</span>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30"
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-teal-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-slate-100 bg-white">
              <div className="relative flex items-center gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe symptoms (e.g., dog is lethargic)..."
                  className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomChecker;
