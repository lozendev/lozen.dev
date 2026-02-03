
import React, { useState } from 'react';
import { ArrowUpRight, Gem, Twitch, Send, Copy, Check } from 'lucide-react';
import { IMAGES, WALLET_ADDRESS } from '../../constants';

// Custom X (Twitter) Icon Component
const XIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const FrontSlide: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      
      {/* Absolute Background Image Layer */}
      <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center items-end pointer-events-none">
          <div className="relative w-full h-[100vh] flex justify-center items-end">
             {/* Dark aura effect */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-cyber/5 blur-[120px] rounded-full pointer-events-none"></div>
            <img 
              src={IMAGES.DARK_PANDA}
              alt="Dark Panda" 
              className="w-auto h-[90vh] md:h-[105vh] object-contain translate-y-[10%]"
            />
          </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 w-full h-full pointer-events-none">
        
        {/* Left Column: Headings */}
        <div className="md:col-span-6 flex flex-col justify-center items-start h-full pointer-events-auto pb-20">
          {/* Updated Slogan to match bottom right style */}
          <h2 className="font-mono text-[10px] md:text-xs text-white uppercase tracking-wide mb-4">
            vibe, gfx and devving coins
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
            lozen.dev
          </h1>
          
          {/* CTA: Font mono, Gradient hover effect */}
          <a href="#" className="group flex items-center gap-2 text-cyber text-lg md:text-xl font-mono uppercase tracking-widest transition-all duration-300">
            <span className="bg-clip-text text-transparent bg-cyber group-hover:bg-gradient-to-r group-hover:from-cyber group-hover:to-white transition-all duration-300">
              view past projects
            </span>
            <ArrowUpRight className="w-5 h-5 text-cyber group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        {/* Right Column Area for Socials - Positioned higher and a bit left */}
        <div className="md:col-span-6 relative h-full">
            <div className="absolute top-[30%] right-[10%] md:right-[20%] flex flex-col items-start gap-3 pointer-events-auto">
              
              {/* Socials Label */}
              <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                socials
              </span>

              <div className="flex flex-row gap-4">
                {[
                  { Icon: XIcon, href: '#' },
                  { Icon: Twitch, href: '#' },
                  { Icon: Send, href: '#' }
                ].map(({ Icon, href }, idx) => (
                  <a 
                    key={idx} 
                    href={href}
                    className="group flex items-center justify-center w-12 h-12 bg-dark-gray border border-white/10 rounded-xl hover:border-cyber/50 hover:bg-white/5 transition-all duration-300"
                  >
                    <Icon size={20} className="text-white group-hover:text-cyber transition-colors" />
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* Footer Texts */}
      <div className="absolute bottom-24 md:bottom-32 left-0 right-0 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-end pointer-events-none z-20">
        
        {/* Bottom Left */}
        <div className="mb-4 md:mb-0 pointer-events-auto">
          <p className="font-mono text-xs text-white/50 leading-relaxed uppercase flex items-center gap-2">
            <span>{'{ '}</span>
            {/* Wallet Address with Copy */}
            <button 
              onClick={handleCopy}
              className="group inline-flex items-center gap-1.5 cursor-pointer hover:bg-white/5 px-1 py-0.5 rounded transition-colors"
              title="Copy Wallet Address"
            >
                <span className="bg-clip-text text-transparent bg-cyber group-hover:bg-gradient-to-r group-hover:from-cyber group-hover:to-white transition-all duration-300">
                    {WALLET_ADDRESS.slice(0, 4)}...{WALLET_ADDRESS.slice(-4)}
                </span>
                {copied ? (
                    <Check className="w-3 h-3 text-green-400" />
                ) : (
                    <Copy className="w-3 h-3 text-cyber group-hover:text-white transition-colors" />
                )}
            </button>
            <span>{', '}</span>
            {/* !axiom link with custom hover effect */}
            <a href="https://axiom.trade" target="_blank" rel="noreferrer" className="group inline-flex items-center">
                <span className="bg-clip-text text-transparent bg-cyber group-hover:bg-gradient-to-r group-hover:from-cyber group-hover:to-white transition-all duration-300">
                    !axiom
                </span>
            </a>
            <span>{' }'}</span>
          </p>
        </div>

        {/* Bottom Right - Justified and Compressed Width */}
        <div className="max-w-[320px] pointer-events-auto">
          <p className="font-mono text-[10px] md:text-xs text-white uppercase leading-relaxed tracking-wide text-justify">
            launching a variety of hype/lore/trash coins as with all devs. occasionally launching planned coins <Gem className="inline w-3 h-3 text-cyber mx-1"/> with a website and some marketing material prepped. These will be added to the <span className="bg-gradient-to-r from-purple-400 to-cyber bg-clip-text text-transparent font-bold">billion dollar project.</span>
          </p>
        </div>
      </div>

    </div>
  );
};