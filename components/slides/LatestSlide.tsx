
import React from 'react';
import { IMAGES } from '../../constants';

export const LatestSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center px-8 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        
        {/* Left Text */}
        <div className="flex flex-col items-start z-10">
          <h2 className="font-mono text-xs md:text-sm bg-gradient-to-r from-cyber via-purple-400 to-cyber bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] mb-4">
            latest prjkt
          </h2>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter leading-none mb-6">
            COMING SOON
          </h1>
          <p className="font-mono text-sm text-white/60 uppercase">
            Coming Soon
          </p>
        </div>

        {/* Right Image Block */}
        <div className="relative w-full aspect-square md:aspect-video bg-dark-gray/50 border border-white/5 overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-white/20 text-xs uppercase tracking-widest group-hover:text-cyber/50 transition-colors">
              [ Encrypted Data Block ]
            </span>
          </div>
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};