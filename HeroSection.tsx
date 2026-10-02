import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { RevealLayer } from './RevealLayer';
import { PageRoute } from '../types';
import bgImage1 from '../assets/images/redhead_portrait_bg_1786049207531.jpg';
import bgImage2 from '../assets/images/redhead_reveal_bg_1786049679694.jpg';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onRouteChange: (route: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onRouteChange,
}) => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number }>({
    x: -999,
    y: -999,
  });

  const mouse = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const smooth = useRef<{ x: number; y: number }>({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchMove);

    const animate = () => {
      if (mouse.current.x !== -999 && mouse.current.y !== -999) {
        if (smooth.current.x === -999) {
          smooth.current.x = mouse.current.x;
          smooth.current.y = mouse.current.y;
        } else {
          smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
          smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
        }

        setCursorPos({
          x: smooth.current.x,
          y: smooth.current.y,
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: '100dvh' }}
    >
      {/* Layer 1: Base Image (z-10) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url("${bgImage1}")` }}
      />

      {/* Layer 2: Reveal Layer (z-30) */}
      <RevealLayer
        image={bgImage2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
      />

      {/* Layer 3: Heading Overlay (z-50) */}
      <div className="absolute top-[14%] sm:top-[16%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-4xl sm:text-7xl md:text-8xl hero-anim hero-reveal drop-shadow-lg"
            style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
          >
            Aesthetics that
          </span>
          <span
            className="block font-normal text-4xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal drop-shadow-lg"
            style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
          >
            goes beyond beauty
          </span>
        </h1>

        {/* Floating subtle spotlight prompt */}
        <div className="mt-4 hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-xs text-white/80 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-[#e8702a]" />
          <span>Move cursor across portrait to reveal subcutaneous dermal analysis</span>
        </div>
      </div>

      {/* Layer 4: Bottom-Left Paragraph (z-50) */}
      <div
        className="hidden sm:block absolute bottom-12 left-8 md:left-14 max-w-[280px] z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.7s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed drop-shadow-md">
          Our professionals have extensive experience with advanced aesthetics treatments,
          ensuring that you are in trusted hands at every step of your treatment.
        </p>
        <button
          onClick={() => onRouteChange('treatments')}
          className="mt-3 text-xs text-white underline underline-offset-4 hover:text-[#e8702a] transition-colors flex items-center gap-1 cursor-pointer pointer-events-auto"
        >
          <span>Explore All Treatments</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Layer 5: Bottom-Right Block (z-50) */}
      <div
        className="absolute bottom-8 sm:bottom-16 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
        style={{ animationDelay: '0.85s' }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed drop-shadow-md">
          At WESS_SAID, we offer treatments that go beyond beauty, delivering results that enhance your natural beauty and boost your self-esteem.
          Our dedicated team is committed to providing personalized care, ensuring safe and high-quality experiences for all our patients.
        </p>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-initial bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30 pointer-events-auto cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>

          <button
            onClick={() => onRouteChange('treatments')}
            className="flex-1 sm:flex-initial bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all backdrop-blur-md pointer-events-auto cursor-pointer text-center"
          >
            View Treatments
          </button>
        </div>
      </div>
    </section>
  );
};
