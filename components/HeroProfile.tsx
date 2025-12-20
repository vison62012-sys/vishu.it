import React from 'react';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import { Stylist } from '../types';

interface HeroProfileProps {
  stylist: Stylist;
  onBack: () => void;
}

const HeroProfile: React.FC<HeroProfileProps> = ({ stylist, onBack }) => {
  return (
    <div className="bg-brand-orange w-full rounded-b-[50px] pt-12 sm:pt-16 pb-10 px-4 sm:px-8 relative overflow-hidden shrink-0">
      
      {/* Background Decor Elements for Texture */}
      <div className="absolute top-20 right-[-20px] w-40 h-40 border-[20px] border-white/5 rounded-full blur-xl pointer-events-none"></div>
      <div className="absolute top-40 left-[-20px] w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

      {/* Header Nav */}
      <div className="flex justify-between items-center mb-8 relative z-20">
        <button 
          onClick={onBack}
          className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md text-brand-dark hover:bg-white/30 transition shadow-sm border border-white/10"
        >
          <ArrowLeft size={22} strokeWidth={2.5} />
        </button>
        <button className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition">
             <div className="flex gap-[5px]">
                <div className="w-1.5 h-1.5 bg-brand-dark rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-brand-dark rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-brand-dark rounded-full"></div>
             </div>
        </button>
      </div>

      <div className="flex flex-row items-center justify-between relative z-10">
        {/* Text Info */}
        <div className="flex flex-col max-w-[60%]">
          {/* Rating Pill */}
          <div className="flex items-center gap-1.5 mb-3">
            <Star size={14} className="fill-brand-dark text-brand-dark" />
            <span className="text-brand-dark font-extrabold text-sm">{stylist.rating}</span>
          </div>
          
          <h1 className="text-[34px] font-extrabold text-brand-dark leading-[1.05] mb-3 tracking-tight drop-shadow-sm">
            {stylist.name.split(' ').map((word, i) => (
              <span key={i} className="block">{word}</span>
            ))}
          </h1>

          <div className="flex items-center gap-1.5 mb-5 opacity-80 pl-0.5">
            <MapPin size={16} className="text-brand-dark fill-transparent" strokeWidth={2.5} />
            <span className="text-brand-dark text-xs font-semibold tracking-wide">{stylist.address}</span>
          </div>

          <div className="mt-1 flex items-baseline gap-1">
             <span className="text-brand-dark font-black text-3xl tracking-tight">${stylist.rate.toFixed(2)}</span>
             <span className="text-brand-dark/70 text-sm font-semibold">/hr</span>
          </div>
        </div>

        {/* Hero Image - Simulating the cutout look */}
        <div className="absolute right-[-20px] bottom-[-40px] w-[180px] h-[260px] pointer-events-none">
            <div className="w-full h-full relative">
                <img 
                    src={stylist.image} 
                    alt={stylist.name} 
                    className="w-full h-full object-cover object-center rounded-t-[100px] rounded-b-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-[3px] border-white/20"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;