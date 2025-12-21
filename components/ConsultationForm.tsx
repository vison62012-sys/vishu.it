import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Shield, Mic, Check, Zap, Cpu, MessageSquare, Bot } from 'lucide-react';

interface ConsultationFormProps {
  onBack: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      {/* Cinematic Background - Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[15%] w-[20%] h-[20%] bg-purple-500/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full rounded-b-[60px] pt-12 pb-24 px-4 sm:px-8 overflow-hidden z-10">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=80"
            alt="AI Background"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-110 animate-float"
            style={{ filter: 'brightness(0.4) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent opacity-30"></div>
        </div>

        {/* Decorative SVG Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm40 24c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM36 48c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm50 32c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-54-16c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM40 20c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm50 48c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM16 50c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm44 40c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM10 20c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm80 40c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-52c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-44 48c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-44-10c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Header Content */}
        <div className="max-w-4xl mx-auto relative z-20">
          <div className="flex justify-between items-center mb-12">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-bold uppercase tracking-widest">Torna Indietro</span>
            </button>
            <div className="flex items-center gap-3 px-5 py-2.5 glass-effect rounded-full border-brand-orange/30">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_10px_#FF9F29]"></div>
              <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Intelligence</span>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-2">
              <Bot size={16} className="text-brand-orange" />
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em]">Next-Gen Consulting</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              L'AI che <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">rivoluziona</span><br />il tuo Business.
            </h1>
            <p className="text-white/60 text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Dimentica i vecchi moduli. Parla ora con il nostro agente intelligente per una strategia su misura istantanea.
            </p>
          </div>
        </div>

        {/* Floating Badges */}
        <div className="absolute bottom-10 left-10 hidden lg:block z-20 animate-float" style={{ animationDuration: '6s' }}>
          <div className="glass-effect p-4 rounded-3xl flex items-center gap-4 border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 flex items-center justify-center">
              <Zap size={24} className="text-brand-orange" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Velocità Estrema</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Risposte in 2.4s</div>
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-10 hidden lg:block z-20 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}>
          <div className="glass-effect p-4 rounded-3xl flex items-center gap-4 border-white/10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
              <Cpu size={24} className="text-blue-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Neural Engine</div>
              <div className="text-white/40 text-[10px] uppercase tracking-wider font-bold">GPT-4o Powered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 pb-32 relative z-30">
        {/* The Premium Console */}
        <div className="relative group">
          {/* External Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange/50 to-blue-500/30 rounded-[50px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          <div className="relative bg-brand-dark/80 backdrop-blur-3xl rounded-[45px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Console Header */}
            <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-brand-orange/20 border border-brand-orange/40"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                </div>
                <div className="h-4 w-[1px] bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-brand-orange" />
                  <span className="text-[11px] font-black text-white/80 uppercase tracking-[0.2em]">Consulting Console v2.0</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-black text-green-500 uppercase">Secure Connection</span>
                </div>
                <Mic size={18} className="text-white/40 hover:text-brand-orange transition-colors cursor-pointer" />
              </div>
            </div>

            {/* AI Agent Container */}
            <div className="relative h-[600px] sm:h-[700px] w-full bg-black/40">
              <iframe
                src="https://www.jotform.com/agent/019b3cf71f137dd2b34cd49c4e31ddb3649e?isVoice=1&skipWelcome=1&maximizable=1"
                title="AI Business Consultant"
                className="w-full h-full border-none"
                allow="microphone *; camera *; display-capture *; autoplay *; clipboard-write *; encrypted-media *; fullscreen *; geolocation *"
                allowFullScreen
              ></iframe>
              
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
            </div>

            {/* Console Footer */}
            <div className="px-8 py-6 bg-white/5 border-t border-white/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Shield size={20} className="text-brand-orange" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">Privacy AI</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase">100% Anonimo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Check size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">Analisi Dati</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase">In tempo reale</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Sparkles size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white uppercase tracking-wider">Strategia</div>
                    <div className="text-[10px] text-white/40 font-bold uppercase">Personalizzata</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent mx-auto"></div>
          <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.4em] leading-relaxed">
            Potenziato da Vishu Intelligence • 2025 Standard
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;


