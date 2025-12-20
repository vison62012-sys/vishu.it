import React from 'react';
import { Service } from '../types';
import { Scissors, Zap, User } from 'lucide-react';

interface ServiceListProps {
  services: Service[];
  activeId: string;
  onSelect: (id: string) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, activeId, onSelect }) => {
  
  const getIcon = (type: Service['iconType'], active: boolean) => {
    // If active (Orange card), icon is Dark. If inactive (Dark card), icon is Gray/White.
    const colorClass = active ? 'text-brand-dark' : 'text-[#8E8E93]';
    
    // Using slightly different icons to match the vibe
    switch (type) {
      case 'hair': return <Scissors size={26} strokeWidth={1.5} className={colorClass} />;
      case 'beard': return <User size={26} strokeWidth={1.5} className={colorClass} />;
      case 'massage': return <Zap size={26} strokeWidth={1.5} className={colorClass} />; // Changed to Zap for generic treatment/massage vibe or keep Activity
    }
  };

  return (
    <div className="mt-8 pl-4 sm:pl-8">
      <div className="flex justify-between items-end pr-4 sm:pr-8 mb-5">
        <h2 className="text-white text-[19px] font-bold tracking-wide">Nearby Salon</h2>
        <button className="text-brand-orange text-[13px] font-medium hover:text-white transition pb-0.5">See All</button>
      </div>

      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-8 pr-4 sm:pr-8">
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <button
              key={service.id}
              onClick={() => onSelect(service.id)}
              className={`
                relative flex-shrink-0 w-[140px] h-[150px] rounded-[32px] p-6 flex flex-col justify-between items-start transition-all duration-300 group
                ${isActive 
                    ? 'bg-brand-orange shadow-[0_15px_30px_rgba(255,159,41,0.25)] translate-y-[-4px]' 
                    : 'bg-brand-card hover:bg-[#2C2C2E]'
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors
                ${isActive ? 'bg-[#E68A1E]/20' : 'bg-[#2C2C2E] group-hover:bg-[#3A3A3C]'}
              `}>
                {getIcon(service.iconType, isActive)}
              </div>
              
              <div className="text-left w-full">
                <span className={`block font-bold text-[15px] leading-tight mb-1.5 ${isActive ? 'text-brand-dark' : 'text-gray-200'}`}>
                    {service.name.split(' ').map((w, i) => <span key={i} className="block">{w}</span>)}
                </span>
                <span className={`block text-[11px] font-medium ${isActive ? 'text-brand-dark/70' : 'text-[#636366]'}`}>
                  {service.duration}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceList;