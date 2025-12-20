import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, TrendingUp, Shield, Zap, DollarSign, Lock, Sparkles, ArrowRight } from 'lucide-react';
import { ConsultingService } from '../types';
import { ACTIVITY_CATEGORIES } from '../constants';
import SecretSection from './SecretSection';

interface ServiceDetailProps {
  service: ConsultingService;
  onBack: () => void;
  onConsultationClick?: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onConsultationClick }) => {
  const [secretClickCount, setSecretClickCount] = useState(0);
  const [showSecretSection, setShowSecretSection] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleSecretIconClick = () => {
    const now = Date.now();
    // Reset se passano più di 3 secondi tra un click e l'altro
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
    <>
      <div className="min-h-screen bg-brand-dark">
        {/* Hero Section */}
        <div className="relative w-full rounded-b-[50px] pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-8 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-orange via-brand-orange/95 to-brand-orange"></div>
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
            ></div>
          </div>

          {/* Animated Background Decor */}
          <div className="absolute top-20 right-[-20px] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none opacity-30"></div>
          <div className="absolute top-40 left-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none opacity-20"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          {/* Header */}
          <div className="flex justify-between items-center mb-8 relative z-20">
            <button
              onClick={onBack}
              className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-brand-dark hover:bg-white/40 transition-all shadow-lg border border-white/30 hover:scale-105 active:scale-95"
            >
              <ArrowLeft size={22} strokeWidth={2.5} />
            </button>
            <button
              onClick={handleSecretIconClick}
              className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-brand-dark hover:bg-white/40 transition-all shadow-lg border border-white/30 hover:scale-105 active:scale-95"
              title="Icona segreta"
            >
              <Lock size={20} className="opacity-40" />
            </button>
          </div>

          {/* Service Info */}
          <div className="relative z-10">
            {/* Icon and Badges - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[20px] sm:rounded-[24px] bg-white/20 backdrop-blur-xl flex items-center justify-center text-4xl sm:text-5xl shadow-2xl border border-white/30 flex-shrink-0">
                {service.icon}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-xl px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/30">
                    <Sparkles size={10} className="text-brand-dark sm:w-3 sm:h-3" />
                    <span className="text-brand-dark text-[10px] sm:text-xs font-bold uppercase tracking-wide">{service.category}</span>
                  </div>
                  {(() => {
                    const activityCat = ACTIVITY_CATEGORIES.find(c => c.id === service.activityType);
                    return activityCat && (
                      <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-xl px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/30">
                        <span className="text-sm sm:text-base">{activityCat.icon}</span>
                        <span className="text-brand-dark text-[10px] sm:text-xs font-bold uppercase tracking-wide">{activityCat.name}</span>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            <h1 className="text-[32px] sm:text-[38px] md:text-[42px] font-extrabold text-brand-dark leading-[1.1] sm:leading-tight mb-3 sm:mb-4 drop-shadow-lg">
              {service.name}
            </h1>
            <p className="text-brand-dark/90 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
              {service.shortDescription}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-8 py-8 -mt-8 space-y-6">
          {/* Problema che risolve */}
          <div className="bg-brand-card rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-2xl hover:shadow-brand-orange/10 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Shield size={28} className="text-red-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">Problema che Risolve</h2>
                <div className="h-1 w-16 bg-red-400/30 rounded-full"></div>
              </div>
            </div>
            <div className="bg-brand-dark/50 rounded-[24px] p-5 border border-white/5">
              <p className="text-white/90 text-base leading-relaxed">
                {service.problem}
              </p>
            </div>
          </div>

          {/* Soluzioni */}
          <div className="bg-brand-card rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-blue-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">Le Nostre Soluzioni</h2>
                <div className="h-1 w-16 bg-blue-400/30 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-3">
              {service.solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-brand-dark/50 rounded-[20px] p-4 border border-white/5 hover:border-brand-orange/30 transition-all duration-300 group/item"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                      <Check size={16} className="text-brand-dark" strokeWidth={3} />
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed flex-1 pt-1">
                      {solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vantaggi Economici */}
          <div className="bg-brand-card rounded-[32px] p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl hover:shadow-green-500/10 transition-all duration-300 group">
            {/* Animated Background gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-orange/20 via-green-500/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp size={28} className="text-green-400" strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">{service.economicBenefits.title}</h2>
                  <div className="h-1 w-16 bg-green-400/30 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.economicBenefits.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-brand-dark/50 rounded-[20px] p-4 border border-white/5 hover:border-green-400/30 transition-all duration-300 group/item"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                        <DollarSign size={18} className="text-brand-dark" strokeWidth={2.5} />
                      </div>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed flex-1 pt-1.5">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {service.economicBenefits.savings && (
                <div className="bg-gradient-to-r from-brand-orange/30 via-brand-orange/20 to-brand-orange/30 border-2 border-brand-orange/40 rounded-[24px] p-5 mb-6 shadow-lg relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  ></div>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <Sparkles size={20} className="text-brand-dark" />
                    <p className="text-brand-dark font-extrabold text-lg sm:text-xl text-center">
                      {service.economicBenefits.savings}
                    </p>
                  </div>
                </div>
              )}

              {/* Target e KPI */}
              {(service.target || service.kpi) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.target && (
                    <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-[24px] p-5 border-2 border-blue-400/20 hover:border-blue-400/40 transition-all shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Target</span>
                      </div>
                      <p className="text-white font-semibold text-base">{service.target}</p>
                    </div>
                  )}
                  {service.kpi && (
                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-[24px] p-5 border-2 border-purple-400/20 hover:border-purple-400/40 transition-all shadow-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-2xl">📊</span>
                        </div>
                        <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">KPI</span>
                      </div>
                      <p className="text-white font-semibold text-base">{service.kpi}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 z-20 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent pt-12 max-w-2xl mx-auto">
            <button
              onClick={onConsultationClick}
              className="w-full bg-gradient-to-r from-brand-orange to-brand-orange/90 h-[76px] rounded-[38px] flex items-center justify-center gap-3 shadow-[0_12px_40px_rgba(255,159,41,0.4)] hover:shadow-[0_16px_50px_rgba(255,159,41,0.5)] active:scale-95 transition-all duration-300 group relative overflow-hidden border-2 border-white/10"
            >
              <span className="text-brand-dark font-extrabold text-lg sm:text-xl tracking-wide z-10 flex items-center gap-2">
                Richiedi Consulenza Gratuita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
            </button>
          </div>

          <div className="h-28"></div>
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
    </>
  );
};

export default ServiceDetail;

