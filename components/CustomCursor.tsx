import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        ['a', 'button', 'input', 'select', 'textarea'].includes(target.tagName.toLowerCase()) ||
        target.closest('a') !== null || 
        target.closest('button') !== null;
        
      setIsPointer(isClickable);
    };

    let animationId: number;
    const animate = () => {
      // Ajustado o lerp para 0.2 para ser mais responsivo, mas ainda suave
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.2;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      >
        <div className={`w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isPointer ? 'opacity-0' : 'opacity-100'}`}></div>
      </div>

      <div 
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      >
        <div 
          className={`
            relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2
            transition-all duration-300 ease-out
            ${isPointer ? 'w-16 h-16' : 'w-10 h-10 opacity-40'}
          `}
        >
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
          
          <div className={`absolute w-full h-[1px] bg-white transition-opacity duration-300 ${isPointer ? 'opacity-30' : 'opacity-0'}`}></div>
          <div className={`absolute h-full w-[1px] bg-white transition-opacity duration-300 ${isPointer ? 'opacity-30' : 'opacity-0'}`}></div>
        </div>
      </div>
    </>
  );
};