import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, X, TrendingUp } from 'lucide-react';
import { ACTIVITY_CATEGORIES, CONSULTING_SERVICES } from '../constants';

interface ActivityFiltersProps {
  activeCategory: string;
  onChange: (categoryId: string) => void;
  searchQuery?: string;
}

/**
 * Sistema filtri "Filtra per Attività" 2025/2026 - OTTIMIZZATO
 * - Modalità compatta: pill integrata con conteggio servizi
 * - Modalità espansa: pannello full-width con statistiche real-time
 * - Animazioni fluide e micro-interazioni premium
 * - Performance ottimizzate con memoizzazione
 */
const ActivityFilters: React.FC<ActivityFiltersProps> = ({ activeCategory, onChange, searchQuery = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Calcola il conteggio servizi per categoria (memoizzato per performance)
  const categoryServiceCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    ACTIVITY_CATEGORIES.forEach(cat => {
      if (cat.id === 'all') {
        counts[cat.id] = CONSULTING_SERVICES.length;
      } else {
        counts[cat.id] = CONSULTING_SERVICES.filter(s => s.activityType === cat.id).length;
      }
    });

    return counts;
  }, []);

  // Mantiene sempre la tab "all" come prima
  const orderedCategories = useMemo(() => {
    return ACTIVITY_CATEGORIES;
  }, []);

  // Chiudi il pannello espanso quando si cambia route / activity dall'esterno
  useEffect(() => {
    setIsExpanded(false);
  }, [activeCategory]);

  // Chiudi con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isExpanded]);

  const activeLabel = orderedCategories.find(c => c.id === activeCategory)?.name || 'Tutte le attività';
  const activeCount = categoryServiceCounts[activeCategory] || 0;

  const handleSelect = (id: string) => {
    onChange(id);
    // Feedback tattile (se supportato)
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
          <span>Filtra per Attività</span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold border transition-all duration-300 ${isExpanded
              ? 'bg-brand-orange/20 text-brand-orange border-brand-orange/30'
              : 'bg-white/5 text-white/70 border-white/10'
              }`}
          >
            {isExpanded ? 'Vista completa' : 'Vista compatta'}
          </span>
        </h3>

        {/* Trigger compatto per modalità espansa */}
        <button
          type="button"
          onClick={() => setIsExpanded(v => !v)}
          className={`
            h-10 px-5 rounded-full text-[12px] font-semibold flex items-center gap-2
            border transition-all duration-300 active:scale-95 shadow-sm
            ${isExpanded
              ? 'border-brand-orange/50 bg-brand-orange/10 text-brand-orange hover:bg-brand-orange/15'
              : 'border-white/12 bg-white/5 hover:bg-white/10 text-white/80'
            }
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]
          `}
          aria-expanded={isExpanded}
          aria-controls="activity-filters-expanded"
        >
          <span className="truncate max-w-[120px] font-semibold">{activeLabel}</span>
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isExpanded ? 'bg-brand-orange/20 text-brand-orange' : 'bg-white/10 text-white/60'
              }`}>
              {activeCount}
            </span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
        </button>
      </div>

      {/* Modalità compatta: pill scrollabile */}
      <div
        className={`
          relative overflow-hidden transition-[max-height,opacity,transform] duration-500
          ${isExpanded ? 'max-h-0 opacity-0 -translate-y-2' : 'max-h-[72px] opacity-100 translate-y-0'}
        `}
      >
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2" style={{ WebkitOverflowScrolling: 'touch' }}>
          {orderedCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryServiceCounts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`
                  group relative flex items-center gap-2.5 px-5 h-12 rounded-full whitespace-nowrap 
                  transition-all duration-300 shadow-sm active:scale-95 flex-shrink-0
                  ${isActive
                    ? 'bg-brand-orange text-brand-dark font-bold shadow-[0_8px_24px_rgba(255,159,41,0.35)]'
                    : 'bg-brand-card text-white border border-white/10 hover:bg-brand-gray hover:border-white/20 hover:shadow-lg'
                  }
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F29]
                `}
                role="tab"
                aria-selected={isActive}
                aria-label={`Categoria ${cat.name}, servizi: ${count}`}
              >
                {/* Glow effect on hover */}
                {!isActive && hoveredCategory === cat.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <span className={`text-base relative z-10 transition-transform duration-300 ${hoveredCategory === cat.id ? 'scale-110' : 'scale-100'
                  }`}>
                  {cat.icon}
                </span>
                <span className="text-[13px] font-medium relative z-10">{cat.name}</span>

                {/* Conteggio servizi */}
                <span className={`
                  relative z-10 text-[10px] px-2 py-0.5 rounded-full font-bold transition-all duration-300
                  ${isActive
                    ? 'bg-brand-dark/20 text-brand-dark'
                    : 'bg-white/10 text-white/60 group-hover:bg-white/15 group-hover:text-white/80'
                  }
                `}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modalità espansa: pannello con tutti i filtri ben visibili */}
      <div
        id="activity-filters-expanded"
        className={`
          relative mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/95
          backdrop-blur-2xl shadow-[0_26px_80px_rgba(0,0,0,0.75)]
          transition-[max-height,opacity,transform] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isExpanded ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}
        `}
        aria-hidden={!isExpanded}
      >
        {/* Glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-orange/10" />

        <div className="relative p-5 pb-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 font-semibold mb-1">
                Mappa Attività
              </p>
              <p className="text-[13px] text-white/80 font-medium">
                Seleziona il contesto in cui operi, vedrai solo servizi rilevanti.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp size={12} className="text-brand-orange" />
                <span className="text-[11px] text-white/50">
                  {CONSULTING_SERVICES.length} servizi totali disponibili
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="
                w-8 h-8 rounded-full flex items-center justify-center
                bg-white/5 hover:bg-white/10 text-white/70 hover:text-white
                border border-white/10 transition-all duration-300 active:scale-90
              "
            >
              <X size={14} />
            </button>
          </div>

          {/* Griglia filtri: tutto visibile a colpo d'occhio */}
          <div className="
            grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1
          ">
            {orderedCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryServiceCounts[cat.id] || 0;
              const percentage = Math.round((count / CONSULTING_SERVICES.length) * 100);

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelect(cat.id)}
                  onMouseEnter={() => setHoveredCategory(cat.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`
                    group relative flex flex-col items-start justify-between
                    rounded-2xl p-3.5 h-[100px] text-left
                    border transition-all duration-300
                    overflow-hidden
                    ${isActive
                      ? 'border-brand-orange/80 bg-gradient-to-br from-brand-orange/20 via-brand-orange/10 to-transparent shadow-[0_12px_34px_rgba(255,159,41,0.35)] scale-[1.02]'
                      : 'border-white/8 bg-white/2 hover:border-white/20 hover:bg-white/5 hover:scale-[1.01]'}
                  `}
                >
                  {/* glow pill bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter-glow-gradient"
                  />

                  <div className="relative z-10 flex items-center gap-2.5 mb-2 w-full">
                    <div
                      className={`
                        w-9 h-9 rounded-2xl flex items-center justify-center text-[18px]
                        bg-white/5 border border-white/10
                        transition-all duration-300
                        ${isActive ? 'scale-110 bg-white text-brand-dark shadow-md' : 'group-hover:scale-110'}
                      `}
                    >
                      <span>{cat.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`
                          text-[12px] font-semibold truncate
                          ${isActive ? 'text-brand-orange' : 'text-white/85'}
                        `}
                      >
                        {cat.name}
                      </p>
                      <p className="text-[10px] text-white/45 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Statistiche e badge */}
                  <div className="relative z-10 flex items-center justify-between w-full mt-auto">
                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-medium uppercase tracking-[0.18em] ${isActive ? 'text-brand-orange/90' : 'text-white/35'
                        }`}>
                        {cat.id === 'all' ? 'TUTTO' : 'CONTESTO'}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-semibold text-brand-orange/90 px-2 py-0.5 bg-brand-orange/20 rounded-full">
                          Attivo
                        </span>
                      )}
                    </div>

                    {/* Conteggio con percentuale */}
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[13px] font-bold ${isActive ? 'text-brand-orange' : 'text-white/70'
                        }`}>
                        {count}
                      </span>
                      {cat.id !== 'all' && (
                        <span className="text-[9px] text-white/40 font-medium">
                          ({percentage}%)
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Progress bar sottile */}
                  {cat.id !== 'all' && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
                      <div
                        className={`h-full transition-all duration-500 ${isActive ? 'bg-brand-orange' : 'bg-white/20'
                          }`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFilters;
