import React, { useState, useEffect, useRef } from 'react';
import { Search, SlidersHorizontal, Heart, Bell, Calendar, List, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { ACTIVITY_CATEGORIES, CONSULTING_SERVICES, WELCOME_MESSAGES } from '../constants';
import CategoryCard from './CategoryCard';
import ActivityFilters from './ActivityFilters';

const CATEGORY_IMAGES: Record<string, string> = {
  'restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  'beach': 'https://images.unsplash.com/photo-1507525421304-6d8d5e5c8c8f?auto=format&fit=crop&w=1200&q=80',
  'hotel': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
  'retail': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  'wellness': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
  'events': 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  'bakery': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  'gelateria': 'https://images.unsplash.com/photo-1505394033223-2f97460b33ce?auto=format&fit=crop&w=1200&q=80',
  'optical': 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&w=1200&q=80',
  'realestate': 'https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=1200&q=80',
  'jewelry': 'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?auto=format&fit=crop&w=1200&q=80',
  'autocare': 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
  'kids': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80',
  'medical': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'fitness': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'legal': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
  'pets': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80',
  'barber': 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=80',
  'pharma': 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
  'home': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  'travel': 'https://images.unsplash.com/photo-1436491865332-7a615109cc05?auto=format&fit=crop&w=1200&q=80',
  'education': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
  'general': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'tech': 'https://images.unsplash.com/photo-1597424214771-3f69e63e6e87?auto=format&fit=crop&w=1200&q=80',
  'construction': 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  'gardening': 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  'cleaning': 'https://images.unsplash.com/photo-1581578731117-104f2a41272c?auto=format&fit=crop&w=1200&q=80',
  'photo': 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=1200&q=80',
  'tattoo': 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=80',
  'florist': 'https://images.unsplash.com/photo-1562690868-60bbe7621e0c?auto=format&fit=crop&w=1200&q=80',
  'grocery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  'laundry': 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80',
  'coworking': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  'carsales': 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
  'insurance': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
};

interface HomeScreenProps {
  onServiceSelect: (serviceId: string) => void;
  onConsultationClick?: () => void;
  initialCategory?: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onServiceSelect, onConsultationClick, initialCategory }) => {
  // Filtro predefinito: se c'è una categoria iniziale valida (diversa da 'all'), usala
  const [activeCategory, setActiveCategory] = useState(initialCategory && initialCategory !== 'all' ? initialCategory : 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  // Mostra in UI la categoria scelta durante l'onboarding
  const selectedOnboardingCategory = React.useMemo(() => {
    if (!initialCategory) return null;
    const found = ACTIVITY_CATEGORIES.find(c => c.id === initialCategory);
    return found && found.id !== 'all' ? found : null;
  }, [initialCategory]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentProfileImage, setCurrentProfileImage] = useState(0);
  const [showPinInput, setShowPinInput] = useState(false);
  const [pinValue, setPinValue] = useState('');
  const secretClicksRef = useRef(0);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const matrixStateRef = useRef<{ ypos: number[]; cols: number; ctx: CanvasRenderingContext2D | null; w: number; h: number } | null>(null);

  // Array delle immagini profilo
  const profileImages = ['/images/profile1.png', '/images/profile2.png'];

  // Sort categories to put the initial one first (per il sorting dei servizi)
  const sortedCategories = React.useMemo(() => {
    if (!initialCategory || initialCategory === 'all') return ACTIVITY_CATEGORIES;

    const initial = ACTIVITY_CATEGORIES.find(c => c.id === initialCategory);
    if (!initial) return ACTIVITY_CATEGORIES;

    const others = ACTIVITY_CATEGORIES.filter(c => c.id !== initialCategory && c.id !== 'all');
    const allTab = ACTIVITY_CATEGORIES.find(c => c.id === 'all');

    return allTab ? [allTab, initial, ...others] : [initial, ...others];
  }, [initialCategory]);

  // Sync activeCategory with initialCategory if it changes
  useEffect(() => {
    if (initialCategory && initialCategory !== 'all') {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Scroll to top when category changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) =>
          (prevIndex + 1) % WELCOME_MESSAGES.length
        );
        setIsTransitioning(false);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Matrix mode canvas + audio controller
  useEffect(() => {
    const canvas = canvasRef.current;
    const audio = audioRef.current;

    const start = () => {
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const resize = () => {
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
        const w = canvas.width;
        const h = canvas.height;
        const cols = Math.floor(w / 20) + 1;
        const ypos = Array(cols).fill(0);
        matrixStateRef.current = { ypos, cols, ctx, w, h };
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
      };

      resize();
      window.addEventListener('resize', resize);

      const tick = () => {
        const st = matrixStateRef.current;
        if (!st) return;
        const { ctx, w, h, ypos } = st;
        if (!ctx) return;
        ctx.fillStyle = '#0001';
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';
        ypos.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 20;
          ctx.fillText(text, x, y);
          if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
          else ypos[ind] = y + 20;
        });
        animationRef.current = requestAnimationFrame(tick);
      };

      animationRef.current = requestAnimationFrame(tick);

      // try start audio (user gesture already occurred by toggle)
      if (audio) {
        audio.volume = 0.25;
        audio.play().catch(() => { });
      }

      return () => {
        window.removeEventListener('resize', resize);
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    };

    const stop = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      matrixStateRef.current = null;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    if (isMatrixMode) {
      const cleanup = start();
      return () => {
        if (cleanup) cleanup();
        stop();
      };
    } else {
      stop();
    }
  }, [isMatrixMode]);

  // Cambio automatico immagine profilo ogni 3 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfileImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [profileImages.length]);

  const currentMessage = WELCOME_MESSAGES[currentMessageIndex];

  // Smart sorting: prioritize services based on user's chosen category
  const sortedServices = React.useMemo(() => {
    if (!initialCategory || initialCategory === 'all') {
      return CONSULTING_SERVICES;
    }

    // Create a copy to avoid mutating original array
    const services = [...CONSULTING_SERVICES];

    return services.sort((a, b) => {
      // Priority 1: Services matching user's category come first
      const aMatchesUser = a.activityType === initialCategory;
      const bMatchesUser = b.activityType === initialCategory;

      if (aMatchesUser && !bMatchesUser) return -1;
      if (!aMatchesUser && bMatchesUser) return 1;

      // Priority 2: General services come second (applicable to all)
      const aIsGeneral = a.activityType === 'general';
      const bIsGeneral = b.activityType === 'general';

      if (aIsGeneral && !bIsGeneral) return -1;
      if (!aIsGeneral && bIsGeneral) return 1;

      // Priority 3: Keep original order for remaining services
      return 0;
    });
  }, [initialCategory]);

  // Filtra servizi per categoria e ricerca
  const filteredServices = React.useMemo(() => {
    let services = activeCategory === 'all'
      ? sortedServices
      : sortedServices.filter(s => s.activityType === activeCategory);

    // Applica filtro di ricerca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      services = services.filter(s =>
        s.tagline?.toLowerCase().includes(query) ||
        s.category?.toLowerCase().includes(query) ||
        s.name?.toLowerCase().includes(query) ||
        s.shortDescription?.toLowerCase().includes(query)
      );
    }

    return services;
  }, [sortedServices, activeCategory, searchQuery]);

  const handleHeaderClick = () => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    secretClicksRef.current += 1;

    if (secretClicksRef.current >= 20) {
      setShowPinInput(true);
      secretClicksRef.current = 0;
    } else {
      clickTimeoutRef.current = setTimeout(() => {
        secretClicksRef.current = 0;
      }, 2000);
    }
  };

  const downloadCSV = () => {
    const headers = ['Titolo', 'Descrizione'];
    const rows = CONSULTING_SERVICES.map(s => [
      s.name || '',
      s.shortDescription || ''
    ]);

    const csvContent = [
      headers.join(';'),
      ...rows.map(r => r.map(cell => `"${cell.replace(/"/g, '""')}"`).join(';'))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'servizi_consulenza.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinValue === '313131') {
      downloadCSV();
      setShowPinInput(false);
      setPinValue('');
    } else {
      alert('PIN errato');
      setPinValue('');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden font-sans ${isMatrixMode ? '' : 'bg-brand-dark'}`}>
      {/* Matrix Background Overlay (always behind content) */}
      {isMatrixMode && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <canvas ref={canvasRef} id="canv" className="w-full h-full block" />
          <audio ref={audioRef} src="/audio/matrix-ambience.mp3" loop />
        </div>
      )}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="relative z-10 flex-1 overflow-y-auto no-scrollbar pb-28 pt-6 px-4 sm:px-6 scroll-smooth touch-pan-y"
      >

        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 ring-1 ring-white/5 relative">
              {profileImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Profile"
                  className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${currentProfileImage === index ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              ))}
            </div>
            <div>
              <h1 className={`text-white text-[15px] font-medium transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-1' : 'opacity-90 translate-y-0'
                }`}>
                {currentMessage.greeting}
              </h1>
              <p className={`text-[#8E8E93] text-[11px] mt-0.5 flex items-center gap-1 transition-all duration-300 ${isTransitioning ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                }`}>
                <span className="truncate max-w-[180px]">{currentMessage.subtitle}</span>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <label className="label">
              <div className="toggle">
                <input
                  className="toggle-state"
                  type="checkbox"
                  name="matrix"
                  value="matrix"
                  checked={isMatrixMode}
                  onChange={(e) => setIsMatrixMode(e.target.checked)}
                />
                <div className="indicator"></div>
              </div>
            </label>
            <button
              onClick={onConsultationClick}
              className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-white border border-white/10 border-t-white/20 relative hover:bg-brand-gray active:scale-95 transition-all shadow-sm"
            >
              <Bell size={18} />
              <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-red-500 rounded-full border border-brand-card"></span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 h-14 bg-brand-card rounded-[20px] flex items-center px-4 gap-3 border border-white/10 border-t-white/20 shadow-inner">
            <Search size={20} className="text-[#8E8E93]" />
            <input
              type="text"
              placeholder="Cerca servizi di consulenza..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent flex-1 text-white placeholder-[#8E8E93] outline-none text-[15px]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[#8E8E93] hover:text-white transition active:scale-90 p-2"
              >
                <span className="text-xs">✕</span>
              </button>
            )}
            <div className="h-6 w-[1px] bg-white/10 mx-1"></div>
            <button className="text-[#8E8E93] hover:text-white transition active:scale-90 p-2">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Activity Filters - Componente Ottimizzato */}
        {/* Banner informativo che mostra la categoria preferita scelta dall'utente in onboarding */}
        {selectedOnboardingCategory && (
          <div className="mb-3 flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider">
              <span className="text-white/50 font-semibold">Preferenza utente:</span>
              <span className="px-2 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange font-bold border border-brand-orange/30">
                {selectedOnboardingCategory.name}
              </span>
            </div>
            {activeCategory === 'all' && <span className="text-[10px] text-white/40">Filtro attivo: Tutti</span>}
          </div>
        )}
        <ActivityFilters
          activeCategory={activeCategory}
          onChange={setActiveCategory}
          searchQuery={searchQuery}
        />

        {/* Promo Banner */}
        <div className="relative w-full h-[180px] bg-brand-orange rounded-[32px] mb-8 overflow-hidden p-6 flex flex-col justify-center shadow-[0_10px_30px_rgba(255,159,41,0.15)] group cursor-pointer border border-white/10 active:scale-[0.98] transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-10 -translate-y-10"></div>
          <div className="relative z-10 max-w-[60%]">
            <span className="text-brand-dark/70 text-sm font-medium block mb-1">Transizione Digitale</span>
            <h2 className="text-brand-dark text-3xl font-extrabold leading-tight mb-2">Consulenza Gratuita</h2>
            <p className="text-brand-dark/80 text-xs font-medium mb-4">Prenota la tua analisi gratuita</p>
            <button
              onClick={onConsultationClick}
              className="h-10 px-5 bg-brand-dark rounded-full flex items-center gap-2 transition-transform group-hover:scale-105"
            >
              <span className="text-brand-orange text-xs font-bold">Richiedi Consulenza</span>
              <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center">
                <ArrowRight size={12} className="text-brand-dark -rotate-45 group-hover:rotate-0 transition-transform duration-300" strokeWidth={3} />
              </div>
            </button>
          </div>
          <div className="absolute right-[-25px] bottom-0 h-[115%] w-[170px] transition-transform duration-500 group-hover:scale-105 group-hover:translate-x-1">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
              alt="Digital Transformation"
              className="w-full h-full object-cover object-left-top"
              style={{ maskImage: 'linear-gradient(to left, black 70%, transparent 100%)' }}
            />
          </div>
          <button className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-brand-dark hover:bg-white/40 transition active:scale-90">
            <Heart size={14} className="fill-transparent" strokeWidth={2.5} />
          </button>
        </div>

        {/* Categorie Servizi Espandibili */}
        <div>
          <div className="flex justify-between items-end mb-6">
            <h2
              onClick={handleHeaderClick}
              className="text-white text-[18px] font-bold tracking-wide cursor-pointer select-none active:scale-[0.99] transition-transform flex items-center gap-2"
            >
              {searchQuery ? `Risultati per "${searchQuery}"` : 'Le Nostre Categorie'}
              <span>🤫</span>
            </h2>
            {searchQuery && (
              <span className="text-white/50 text-[12px]">
                {filteredServices.length} {filteredServices.length === 1 ? 'risultato' : 'risultati'}
              </span>
            )}
          </div>

          {/* Nessun risultato */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16 px-4">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                <Search size={32} className="text-white/30" />
              </div>
              <h3 className="text-white/80 text-lg font-semibold mb-2">
                Nessun servizio trovato
              </h3>
              <p className="text-white/50 text-sm mb-6">
                {searchQuery
                  ? `Non abbiamo trovato servizi che corrispondono a "${searchQuery}"`
                  : 'Non ci sono servizi disponibili in questa categoria'
                }
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-6 py-3 bg-brand-orange text-brand-dark rounded-full font-semibold text-sm hover:brightness-110 active:scale-95 transition-all"
                >
                  Cancella ricerca
                </button>
              )}
            </div>
          )}

          <div className="space-y-4 pb-4">
            {sortedCategories
              .filter(cat => cat.id !== 'all')
              .map((category) => {
                const categoryServices = filteredServices.filter(
                  service => service.activityType === category.id
                );

                if (categoryServices.length === 0) return null;

                return (
                  <CategoryCard
                    key={category.id}
                    category={{
                      ...category,
                      image: CATEGORY_IMAGES[category.id] || CATEGORY_IMAGES['general'],
                    }}
                    services={categoryServices}
                    onServiceSelect={onServiceSelect}
                  />
                );
              })}
          </div>
        </div>

      </div>

      {/* Floating Bottom Navigation (Fixed relative to screen) */}
      <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 pointer-events-none max-w-2xl mx-auto">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Main Navigation Pill */}
          <div className="flex-1 h-[60px] bg-[#1C1C1E]/95 backdrop-blur-xl rounded-[30px] border border-white/10 border-t-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex items-center justify-between pl-1.5 pr-6">

            {/* Servizi Active Tab */}
            <button className="h-[48px] px-5 bg-brand-orange rounded-[24px] flex items-center gap-2.5 text-brand-dark shadow-[0_4px_12px_rgba(255,159,41,0.3)] hover:brightness-110 active:scale-95 transition-all">
              <ShoppingBag size={18} strokeWidth={2.5} className="fill-brand-dark/10" />
              <span className="font-bold text-[12px] whitespace-nowrap">Servizi</span>
            </button>

            {/* Inactive Icons */}
            <div className="flex items-center gap-6 justify-end flex-1 pl-2">
              <button
                onClick={onConsultationClick}
                className="text-[#636366] hover:text-white transition-colors p-2 active:scale-90"
              >
                <Calendar size={20} strokeWidth={2} />
              </button>
              <button
                onClick={onConsultationClick}
                className="text-[#636366] hover:text-white transition-colors p-2 active:scale-90"
              >
                <Heart size={20} strokeWidth={2} />
              </button>
              <button
                onClick={onConsultationClick}
                className="text-[#636366] hover:text-white transition-colors p-2 active:scale-90"
              >
                <List size={20} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Circular Plus Button */}
          <button
            onClick={onConsultationClick}
            className="w-[60px] h-[60px] flex-shrink-0 rounded-full bg-brand-orange flex items-center justify-center text-brand-dark shadow-[0_10px_30px_rgba(255,159,41,0.3)] border border-white/10 border-t-white/30 active:scale-90 hover:brightness-110 transition-all z-40"
          >
            <Plus size={28} strokeWidth={2.5} />
          </button>
        </div>

      </div>

      {/* PIN Modal */}
      {showPinInput && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-brand-card border border-white/10 rounded-[32px] p-8 w-full max-w-sm shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-2 text-center">Area Segreta</h3>
            <p className="text-white/60 text-sm mb-6 text-center">Inserisci il PIN per scaricare l'elenco servizi</p>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                value={pinValue}
                onChange={(e) => setPinValue(e.target.value)}
                placeholder="Inserisci PIN"
                autoFocus
                className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-4 text-white text-center text-2xl tracking-[0.5em] outline-none focus:border-brand-orange/50 transition-colors"
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPinInput(false)}
                  className="flex-1 h-12 rounded-2xl text-white/60 font-medium hover:bg-white/5 transition-colors"
                >
                  Annulla
                </button>
                <button
                  type="submit"
                  className="flex-1 h-12 bg-brand-orange rounded-2xl text-brand-dark font-bold hover:brightness-110 active:scale-95 transition-all"
                >
                  Conferma
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default HomeScreen;
