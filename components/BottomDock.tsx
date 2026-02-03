
import React from 'react';
import { SlideId } from '../types';
import { NAV_ITEMS } from '../constants';

interface BottomDockProps {
  currentSlide: SlideId;
  availableTabs: SlideId[];
  onChangeSlide: (id: SlideId) => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({ currentSlide, availableTabs, onChangeSlide }) => {
  
  // Mapping labels to match the prompt exactly by using the constants configuration
  const getLabel = (id: SlideId) => {
    const item = NAV_ITEMS.find(n => n.id === id);
    return item ? item.label : id;
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 flex justify-center items-end pb-8 pointer-events-none">
      {/* Increased gap for separation and added drop shadow */}
      <div className="flex items-end gap-3 pointer-events-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
        {availableTabs.map((tabId) => {
          const isActive = currentSlide === tabId;
          
          return (
            <button
              key={tabId}
              onClick={() => onChangeSlide(tabId)}
              className={`
                group
                relative h-12 px-8 min-w-[120px] md:min-w-[160px]
                flex items-center justify-center
                font-mono text-xs md:text-sm tracking-wider uppercase
                transition-all duration-300 ease-out
                ${isActive 
                  ? 'bg-cyber -translate-y-2 pb-2' 
                  : 'bg-dark-gray hover:bg-mid-gray'
                }
              `}
              style={{
                clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)'
              }}
            >
              {/* Text: Solid black if active, Metallic Gradient if inactive, Colorful gradient on hover */}
              <span className={`
                font-bold transition-all duration-300
                ${isActive 
                  ? 'text-black' 
                  : 'bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-cyber group-hover:to-purple-400'
                }
              `}>
                {getLabel(tabId)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
