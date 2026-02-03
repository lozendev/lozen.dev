
import React from 'react';

export const BillionSlide: React.FC = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-center">
      <div className="z-10 animate-pulse">
        <h2 className="font-mono text-xs md:text-sm bg-gradient-to-r from-cyber via-purple-400 to-cyber bg-clip-text text-transparent font-bold uppercase tracking-[0.2em] mb-6">
          billion $ prjkts
        </h2>
        <h1 className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter">
          COMING SOON
        </h1>
      </div>
      
      {/* Background glitch effect element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-cyber/5 blur-3xl rounded-full pointer-events-none"></div>
    </div>
  );
};