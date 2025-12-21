import React, { useState, useRef, useEffect } from 'react';
import { ACTIVITY_CATEGORIES } from '../constants';
import { ArrowRight, Sparkles, ChevronRight, Star, MapPin, Phone, CheckCircle2, PartyPopper } from 'lucide-react';

interface OnboardingProps {
    onComplete: (categoryId: string) => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    // iOS-like transition management
    const [transitioning, setTransitioning] = useState(false);
    const [nextStep, setNextStep] = useState<number | null>(null);
    const [transitionProgress, setTransitionProgress] = useState(0); // 0 -> 1
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [swipeProgress, setSwipeProgress] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentOnboardingImage, setCurrentOnboardingImage] = useState(0);
    // Auto hint animation state for the slider on first view
    const [showSwipeHint, setShowSwipeHint] = useState(true);
    const [hintProgress, setHintProgress] = useState(0);

    // Array delle immagini onboarding
    const onboardingImages = ['/images/profile1.png', '/images/profile2.png'];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0 });
        }
    }, [step]);

    // Looping, slower and smoother swipe hint animation on step 1
    useEffect(() => {
        if (step !== 1) return;
        setShowSwipeHint(true);
        setHintProgress(0);

        let rafId: number;
        let start: number | null = null;
        const period = 4000; // ms, slower and looping

        const animate = (timestamp: number) => {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            // normalized [0,1)
            const t = ((elapsed % period) / period);
            // smooth sinusoidal ease-in-out cycle 0->1->0
            const y = 0.5 - 0.5 * Math.cos(2 * Math.PI * t);
            setHintProgress(y * 100);
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId);
    }, [step]);

    // Cambio automatico immagine onboarding ogni 3 secondi
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentOnboardingImage((prev) => (prev + 1) % onboardingImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [onboardingImages.length]);

    const handleNext = () => {
        if (transitioning || step === 2) return;
        setSwipeProgress(0);
        // Start iOS-like push transition to step 2
        setTransitioning(true);
        setNextStep(2);
        let rafId: number;
        let start: number | null = null;
        const duration = 420; // ms
        const ease = (t: number) =>
            // cubic-bezier(0.22, 0.61, 0.36, 1)
            t < 0.5
                ? (4 * t * t * t)
                : (1 - Math.pow(-2 * t + 2, 3) / 2);
        const animate = (timestamp: number) => {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const t = Math.min(elapsed / duration, 1);
            setTransitionProgress(ease(t));
            if (t < 1) {
                rafId = requestAnimationFrame(animate);
            } else {
                setStep(2);
                setTransitioning(false);
                setTransitionProgress(0);
                setNextStep(null);
            }
        };
        rafId = requestAnimationFrame(animate);
        const cleanup = () => cancelAnimationFrame(rafId);
        // ensure cleanup if unmounted mid-transition
        setTimeout(cleanup, 1000);
    };

    const handleBack = () => {
        if (transitioning || step === 1) return;
        // Start iOS-like pop transition to step 1
        setTransitioning(true);
        setNextStep(1);
        let rafId: number;
        let start: number | null = null;
        const duration = 380; // ms, slightly snappier for pop
        const ease = (t: number) =>
            // cubic-bezier(0.4, 0.14, 0.3, 1) approximation
            t < 0.5
                ? (3 * t * t)
                : (1 - Math.pow(-2 * t + 2, 2) / 2);
        const animate = (timestamp: number) => {
            if (start === null) start = timestamp;
            const elapsed = timestamp - start;
            const t = Math.min(elapsed / duration, 1);
            setTransitionProgress(ease(t));
            if (t < 1) {
                rafId = requestAnimationFrame(animate);
            } else {
                setStep(1);
                setTransitioning(false);
                setTransitionProgress(0);
                setNextStep(null);
            }
        };
        rafId = requestAnimationFrame(animate);
        const cleanup = () => cancelAnimationFrame(rafId);
        setTimeout(cleanup, 1000);
    };

    const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        setIsDragging(true);
        // If user interacts, stop hint immediately
        setShowSwipeHint(false);
    };

    const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging || !sliderRef.current) return;

        const rect = sliderRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const offset = clientX - rect.left;
        const width = rect.width - 60; // Button width
        const progress = Math.min(Math.max(0, offset / width), 1) * 100;

        setSwipeProgress(progress);

        if (progress >= 95) {
            setIsDragging(false);
            setSwipeProgress(100);
            setTimeout(() => handleNext(), 200);
        }
    };

    const onTouchEnd = () => {
        if (swipeProgress < 95) {
            setSwipeProgress(0);
        }
        setIsDragging(false);
    };

    // Precomputed styles for iOS-like transitions to avoid complex inline expressions
    const overlayProgress = nextStep === 1 ? (1 - transitionProgress) : transitionProgress;
    const overlayStyle = transitioning
        ? {
            background: `linear-gradient(180deg, rgba(0,0,0,${0.15 * overlayProgress}) 0%, rgba(0,0,0,${0.35 * overlayProgress}) 100%)`,
            backdropFilter: `saturate(${1 - 0.1 * overlayProgress}) blur(${6 * overlayProgress}px)`,
            transition: 'none' as const,
        }
        : undefined;

    const step1Transform = transitioning
        ? (nextStep === 2
            ? `translateX(${-8 * transitionProgress}%) scale(${1 - 0.02 * transitionProgress})`
            : `translateX(${-8 * (1 - transitionProgress)}%) scale(${0.98 + 0.02 * transitionProgress})`)
        : 'translateX(0%) scale(1)';
    const step1Filter = transitioning
        ? (nextStep === 2 ? `blur(${2 * transitionProgress}px)` : `blur(${2 * (1 - transitionProgress)}px)`)
        : 'none';
    const step1Style: React.CSSProperties = {
        transform: step1Transform,
        filter: step1Filter,
        transition: 'none',
        zIndex: step === 1 ? 10 : 5,
        pointerEvents: transitioning ? 'none' : (step === 1 ? 'auto' : 'none'),
    };

    const step2Translate = transitioning
        ? (nextStep === 2
            ? `${100 - 100 * transitionProgress}%`
            : `${100 * transitionProgress}%`)
        : (step === 2 ? '0%' : '100%');
    const step2Style: React.CSSProperties = {
        transform: `translateX(${step2Translate})`,
        boxShadow: (step === 2 || transitioning)
            ? `rgba(0,0,0,${0.4 * (nextStep === 1 ? (1 - transitionProgress) : 1)}) -8px 0px 24px 0px`
            : 'none',
        transition: 'none',
        zIndex: step === 2 ? 20 : 15,
        pointerEvents: transitioning ? 'none' : (step === 2 ? 'auto' : 'none'),
    };

    return (
        <div className="h-full bg-[#0F0F0F] text-white flex flex-col overflow-hidden relative font-sans">
            {/* Transition overlay for depth (dim + blur) */}
            {transitioning && (
                <div
                    className="pointer-events-none absolute inset-0 z-30"
                    style={overlayStyle}
                />
            )}

            {/* Panels container absolute for iOS-like push */}
            <div className="relative flex-1">
                {/* Step 1 panel (outgoing) */}
                <div
                    className="absolute inset-0 will-change-transform"
                    style={step1Style}
                >
                    <div className="flex-1 flex flex-col animate-in fade-in duration-700">
                        {/* Orange Header Section */}
                        <div className="relative h-[30vh] w-full bg-[#FF9F29] rounded-b-[32px] overflow-hidden flex items-end justify-center">
                            {/* Background Decor */}
                            <div className="absolute top-6 left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl" />

                            {/* Cutout Profile Image - Scrolling */}
                            <div className="h-[100%] absolute bottom-0 left-0 right-0 flex items-end justify-center">
                                {onboardingImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt="Vishu"
                                        className={`h-[100%] w-auto object-cover object-top filter contrast-110 transition-opacity duration-1000 ${currentOnboardingImage === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                        style={{
                                            maskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 3%, black 92%, transparent 100%)',
                                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 3%, black 92%, transparent 100%)',
                                            maskComposite: 'intersect',
                                            WebkitMaskComposite: 'source-in',
                                            transform: 'translateY(10px) translateX(15%)',
                                            position: 'absolute',
                                            bottom: 0
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Back Arrow Placeholder */}
                            <div className="absolute top-6 left-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                <ArrowRight className="w-3.5 h-3.5 text-white rotate-180" />
                            </div>

                            {/* Profile Info Overlay */}
                            <div className="absolute top-14 left-8 space-y-1">
                                <div className="flex items-center space-x-1 text-[#0F0F0F]/80">
                                    <Star className="w-3 h-3 fill-current" />
                                    <span className="font-bold text-[10px]">5.0</span>
                                </div>
                                <h1 className="text-2xl font-black text-[#0F0F0F] tracking-tight leading-none uppercase">
                                    Vishu<br />Consulting
                                </h1>
                                <div className="flex flex-col space-y-1 mt-2">
                                    <div className="flex items-center space-x-1 text-[#0F0F0F]/60 text-[8px] font-bold uppercase tracking-wider pl-1">
                                        <MapPin className="w-2 h-2" />
                                        <span>Basato in Italia</span>
                                    </div>
                                    <div className="relative group animate-in slide-in-from-bottom-8 delay-300 duration-1000">
                                        {/* Liquid Glass Container */}
                                        <div className="absolute -inset-0.5 bg-white/20 blur-[2px] rounded-xl group-hover:blur-[4px] transition-all opacity-0 animate-in fade-in fill-mode-forwards" style={{ animationDelay: '500ms' }} />
                                        <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-lg p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden animate-float">
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer pointer-events-none" />

                                            {/* Subtle Shine Gradient */}
                                            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                                            <div className="text-[11px] font-black text-[#0F0F0F] leading-tight max-w-[150px] uppercase">
                                                Consulente Informatico <br />
                                                <span className="opacity-60 font-bold block mt-0.5 text-[9px] tracking-tight">
                                                    per la transizione digitale delle attività locali
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="flex-1 px-6 md:px-8 pt-3 md:pt-4 flex flex-col justify-between pb-4 md:pb-6 overflow-y-auto no-scrollbar touch-scroller overscroll-contain touch-action-pan-y">
                            <div className="space-y-4">
                                {/* Quick Action Button - As per requested image */}
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                                    <button
                                        onClick={handleNext}
                                        className="w-full h-11 bg-[#FF9F29] rounded-full flex items-center justify-center space-x-3 shadow-lg shadow-[#FF9F29]/20 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                                    >
                                        <span className="text-[#0F0F0F] font-black uppercase tracking-[0.15em] text-xs">Configura ora</span>
                                        <ArrowRight className="w-4 h-4 text-[#0F0F0F] group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                <div className="flex justify-between items-center text-[#FF9F29] pt-2">
                                    <h3 className="text-lg font-bold">I Nostri Servizi</h3>
                                    <div className="flex items-center space-x-1 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
                                        <span>Vedi Tutto</span>
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2.5">
                                    <div className="bg-[#1C1C1E] p-3.5 rounded-2xl border border-white/5 space-y-3 hover:border-[#FF9F29]/30 transition-colors cursor-pointer group">
                                        <div className="w-10 h-10 bg-[#2C2C2E] rounded-xl flex items-center justify-center group-hover:bg-[#FF9F29]/10 transition-colors">
                                            <Sparkles className="w-5 h-5 text-[#FF9F29]" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <h4 className="font-bold text-xs">Digitalizzazione</h4>
                                            <p className="text-[9px] text-gray-500 font-medium uppercase tracking-tighter">Processi Automati</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#FF9F29] p-3.5 rounded-2xl space-y-3 cursor-pointer shadow-lg shadow-[#FF9F29]/20 transform hover:scale-[1.02] transition-transform">
                                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-[#0F0F0F]" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <h4 className="font-bold text-xs text-[#0F0F0F]">Marketing</h4>
                                            <p className="text-[9px] text-[#0F0F0F]/60 font-medium uppercase tracking-tighter">Strategia Growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Improved Swipe to Start Button */}
                            <div className="mt-4">
                                <div
                                    ref={sliderRef}
                                    className="relative h-14 bg-[#1C1C1E] rounded-full p-1 overflow-hidden flex items-center select-none shadow-2xl border border-white/5 touch-action-pan-x"
                                    onMouseMove={onTouchMove}
                                    onTouchMove={onTouchMove}
                                    onMouseDown={onTouchStart}
                                    onTouchStart={onTouchStart}
                                    onMouseUp={onTouchEnd}
                                    onMouseLeave={onTouchEnd}
                                    onTouchEnd={onTouchEnd}
                                >
                                    {/* Animated background trace */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 bg-[#FF9F29]/10 transition-all duration-75"
                                        style={{ width: `${Math.max(48, (swipeProgress / 100) * (sliderRef.current?.offsetWidth || 0))}px` }}
                                    />
                                    {/* Hint trace overlay */}
                                    {showSwipeHint && (
                                        <div
                                            className="absolute left-0 top-0 bottom-0 bg-[#FF9F29]/15 pointer-events-none"
                                            style={{ width: `${Math.max(48, (hintProgress / 100) * (sliderRef.current?.offsetWidth || 0))}px` }}
                                        />
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <span className={`text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 ${swipeProgress > 20 ? 'opacity-0 scale-95' : 'opacity-30'}`}>
                                            Slide to Start
                                        </span>
                                    </div>
                                    {/* Floating ghost handle hint */}
                                    {showSwipeHint && (
                                        <div
                                            className="absolute top-1/2 -translate-y-1/2 h-[48px] w-[48px] rounded-full border-2 border-[#FF9F29]/50 bg-[#FF9F29]/10 flex items-center justify-center pointer-events-none shadow-[0_0_18px_rgba(255,159,41,0.25)]"
                                            style={{
                                                transform: `translateY(-50%) translateX(${hintProgress * ((sliderRef.current?.offsetWidth || 300) - 64) / 100}px)`,
                                            }}
                                        >
                                            <ChevronRight className="w-7 h-7 text-[#FF9F29]" strokeWidth={3} />
                                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9F29] animate-ping" />
                                        </div>
                                    )}

                                    {/* The Slider Handle */}
                                    <div
                                        className={`h-[48px] w-[48px] bg-[#FF9F29] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,159,41,0.4)] transition-transform ${isDragging ? 'duration-0' : 'duration-500 ease-out'} relative z-10`}
                                        style={{
                                            transform: `translateX(${swipeProgress * ((sliderRef.current?.offsetWidth || 300) - 64) / 100}px)`,
                                        }}
                                    >
                                        <ChevronRight className={`w-7 h-7 text-[#0F0F0F] transition-transform duration-300 ${swipeProgress > 80 ? 'translate-x-1 scale-110' : ''}`} strokeWidth={3} />
                                    </div>

                                    {/* Finishing Glow */}
                                    <div
                                        className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FF9F29]/20 to-transparent transition-opacity duration-300 pointer-events-none"
                                        style={{ opacity: swipeProgress / 100 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 panel (incoming) */}
                    <div
                        className="absolute inset-0 bg-[#0F0F0F] will-change-transform"
                        style={step2Style}
                    >
                        <div className="h-full min-h-0 flex flex-col p-8 pt-16 bg-[#0F0F0F] relative overflow-hidden">
                            {/* Abstract background blur for premium feel */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF9F29]/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute -bottom-28 -left-24 w-72 h-72 bg-[#FFBF71]/10 rounded-full blur-[110px] pointer-events-none wow-orb" />
                            <div className="absolute top-1/3 -left-16 w-56 h-56 bg-white/5 rounded-full blur-[90px] pointer-events-none wow-orb" />

                            {/* Back button iOS-like */}
                            <button
                                onClick={handleBack}
                                className="absolute top-12 left-6 w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 active:scale-95 transition"
                                aria-label="Indietro"
                            >
                                <ArrowRight className="w-5 h-5 text-white rotate-180" />
                            </button>

                            <div className="space-y-4 mb-8 relative z-10">
                                <div className="flex items-center space-x-3">
                                    <div className="px-3 py-1 bg-[#FF9F29]/10 border border-[#FF9F29]/20 rounded-full">
                                        <span className="text-[10px] font-black uppercase text-[#FF9F29] tracking-[0.2em]">Step 02</span>
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FF9F29]/30 to-transparent" />
                                </div>
                                <h2 className="text-4xl font-black tracking-tight leading-none uppercase">
                                    DI CHE SETTORE<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9F29] to-[#FFBF71]">TI OCCUPI?</span>
                                </h2>
                                <p className="text-gray-500 font-medium text-sm">Personalizzerò i servizi per la tua attività.</p>
                            </div>

                            {/* Action Button - Enhanced Version */}
                            <div className="mb-8 relative z-10 group">
                                {selectedCategory && (
                                    <div className="absolute -inset-1 bg-[#FF9F29]/30 rounded-full blur-xl animate-pulse group-hover:bg-[#FF9F29]/40 transition-all duration-500" />
                                )}
                                <button
                                    disabled={!selectedCategory}
                                    onClick={() => selectedCategory && onComplete(selectedCategory)}
                                    className={`relative w-full h-16 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl transition-all flex items-center justify-center space-x-3 overflow-hidden ${selectedCategory
                                        ? 'bg-gradient-to-r from-[#FF9F29] to-[#FF8C00] text-[#0F0F0F] hover:scale-[1.02] active:scale-[0.98] glow-pulse'
                                        : 'bg-[#1C1C1E] text-gray-600 border border-white/5 cursor-not-allowed opacity-50'
                                        }`}
                                >
                                    {selectedCategory && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                                    )}
                                    <span className="relative z-10">Configura ora</span>
                                    <ArrowRight className={`relative z-10 w-5 h-5 transition-transform duration-500 ${selectedCategory ? 'group-hover:translate-x-2' : ''}`} />
                                </button>
                            </div>

                            <div
                                ref={scrollContainerRef}
                                className="flex-1 min-h-0 space-y-4 overflow-y-auto no-scrollbar touch-scroller overscroll-contain touch-action-pan-y pr-2 custom-scrollbar pb-8 relative z-10"
                            >
                                {ACTIVITY_CATEGORIES.filter(c => c.id !== 'all').map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setSelectedCategory(category.id)}
                                        className={`w-full flex items-center p-5 rounded-[32px] border-2 transition-all duration-500 text-left group overflow-hidden relative ${selectedCategory === category.id ? 'bg-gradient-to-br from-[#FF9F29] to-[#FF8C00] border-transparent text-[#0F0F0F] transform scale-[1.02] shadow-xl shadow-[#FF9F29]/25 glow-pulse' : 'gradient-border bg-[#1C1C1E] hover:border-white/20 card-tilt'}`}
                                    >
                                        {/* Hover shimmer sweep */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                                        </div>
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mr-5 transition-transform group-hover:scale-110 ${selectedCategory === category.id ? 'bg-white/25 ring-2 ring-white/40 backdrop-blur-sm' : 'bg-[#2C2C2E] ring-1 ring-white/10'}`}>
                                            {category.icon}
                                        </div>
                                        <div className="flex-1 z-10">
                                            <h3 className="font-black uppercase tracking-tight text-lg">
                                                {category.name}
                                            </h3>
                                            <p className={`text-[10px] font-bold uppercase tracking-widest ${selectedCategory === category.id ? 'text-[#0F0F0F]/60' : 'text-gray-500'
                                                }`}>
                                                {category.description}
                                            </p>
                                        </div>
                                        {selectedCategory === category.id && (
                                            <>
                                                <div className="select-burst" />
                                                <div className="absolute right-6 animate-in zoom-in duration-300">
                                                    <CheckCircle2 className="w-7 h-7 text-[#0F0F0F]" />
                                                </div>
                                            </>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pagination Tabs */}
                    <div className="absolute top-12 right-8 flex space-x-1.5 z-50">
                        <div className={`h-1.5 rounded-full transition-all duration-500 ${step === 1 ? 'w-8 bg-[#0F0F0F]/20' : 'w-4 bg-white/10'}`} />
                        <div className={`h-1.5 rounded-full transition-all duration-500 ${step === 2 ? 'w-8 bg-[#FF9F29]' : 'w-4 bg-white/20'}`} />
                    </div>
                </div>
                </div>
                </div>
                );
};

                export default Onboarding;
