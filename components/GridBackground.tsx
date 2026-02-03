
import React, { useEffect, useState } from 'react';

export const GridBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initial dimensions
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate adjusted coordinates for the transformed container
  // Container is 200% width/height, centered.
  // Transform includes scale-150 and rotate-x-40 for more depth.
  
  const scale = 1.5; 
  // Approximation for rotateX foreshortening on Y axis (cos 40deg ≈ 0.766)
  const perspectiveFactor = 0.766; 

  // Local Center X of the container (since width is 200% of window width)
  const localCenterX = dimensions.width;
  // Local Center Y
  const localCenterY = dimensions.height;

  // Screen Center X/Y
  const screenCenterX = dimensions.width / 2;
  const screenCenterY = dimensions.height / 2;

  // Calculate offsets from center in screen space
  const offsetX = mousePos.x - screenCenterX;
  const offsetY = mousePos.y - screenCenterY;

  // Map to local space: apply inverse scale and perspective correction
  const maskX = localCenterX + (offsetX / scale);
  const maskY = localCenterY + (offsetY / (scale * perspectiveFactor));

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505] overflow-hidden perspective-[800px]">
      {/* 3D Container for the grid plane - Steeper angle for more 3D look */}
      <div className="absolute inset-[-50%] w-[200%] h-[200%] origin-center transform-gpu rotate-x-[40deg] scale-150">
        
        {/* Base Grid - Dim */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Interactive Highlight Grid - Subtle Purple/Pink */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            // Reduced alpha from 0.4 to 0.2 to diffuse the glow intensity by 50%
            backgroundImage: 'linear-gradient(rgba(217, 70, 239, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(217, 70, 239, 0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: `radial-gradient(350px circle at ${maskX}px ${maskY}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${maskX}px ${maskY}px, black, transparent)`
          }}
        />

        {/* Major Grid - Larger squares overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '240px 240px'
          }}
        />
        
        {/* Fade out horizon/edges - Updated to match new BG #050505 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_70%)]" />
      </div>
    </div>
  );
};
