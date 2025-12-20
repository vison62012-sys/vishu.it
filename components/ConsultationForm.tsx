import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, User, Building, MessageSquare, Send, CheckCircle, Clock, Target, Shield, Sparkles, TrendingUp, Star } from 'lucide-react';
import { ACTIVITY_CATEGORIES } from '../constants';

interface ConsultationFormProps {
  onBack: () => void;
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    activityType: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'email':
        if (!value) return 'Email obbligatoria';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Email non valida';
        return '';
      case 'phone':
        if (!value) return 'Telefono obbligatorio';
        if (!/^[\d\s\+\-\(\)]+$/.test(value)) return 'Telefono non valido';
        return '';
      case 'name':
        if (!value) return 'Nome obbligatorio';
        if (value.length < 2) return 'Nome troppo corto';
        return '';
      case 'activityType':
        if (!value) return 'Seleziona un tipo di attività';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Validazione in tempo reale
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida tutti i campi
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'company' && key !== 'message') {
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key] = error;
      }
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        name: true,
        email: true,
        phone: true,
        activityType: true,
        company: true,
        message: true
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simula invio form
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset dopo 5 secondi
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        activityType: '',
        company: '',
        message: ''
      });
      setErrors({});
      setTouched({});
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <div className="bg-brand-card rounded-[32px] p-8 border border-white/10 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-brand-orange/5 opacity-50"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/30 to-green-600/20 flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                <CheckCircle size={48} className="text-green-400" strokeWidth={2.5} />
              </div>
              <h2 className="text-white text-3xl font-extrabold mb-3">Richiesta Inviata!</h2>
              <p className="text-white/80 text-lg mb-2 font-medium">
                Grazie per la tua richiesta
              </p>
              <p className="text-white/60 text-base mb-8">
                Ti contatteremo entro <span className="text-brand-orange font-bold">24 ore</span> per organizzare la tua consulenza gratuita personalizzata.
              </p>
              <div className="bg-brand-dark/50 rounded-[20px] p-4 mb-6 border border-white/5">
                <p className="text-white/70 text-sm">
                  📧 Controlla la tua email per la conferma
                </p>
              </div>
              <button
                onClick={onBack}
                className="w-full bg-gradient-to-r from-brand-orange to-brand-orange/90 text-brand-dark font-extrabold py-4 rounded-[20px] hover:brightness-110 transition shadow-lg hover:shadow-xl"
              >
                Torna ai Servizi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <div className="relative w-full rounded-b-[50px] pt-12 sm:pt-16 pb-16 px-4 sm:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
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

        {/* Header */}
        <div className="flex justify-between items-center mb-8 relative z-20">
          <button
            onClick={onBack}
            className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-brand-dark hover:bg-white/40 transition-all shadow-lg border border-white/30 hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="w-28 h-28 rounded-[32px] bg-white/20 backdrop-blur-xl flex items-center justify-center text-7xl mx-auto mb-6 shadow-2xl border-2 border-white/30 relative">
            <span className="relative z-10">💼</span>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[32px]"></div>
          </div>
          <h1 className="text-[42px] sm:text-[52px] font-extrabold text-brand-dark leading-tight mb-4 drop-shadow-lg">
            Consulenza Gratuita
          </h1>
          <p className="text-brand-dark/90 text-lg sm:text-xl font-medium leading-relaxed mb-6">
            Scopri come possiamo aiutare la tua attività a crescere con soluzioni digitali personalizzate
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
              <Clock size={16} className="text-brand-dark" />
              <span className="text-brand-dark text-sm font-bold">Risposta in 24h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
              <Shield size={16} className="text-brand-dark" />
              <span className="text-brand-dark text-sm font-bold">100% Gratuita</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
              <Target size={16} className="text-brand-dark" />
              <span className="text-brand-dark text-sm font-bold">Personalizzata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-4 sm:px-8 py-8 -mt-8">
        <div className="max-w-2xl mx-auto">
          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 rounded-[32px] p-6 mb-6 border border-brand-orange/20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={24} className="text-brand-orange" />
              <h3 className="text-white text-xl font-bold">Perché scegliere la nostra consulenza?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Analisi Dettagliata</h4>
                  <p className="text-white/70 text-xs">Valutazione completa della tua attività digitale</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Soluzioni Personalizzate</h4>
                  <p className="text-white/70 text-xs">Strategie su misura per il tuo settore</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Esperti del Settore</h4>
                  <p className="text-white/70 text-xs">Team con anni di esperienza</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-brand-orange flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Nessun Impegno</h4>
                  <p className="text-white/70 text-xs">Consulenza gratuita senza vincoli</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-card rounded-[32px] p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[16px] bg-brand-orange/20 flex items-center justify-center">
                  <MessageSquare size={24} className="text-brand-orange" />
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Compila il Form</h2>
                  <p className="text-white/60 text-sm">Ti contatteremo al più presto</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <User size={18} className="text-brand-orange" />
                  Nome e Cognome *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={`w-full h-14 bg-brand-dark rounded-[20px] px-5 text-white placeholder-white/40 border transition ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : touched.name && !errors.name
                      ? 'border-green-500/50 focus:border-green-500'
                      : 'border-white/10 focus:border-brand-orange'
                  } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                  placeholder="Mario Rossi"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                    <span>⚠️</span> {errors.name}
                  </p>
                )}
              </div>

              {/* Email e Telefono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-white font-semibold mb-3">
                    <Mail size={18} className="text-brand-orange" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full h-14 bg-brand-dark rounded-[20px] px-5 text-white placeholder-white/40 border transition ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : touched.email && !errors.email
                        ? 'border-green-500/50 focus:border-green-500'
                        : 'border-white/10 focus:border-brand-orange'
                    } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                    placeholder="mario.rossi@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="flex items-center gap-2 text-white font-semibold mb-3">
                    <Phone size={18} className="text-brand-orange" />
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full h-14 bg-brand-dark rounded-[20px] px-5 text-white placeholder-white/40 border transition ${
                      errors.phone 
                        ? 'border-red-500 focus:border-red-500' 
                        : touched.phone && !errors.phone
                        ? 'border-green-500/50 focus:border-green-500'
                        : 'border-white/10 focus:border-brand-orange'
                    } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                    placeholder="+39 123 456 7890"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Azienda e Tipo Attività */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-white font-semibold mb-3">
                    <Building size={18} className="text-brand-orange" />
                    Azienda/Attività
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-14 bg-brand-dark rounded-[20px] px-5 text-white placeholder-white/40 border border-white/10 focus:border-brand-orange focus:outline-none transition"
                    placeholder="Nome della tua attività"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-white font-semibold mb-3">
                    <span className="text-brand-orange">🏢</span>
                    Tipo di Attività *
                  </label>
                  <select
                    name="activityType"
                    value={formData.activityType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full h-14 bg-brand-dark rounded-[20px] px-5 text-white border transition appearance-none ${
                      errors.activityType 
                        ? 'border-red-500 focus:border-red-500' 
                        : touched.activityType && !errors.activityType
                        ? 'border-green-500/50 focus:border-green-500'
                        : 'border-white/10 focus:border-brand-orange'
                    } focus:outline-none focus:ring-2 focus:ring-brand-orange/20`}
                  >
                    <option value="" className="bg-brand-dark">Seleziona tipo attività</option>
                    {ACTIVITY_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                      <option key={cat.id} value={cat.id} className="bg-brand-dark">
                        {cat.icon} {cat.name}
                      </option>
                    ))}
                  </select>
                  {errors.activityType && (
                    <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                      <span>⚠️</span> {errors.activityType}
                    </p>
                  )}
                </div>
              </div>

              {/* Messaggio */}
              <div>
                <label className="flex items-center gap-2 text-white font-semibold mb-3">
                  <MessageSquare size={18} className="text-brand-orange" />
                  Raccontaci le tue esigenze
                  <span className="text-white/40 text-xs font-normal ml-auto">(Opzionale)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={500}
                  rows={5}
                  className="w-full bg-brand-dark rounded-[20px] px-5 py-4 text-white placeholder-white/40 border border-white/10 focus:border-brand-orange focus:outline-none transition resize-none focus:ring-2 focus:ring-brand-orange/20"
                  placeholder="Descrivi brevemente la tua attività e le sfide che stai affrontando..."
                />
                <p className={`text-xs mt-2 ${formData.message.length >= 450 ? 'text-orange-400' : 'text-white/40'}`}>
                  {formData.message.length}/500 caratteri
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-orange to-brand-orange/90 h-[72px] rounded-[36px] flex items-center justify-center gap-3 shadow-[0_12px_40px_rgba(255,159,41,0.4)] hover:shadow-[0_16px_50px_rgba(255,159,41,0.5)] active:scale-95 transition-all duration-300 group relative overflow-hidden border-2 border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-brand-dark font-extrabold text-lg sm:text-xl tracking-wide z-10 flex items-center gap-2">
                  {isSubmitting ? 'Invio in corso...' : 'Richiedi Consulenza Gratuita'}
                  {!isSubmitting && <Send size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </button>

              <p className="text-white/50 text-xs text-center">
                I tuoi dati saranno trattati in conformità con il GDPR. Non invieremo spam.
              </p>
              </form>
            </div>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-[24px] p-5 border border-blue-400/20 text-center hover:border-blue-400/40 transition-all group">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Clock size={24} className="text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Risposta in 24h</h3>
              <p className="text-white/60 text-xs">Ti contattiamo entro un giorno lavorativo</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-[24px] p-5 border border-purple-400/20 text-center hover:border-purple-400/40 transition-all group">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Target size={24} className="text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">Consulenza Personalizzata</h3>
              <p className="text-white/60 text-xs">Analisi specifica per la tua attività</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-[24px] p-5 border border-green-400/20 text-center hover:border-green-400/40 transition-all group">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Shield size={24} className="text-green-400" />
              </div>
              <h3 className="text-white font-bold text-sm mb-1">100% Gratuita</h3>
              <p className="text-white/60 text-xs">Nessun costo, nessun impegno</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;

