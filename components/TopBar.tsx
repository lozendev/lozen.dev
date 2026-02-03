import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../constants';

interface TopBarProps {
  onNext: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onNext }) => {
  return (
    <div className="absolute top-0 left-0 right-0 p-6 md:p-10 z-50 pointer-events-none">
      <div className="relative w-full flex justify-between items-start pointer-events-auto">
        
        {/* Left: Logo - Increased size by 25% (48px -> 60px) */}
        <div className="flex items-center">
            <img src={IMAGES.PANDA_LOGO} alt="Panda Logo" className="w-[60px] h-[60px] object-contain opacity-80" />
        </div>
        
        {/* Center: Status */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
            <span className="font-mono text-xs text-white/50 uppercase tracking-widest">status: offline</span>
        </div>
        
        {/* Right: Next Arrow */}
        <button 
            onClick={onNext}
            className="group flex items-center justify-center w-12 h-12 bg-dark-gray border border-white/10 rounded-xl hover:border-cyber/50 hover:bg-white/5 transition-all duration-300"
            aria-label="Next slide"
        >
            <ArrowRight className="w-5 h-5 text-white group-hover:text-cyber transition-colors" />
        </button>
      </div>
    </div>
  );
};