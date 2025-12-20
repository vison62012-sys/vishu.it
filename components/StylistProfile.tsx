import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import HeroProfile from './HeroProfile';
import ServiceList from './ServiceList';
import WorkGallery from './WorkGallery';
import { STYLIST_DATA, SERVICES_DATA, LATEST_WORK_DATA } from '../constants';

interface StylistProfileProps {
  onBack: () => void;
}

const StylistProfile: React.FC<StylistProfileProps> = ({ onBack }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('2'); // Default to Beard Trim

  return (
    <>
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative z-0 bg-brand-dark">
            <HeroProfile stylist={STYLIST_DATA} onBack={onBack} />
            <ServiceList 
                services={SERVICES_DATA} 
                activeId={activeServiceId} 
                onSelect={setActiveServiceId} 
            />
            <WorkGallery items={LATEST_WORK_DATA} />
            
            {/* Spacer for bottom button */}
            <div className="h-28"></div>
        </div>

        {/* Floating CTA Button - Sticky at bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 z-20 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pt-10 max-w-2xl mx-auto">
            <button className="w-full bg-brand-orange h-[72px] rounded-[36px] flex items-center justify-center gap-3 shadow-[0_8px_30px_rgba(255,159,41,0.3)] active:scale-95 transition-transform duration-200 group relative overflow-hidden">
                <span className="text-brand-dark font-bold text-lg tracking-wide z-10">Make a Call</span>
                <Phone className="fill-brand-dark text-brand-dark group-hover:rotate-12 transition-transform duration-300 z-10" size={22} strokeWidth={2.5} />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </button>
        </div>
    </>
  );
};

export default StylistProfile;