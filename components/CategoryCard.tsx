import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { ConsultingService } from '../types';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    icon: string;
    description: string;
    image?: string;
  };
  services: ConsultingService[];
  onServiceSelect: (serviceId: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, services, onServiceSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded, services]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const defaultImage = category.id === 'restaurant'
    ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80';

  return (
    <div className="mb-5 overflow-visible">
      {/* Card Compressa con Glassmorphism 2025 */}
      <button
        onClick={toggleExpand}
        onMouseEnter={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
            e.currentTarget.style.transition = 'all 0.4s cubic-bezier(0.16,1,0.3,1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isExpanded) {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }
        }}
        className={`
          w-full relative overflow-hidden rounded-[24px] md:rounded-[32px]
          transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F29] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0F0F]
          ${isExpanded
            ? 'shadow-[0_25px_60px_rgba(255,159,41,0.4),0_0_0_1px_rgba(255,159,41,0.1)]'
            : 'shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_16px_56px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)]'
          }
        `}
        style={{
          transform: isExpanded ? 'scale(1.005) translateY(-2px)' : 'scale(1)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          willChange: 'transform',
        }}
        aria-expanded={isExpanded}
        aria-controls={`category-${category.id}-content`}
        role="button"
      >
        {/* Background Image con Parallax Effect */}
        <div className="absolute inset-0">
          <div
            className={`
              absolute inset-0 transition-all duration-1000 ease-out
              ${isExpanded ? 'opacity-15 scale-105' : 'opacity-25 scale-100'}
            `}
            style={{
              backgroundImage: `url(${category.image || defaultImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px) brightness(0.7)',
            }}
          />

          {/* Gradient Overlay Moderno 2025 */}
          <div
            className={`
              absolute inset-0 transition-all duration-700
              ${isExpanded
                ? 'bg-gradient-to-br from-brand-orange/70 via-brand-orange/60 to-brand-orange/50'
                : 'bg-gradient-to-br from-black/80 via-black/60 to-black/75'
              }
            `}
          />

          {/* Glassmorphism Layer */}
          <div
            className={`
              absolute inset-0 backdrop-blur-[1px] transition-opacity duration-500
              ${isExpanded ? 'opacity-100' : 'opacity-60'}
            `}
            style={{
              background: isExpanded
                ? 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            }}
          />

          {/* Animated Shine Effect */}
          <div
            className={`
              absolute inset-0 opacity-0 transition-opacity duration-1000
              ${isExpanded ? 'opacity-30' : ''}
            `}
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
              animation: isExpanded ? 'shine 3s infinite' : 'none',
            }}
          />
        </div>

        {/* Contenuto Card con Design 2025 */}
        <div className="relative z-10 p-7 flex items-center justify-between">
          <div className="flex items-center gap-5 flex-1">
            {/* Icona con Glassmorphism Avanzato */}
            <div
              className={`
                w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl
                transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                relative overflow-hidden
                ${isExpanded
                  ? 'bg-brand-dark/30 backdrop-blur-xl scale-110 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                  : 'bg-white/10 backdrop-blur-lg shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:scale-105'
                }
              `}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Glow Effect sull'Icona */}
              <div
                className={`
                  absolute inset-0 rounded-[24px] transition-opacity duration-500
                  ${isExpanded ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  background: 'radial-gradient(circle, rgba(255,159,41,0.3) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />
              <span className="relative z-10">{category.icon}</span>
            </div>

            {/* Testo con Typography 2025 */}
            <div className="flex-1 text-left">
              <h3
                className={`
                  text-2xl font-black mb-2 transition-all duration-500
                  ${isExpanded
                    ? 'text-brand-dark drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]'
                    : 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]'
                  }
                `}
                style={{
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                }}
              >
                {category.name}
              </h3>
              <p
                className={`
                  text-sm font-semibold transition-all duration-500
                  ${isExpanded
                    ? 'text-brand-dark/90'
                    : 'text-white/80'
                  }
                `}
                style={{
                  letterSpacing: '0.01em',
                }}
              >
                {category.description}
              </p>
            </div>
          </div>

          {/* Icona Espandi/Comprimi con Micro-interaction */}
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              relative group/icon
              ${isExpanded
                ? 'bg-brand-dark/40 text-brand-dark rotate-180 scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.3)]'
                : 'bg-white/10 text-white/90 hover:bg-white/20 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
              }
            `}
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Ripple Effect */}
            <div
              className={`
                absolute inset-0 rounded-full transition-opacity duration-300
                ${isExpanded ? 'opacity-0' : 'opacity-0 group-hover/icon:opacity-100'}
              `}
              style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
                animation: 'pulse 2s infinite',
              }}
            />
            <ChevronDown size={22} strokeWidth={2.5} className="relative z-10" />
          </div>
        </div>
      </button>

      {/* Contenuto Espanso con Animazione Avanzata 2025 */}
      <div
        id={`category-${category.id}-content`}
        className={`
          overflow-hidden transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isExpanded ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : '0px',
          transform: isExpanded ? 'translateY(0) scale(1)' : 'translateY(-30px) scale(0.98)',
          filter: isExpanded ? 'blur(0px)' : 'blur(4px)',
        }}
        aria-hidden={!isExpanded}
      >
        <div ref={contentRef} className="pt-6">
          {/* Scroll Orizzontale Servizi con Design Moderno */}
          <div className="flex gap-4 md:gap-5 overflow-x-auto no-scrollbar pb-6 px-4 md:px-2 scroll-smooth snap-x snap-mandatory" style={{ WebkitOverflowScrolling: 'touch' }}>
            {services.map((service, index) => (
              <div
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="
                  flex-shrink-0 w-[260px] md:w-[300px] rounded-[22px] md:rounded-[28px] overflow-hidden
                  cursor-pointer active:scale-[0.97] transition-all duration-500
                  group snap-start relative
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F29]
                "
                role="button"
                tabIndex={0}
                aria-label={`Apri servizio: ${service.name}`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onServiceSelect(service.id); }}
                style={{
                  animation: isExpanded
                    ? `fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s both`
                    : 'none',
                  background: 'linear-gradient(135deg, rgba(28,28,30,0.95) 0%, rgba(20,20,22,0.98) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(255,159,41,0.2), 0 0 0 1px rgba(255,159,41,0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                {/* Immagine Servizio con Effetti 2025 */}
                <div className="relative h-[160px] md:h-[180px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    width={600}
                    height={360}
                    className="
                      w-full h-full object-cover transition-all duration-1000 ease-out
                      group-hover:scale-115 group-hover:brightness-110
                    "
                    style={{
                      filter: 'brightness(0.85) saturate(1.1)',
                    }}
                  />

                  {/* Gradient Overlay Moderno */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Icona Servizio con Glassmorphism */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Badge Categoria Moderno */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="px-4 py-1.5 text-xs font-black rounded-full inline-flex items-center gap-1.5 transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #FF9F29 0%, #FF8C00 100%)',
                        color: '#0F0F0F',
                        boxShadow: '0 4px 12px rgba(255,159,41,0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      animation: 'shine 2s infinite',
                    }}
                  />
                </div>

                {/* Contenuto Servizio con Typography 2025 */}
                <div className="p-5">
                  <h4
                    className="text-white font-black text-[16px] leading-tight mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-brand-orange"
                    style={{
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {service.name}
                  </h4>
                  <p
                    className="text-[#A0A0A5] text-[13px] font-medium line-clamp-2 mb-4 leading-relaxed"
                    style={{
                      letterSpacing: '0.01em',
                    }}
                  >
                    {service.shortDescription}
                  </p>

                  {/* CTA Moderno con Micro-interaction */}
                  <div className="flex items-center gap-2.5 text-brand-orange group-hover:gap-3 transition-all duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider">Esplora</span>
                    <div className="relative">
                      <ChevronDown
                        size={16}
                        className="rotate-[-90deg] transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={3}
                      />
                      <div
                        className="absolute inset-0 bg-brand-orange/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ transform: 'scale(1.5)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicatore Scroll Orizzontale Moderno */}
          {services.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <div
                  key={index}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: '24px',
                    background: 'rgba(255,159,41,0.3)',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

