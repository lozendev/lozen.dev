import React, { useState } from 'react';
import { GridBackground } from './components/GridBackground';
import { TopBar } from './components/TopBar';
import { BottomDock } from './components/BottomDock';
import { FrontSlide } from './components/slides/FrontSlide';
import { AboutSlide } from './components/slides/AboutSlide';
import { BillionSlide } from './components/slides/BillionSlide';
import { LatestSlide } from './components/slides/LatestSlide';
import { SlideId } from './types';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideId>(SlideId.FRONT);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displaySlide, setDisplaySlide] = useState<SlideId>(SlideId.FRONT);

  // Handle slide change with fade out/in effect
  const changeSlide = (nextSlide: SlideId) => {
    if (nextSlide === currentSlide || isTransitioning) return;

    setIsTransitioning(true);
    
    // Wait for fade out
    setTimeout(() => {
      setCurrentSlide(nextSlide);
      setDisplaySlide(nextSlide);
      
      // Short delay before fade in starts (optional but adds to the "disappear" feel)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500); // Match this with CSS transition duration
  };

  const handleNext = () => {
    const currentIndex = NAV_ITEMS.findIndex(item => item.id === currentSlide);
    const nextIndex = (currentIndex + 1) % NAV_ITEMS.length;
    changeSlide(NAV_ITEMS[nextIndex].id);
  };

  const getDockTabs = (slide: SlideId) => {
    const allIds = NAV_ITEMS.map(n => n.id);
    return allIds.filter(id => id !== slide);
  };

  const renderSlideContent = () => {
    switch (displaySlide) {
      case SlideId.FRONT: return <FrontSlide />;
      case SlideId.ABOUT: return <AboutSlide />;
      case SlideId.BILLION: return <BillionSlide />;
      case SlideId.LATEST: return <LatestSlide />;
      default: return <FrontSlide />;
    }
  };

  return (
    <main className="relative w-full h-screen bg-black text-white overflow-hidden selection:bg-cyber selection:text-black">
      <GridBackground />
      
      <TopBar onNext={handleNext} />
      
      {/* Content Container with Fade Transition */}
      <div 
        className={`absolute inset-0 pt-20 pb-0 transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
        }`}
      >
        {renderSlideContent()}
      </div>

      <BottomDock 
        currentSlide={currentSlide} 
        availableTabs={getDockTabs(currentSlide)} 
        onChangeSlide={changeSlide} 
      />
    </main>
  );
};

export default App;