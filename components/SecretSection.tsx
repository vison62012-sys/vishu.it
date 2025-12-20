import React, { useState, useEffect } from 'react';
import { X, Lock, Eye, EyeOff } from 'lucide-react';
import { SecretSectionContent } from '../types';

interface SecretSectionProps {
  content: SecretSectionContent;
  onClose: () => void;
}

const SECRET_PIN = '313131';

const SecretSection: React.FC<SecretSectionProps> = ({ content, onClose }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === SECRET_PIN) {
      setIsUnlocked(true);
      setError('');
    } else {
      setError('PIN errato. Riprova.');
      setPin('');
    }
  };

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
        <div className="bg-brand-card rounded-[32px] p-8 max-w-md w-full border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-xl font-bold">Accesso Riservato</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center text-white hover:bg-brand-orange transition"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Lock size={20} className="text-brand-orange" />
              <p className="text-white/80 text-sm">Inserisci il PIN a 6 cifre</p>
            </div>
            
            <form onSubmit={handlePinSubmit}>
              <div className="relative mb-4">
                <input
                  type={showPin ? 'text' : 'password'}
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value.replace(/\D/g, '').slice(0, 6));
                    setError('');
                  }}
                  className="w-full h-14 bg-brand-dark rounded-[20px] px-4 text-white text-center text-2xl tracking-widest font-mono border border-white/10 focus:border-brand-orange focus:outline-none"
                  placeholder="••••••"
                  maxLength={6}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPin ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              {error && (
                <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={pin.length !== 6}
                className="w-full h-12 bg-brand-orange text-brand-dark font-bold rounded-[20px] disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition"
              >
                Accedi
              </button>
            </form>
          </div>
          
          <p className="text-white/40 text-xs text-center">
            Questa sezione contiene informazioni riservate per la vendita
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 overflow-y-auto">
      <div className="min-h-screen p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sticky top-0 bg-black/50 backdrop-blur-xl p-4 rounded-[20px] border border-white/10 z-10">
          <div>
            <h1 className="text-white text-2xl font-bold mb-1">Sezione Riservata</h1>
            <p className="text-white/60 text-sm">Materiale esclusivo per la vendita</p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-brand-card flex items-center justify-center text-white hover:bg-brand-orange transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Killer Phrases */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>💬</span> Frasi Killer
          </h2>
          <div className="space-y-3">
            {content.killerPhrases.map((phrase, index) => (
              <div
                key={index}
                className="bg-brand-dark rounded-[20px] p-4 border-l-4 border-brand-orange"
              >
                <p className="text-white text-sm leading-relaxed">{phrase}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scripts */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>📝</span> Script di Vendita
          </h2>
          <div className="space-y-4">
            {content.scripts.map((script, index) => (
              <div key={index} className="bg-brand-dark rounded-[20px] p-5">
                <h3 className="text-white font-bold mb-2">{script.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{script.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Objections Handling */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>🛡️</span> Gestione Obiezioni
          </h2>
          <div className="space-y-4">
            {content.objections.map((obj, index) => (
              <div key={index} className="bg-brand-dark rounded-[20px] p-5">
                <div className="mb-2">
                  <span className="text-red-400 text-xs font-semibold">OBIEZIONE:</span>
                  <p className="text-white/90 font-medium mt-1">{obj.objection}</p>
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-green-400 text-xs font-semibold">RISPOSTA:</span>
                  <p className="text-white/80 text-sm mt-1 leading-relaxed">{obj.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Techniques */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>🎯</span> Tecniche di Chiusura
          </h2>
          <div className="space-y-2">
            {content.closingTechniques.map((technique, index) => (
              <div
                key={index}
                className="bg-brand-dark rounded-[16px] p-4 border border-brand-orange/30"
              >
                <p className="text-white text-sm">{technique}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Strategy */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>💰</span> Strategia di Prezzo
          </h2>
          <div className="space-y-2">
            {content.pricingStrategy.map((strategy, index) => (
              <div
                key={index}
                className="bg-brand-dark rounded-[16px] p-4"
              >
                <p className="text-white text-sm">{strategy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency Triggers */}
        <div className="bg-brand-card rounded-[32px] p-6 mb-6 border border-white/10">
          <h2 className="text-brand-orange text-xl font-bold mb-4 flex items-center gap-2">
            <span>⚡</span> Trigger di Urgenza
          </h2>
          <div className="space-y-2">
            {content.urgencyTriggers.map((trigger, index) => (
              <div
                key={index}
                className="bg-red-500/10 border border-red-500/30 rounded-[16px] p-4"
              >
                <p className="text-white text-sm">{trigger}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default SecretSection;

