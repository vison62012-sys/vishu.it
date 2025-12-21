import React from 'react';
import { LatestWorkItem } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkGalleryProps {
  items: LatestWorkItem[];
}

const WorkGallery: React.FC<WorkGalleryProps> = ({ items }) => {
  return (
    <div className="mt-2 px-4 sm:px-8">
      <div className="flex justify-between items-end mb-5">
        <h2 className="text-white text-[19px] font-bold tracking-wide">Latest Work</h2>
        <button className="text-brand-orange text-[13px] font-medium hover:text-white transition pb-0.5">See All</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative rounded-[32px] overflow-hidden h-[180px] group shadow-lg shadow-black/40">
            {/* Container for images */}
            <div className="absolute inset-0 flex">
                <div className="w-[55%] h-full relative overflow-hidden">
                    {item.beforeImage.includes('-desktop.webp') ? (
                        <picture>
                            <source media="(max-width: 640px)" srcSet={item.beforeImage.replace('-desktop.webp', '-mobile.webp')} type="image/webp" />
                            <img src={item.beforeImage} alt="Before" className="absolute inset-0 w-[182%] max-w-none h-full object-cover" />
                        </picture>
                    ) : (
                        <img src={item.beforeImage} alt="Before" className="absolute inset-0 w-[182%] max-w-none h-full object-cover" />
                    )}
                    {/* Dark gradient overlay at bottom for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider drop-shadow-md">Before</span>
                    </div>
                </div>
                <div className="w-[45%] h-full relative overflow-hidden">
                    {/* Shift image left to align visually */}
                    {item.afterImage.includes('-desktop.webp') ? (
                        <picture>
                            <source media="(max-width: 640px)" srcSet={item.afterImage.replace('-desktop.webp', '-mobile.webp')} type="image/webp" />
                            <img src={item.afterImage} alt="After" className="absolute inset-0 left-[-120%] w-[222%] max-w-none h-full object-cover" />
                        </picture>
                    ) : (
                        <img src={item.afterImage} alt="After" className="absolute inset-0 left-[-120%] w-[222%] max-w-none h-full object-cover" />
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                        <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider drop-shadow-md">After</span>
                    </div>
                </div>
            </div>
            
            {/* The Divider Line */}
            <div className="absolute inset-y-0 left-[55%] w-0.5 bg-white/40 -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                {/* The Circle Handle */}
                <div className="w-7 h-7 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border-[1.5px] border-white shadow-sm">
                   <div className="flex gap-[3px]">
                       <div className="w-[1px] h-2.5 bg-white shadow-sm"></div>
                       <div className="w-[1px] h-2.5 bg-white shadow-sm"></div>
                   </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkGallery;
