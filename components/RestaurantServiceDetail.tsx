import React, { useState, useEffect } from 'react';
import {
    ArrowLeft, Check, TrendingUp, Shield, Zap, DollarSign,
    Lock, Sparkles, ArrowRight, Smartphone, Image as ImageIcon,
    Clock, AlertTriangle, MousePointer2, Star, Quote
} from 'lucide-react';
import { ConsultingService } from '../types';
import SecretSection from './SecretSection';

interface RestaurantServiceDetailProps {
    service: ConsultingService;
    onBack: () => void;
    onConsultationClick?: () => void;
}

const RestaurantServiceDetail: React.FC<RestaurantServiceDetailProps> = ({ service, onBack, onConsultationClick }) => {
    const [secretClickCount, setSecretClickCount] = useState(0);
    const [showSecretSection, setShowSecretSection] = useState(false);
    const [lastClickTime, setLastClickTime] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleSecretIconClick = () => {
        const now = Date.now();
        if (now - lastClickTime > 3000) {
            setSecretClickCount(1);
        } else {
            const newCount = secretClickCount + 1;
            setSecretClickCount(newCount);
            if (newCount >= 12) {
                setShowSecretSection(true);
                setSecretClickCount(0);
            }
        }
        setLastClickTime(now);
    };

    return (
        <div className={`min-h-screen bg-brand-dark transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Premium Hero Section */}
            <div className="relative h-[420px] sm:h-[480px] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover scale-110 animate-pulse-slow"
                        onError={(e) => {
                            e.currentTarget.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/60 to-brand-dark"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/20 to-transparent"></div>
                </div>

                {/* Floating Decor */}
                <div className="absolute top-20 right-[-10%] w-80 h-80 bg-brand-orange/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-10 left-[-5%] w-60 h-60 bg-blue-500/10 rounded-full blur-[80px]"></div>

                <div className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-12">
                    <div className="flex justify-between items-center mb-6 sm:mb-10">
                        <button
                            onClick={onBack}
                            className="w-11 h-11 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
                            aria-label="Torna indietro"
                            title="Indietro"
                        >
                            <ArrowLeft size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </button>
                        <button
                            onClick={handleSecretIconClick}
                            className="w-11 h-11 sm:w-12 sm:h-12 bg-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white/20 hover:text-white/40 transition-all border border-white/10"
                            aria-label="Area riservata"
                            title="Area riservata"
                        >
                            <Lock size={16} className="sm:w-[18px] sm:h-[18px]" />
                        </button>
                    </div>

                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 mb-3 sm:mb-4 animate-bounce-subtle">
                            <Sparkles size={12} className="text-brand-orange sm:w-[14px] sm:h-[14px]" />
                            <span className="text-brand-orange text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Servizio Premium Food</span>
                        </div>

                        <h1 className="text-[28px] sm:text-4xl md:text-5xl font-black text-white leading-[1.15] sm:leading-tight mb-3 sm:mb-4 drop-shadow-2xl">
                            {service.name.split(' ').map((word, i) => {
                                const isOrange = i === 0 || i === 1 || word.toLowerCase() === 'qr' || word.toLowerCase() === 'digitale';
                                return (
                                    <span key={i} className={isOrange ? 'text-brand-orange' : ''}>{word} </span>
                                );
                            })}
                        </h1>

                        <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-6 sm:mb-8 border-l-2 border-brand-orange/50 pl-3 sm:pl-4">
                            {service.tagline || 'Digitale. Igienico. Redditizio.'} <br />
                            <span className="text-white/60 text-xs sm:text-sm md:text-base font-normal">{service.shortDescription}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="px-4 sm:px-6 -mt-16 sm:-mt-20 relative z-20 pb-32 sm:pb-40 space-y-6 sm:space-y-10">

                {/* Why Choose Us Cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {(service.stats || [
                        { icon: '📈', label: "Risparmio", value: "€2k/anno", color: "from-green-500/20 to-green-600/10", text: "text-green-400" },
                        { icon: '⚡', label: "Update", value: "Real-time", color: "from-blue-500/20 to-blue-600/10", text: "text-blue-400" },
                        { icon: '✨', label: "Design", value: "HD Foto", color: "from-brand-orange/20 to-brand-orange/10", text: "text-brand-orange" }
                    ]).map((item, i) => (
                        <div key={i} className="glass-effect rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-2 border-white/10 hover:border-white/20 transition-all hover:scale-105">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.text} text-lg sm:text-xl`}>
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] sm:text-[10px] text-white/40 uppercase font-bold tracking-tighter">{item.label}</span>
                                <span className={`text-xs sm:text-sm font-black ${item.text}`}>{item.value}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Problem Section */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-transparent rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-brand-card rounded-[32px] p-8 border border-white/5 overflow-hidden">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                                <AlertTriangle size={24} />
                            </div>
                            <h2 className="text-2xl font-black text-white">Il Costo dell'Inefficienza</h2>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white/70 leading-relaxed italic border-l-4 border-red-500/30 pl-4 py-2">
                                "{service.problem}"
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                    <span className="block text-red-400 font-bold mb-1">Costi Nascosti</span>
                                    <span className="text-xs text-white/50">Ristampe, menu unti e perdita di immagine.</span>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                                    <span className="block text-red-400 font-bold mb-1">Mano d'opera</span>
                                    <span className="text-xs text-white/50">Tempo perso a spiegare varianti e mancanze.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Before vs After - THE CONVERTER */}
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="text-3xl font-black text-white mb-2">Da Obsoleto a <span className="text-brand-orange underline underline-offset-8">Premium</span></h2>
                        <p className="text-white/40 text-sm">Guarda la differenza immediata</p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        {/* Before */}
                        <div className="relative h-24 rounded-2xl bg-brand-card/50 overflow-hidden border border-white/5 group opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute inset-0 flex items-center px-6">
                                <div className="w-12 h-12 bg-gray-500/20 rounded-xl flex items-center justify-center text-gray-400 mr-4 text-xl">
                                    {service.beforeAfter?.before?.icon || '❌'}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">{service.beforeAfter?.before?.title || 'Vecchio Sistema'}</h3>
                                    <p className="text-white/40 text-xs">{service.beforeAfter?.before?.desc || 'Lento, analogico e inefficiente'}</p>
                                </div>
                                <div className="ml-auto text-red-500/50">
                                    <AlertTriangle size={20} />
                                </div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center -my-2 relative z-10">
                            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/40 animate-bounce-subtle">
                                <ArrowRight size={20} className="text-brand-dark rotate-90" />
                            </div>
                        </div>

                        {/* After */}
                        <div className="relative h-32 rounded-3xl bg-brand-orange overflow-hidden shadow-[0_20px_40px_rgba(255,159,41,0.3)] group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                            <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                            <div className="absolute inset-0 flex items-center px-8">
                                <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center text-brand-orange shadow-2xl animate-float text-3xl">
                                    {service.beforeAfter?.after?.icon || '🚀'}
                                </div>
                                <div className="ml-6 flex-1">
                                    <h3 className="text-brand-dark font-black text-xl">{service.beforeAfter?.after?.title || 'Sistema Digital V2'}</h3>
                                    <p className="text-brand-dark/70 text-sm font-bold mt-1">{service.beforeAfter?.after?.desc || 'Sottile, veloce, wow.'}</p>
                                    <div className="flex gap-2 mt-2">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={10} fill="black" className="text-brand-dark opacity-40" />)}
                                    </div>
                                </div>
                                <div className="text-brand-dark absolute right-4 top-4">
                                    <Sparkles size={24} className="animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-white">Cosa perdi non usandolo</h2>
                        <div className="h-px flex-1 bg-white/10 ml-6"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {service.solutions.map((solution, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-brand-card hover:bg-brand-gray transition-all rounded-3xl p-6 border border-white/5"
                            >
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 flex items-center justify-center text-brand-orange transition-all scale-100 group-hover:scale-110">
                                        <Check size={24} strokeWidth={3} />
                                    </div>
                                    <p className="text-white/90 text-lg font-bold flex-1">
                                        {solution}
                                    </p>
                                </div>
                                <div className="absolute bottom-[-20px] right-[-20px] text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    <Sparkles size={100} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROI Banner */}
                <div className="bg-gradient-to-br from-[#111] to-[#0A0A0A] border-2 border-brand-orange/30 rounded-[40px] p-8 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute inset-0 opacity-5 pointer-events-none pattern-grid"></div>

                    <div className="relative z-10">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center text-brand-orange animate-pulse">
                                <DollarSign size={32} />
                            </div>
                        </div>
                        <p className="text-white/60 text-sm uppercase font-bold tracking-widest mb-2">Risparmio Garantito</p>
                        <h3 className="text-4xl font-black text-white mb-6">
                            {service.economicBenefits.savings}
                        </h3>

                        <div className="space-y-3">
                            {service.economicBenefits.benefits.map((b, i) => (
                                <div key={i} className="flex items-center justify-center gap-2 text-white/80 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                                    <span>{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Psychology Quote Section */}
                <div className="relative py-10">
                    <Quote size={80} className="absolute top-0 left-0 text-brand-orange opacity-5 -translate-x-10" />
                    <div className="relative z-10 bg-brand-orange/5 border border-brand-orange/10 rounded-3xl p-8 italic text-center">
                        <p className="text-xl text-white/90 font-medium leading-relaxed">
                            {service.psychologyQuote || (
                                <>"Il cliente vede la foto del piatto = ordina di più. <span className="text-brand-orange font-black">È psicologia, non magia.</span>"</>
                            )}
                        </p>
                    </div>
                </div>

            </div>

            {/* Extreme Conversion CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-6 z-50">
                <div className="max-w-xl mx-auto">
                    <div className="bg-brand-dark/80 backdrop-blur-3xl rounded-[32px] sm:rounded-[40px] p-3 sm:p-4 border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                        <button
                            onClick={onConsultationClick}
                            className="w-full bg-gradient-to-r from-brand-orange via-[#FFAE33] to-brand-orange h-[68px] sm:h-[80px] rounded-[24px] sm:rounded-[30px] flex items-center justify-between px-5 sm:px-8 shadow-[0_20px_40px_rgba(255,159,41,0.4)] hover:shadow-[0_25px_50px_rgba(255,159,41,0.6)] active:scale-95 transition-all duration-300 group overflow-hidden relative"
                        >
                            <div className="relative z-10 flex flex-col items-start">
                                <span className="text-brand-dark font-black text-base sm:text-xl tracking-tighter">PRENOTA CONSULENZA</span>
                                <span className="text-brand-dark/60 text-[9px] sm:text-[10px] uppercase font-bold">Analisi gratuita del tuo locale</span>
                            </div>
                            <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 bg-brand-dark rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-orange group-hover:translate-x-1 transition-transform">
                                <ArrowRight size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Secret Section Modal */}
            {showSecretSection && service.secretSection && (
                <SecretSection
                    content={service.secretSection}
                    onClose={() => {
                        setShowSecretSection(false);
                        setSecretClickCount(0);
                    }}
                />
            )}

            {/* Global Animations Style Tag */}
            <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
        .animate-float {
          animation: float 4s infinite ease-in-out;
        }
        .pattern-dots {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M20 20L0 0h40L20 20z' fill='%23000' fill-opacity='.1'/%3E%3C/svg%3E");
        }
        .pattern-grid {
          background-image: radial-gradient(#FF9F29 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }
      `}</style>
        </div>
    );
};

export default RestaurantServiceDetail;
