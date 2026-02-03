
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { WALLET_ADDRESS } from '../../constants';

export const AboutSlide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center px-6 md:px-24 text-center">
      
      <div className="max-w-4xl z-10 flex flex-col items-center">
        {/* Slogan: Changed 'abt' to 'about' with gradient */}
        <h2 className="font-mono text-xs md:text-sm bg-gradient-to-r from-cyber via-purple-400 to-cyber bg-clip-text text-transparent uppercase tracking-[0.2em] mb-6 font-bold">
          about
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-extrabold text-white tracking-tighter mb-8 md:mb-12">
          about
        </h1>
        
        <p className="font-mono text-xs md:text-sm text-white/80 uppercase leading-loose max-w-2xl mb-12">
          An old BNB degen who helped multiple projects scale into the multi-million-dollar market cap range. Being away from the scene for quite some time, I’m starting from zero again—this time with a deliberately unreasonable objective: launching a $1B market cap token. I’m committed to learning relentlessly in pursuit of achieving this goal. If you follow my progress and track the work, my aim is to reward your early attention by creating real upside along the way.
          <br /><br />
          Couple launch rules: No bundles. Minimal supply, if any.
        </p>

        <button 
          onClick={handleCopy}
          className="group relative inline-flex items-center gap-3 px-6 py-4 bg-transparent border border-cyber/30 hover:border-cyber text-cyber hover:bg-cyber/10 transition-all duration-300 rounded-none uppercase font-mono text-xs tracking-widest"
        >
          <span className="opacity-70">Dev wallet:</span>
          <span className="font-bold hidden md:inline">{WALLET_ADDRESS}</span>
          <span className="font-bold md:hidden">{WALLET_ADDRESS.slice(0, 6)}...{WALLET_ADDRESS.slice(-4)}</span>
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          
          {/* Decorative corners */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber -translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-all"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-all"></span>
        </button>
      </div>

    </div>
  );
};
