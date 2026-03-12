import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  itemsPerView?: { mobile: number; tablet: number; desktop: number };
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

export function Carousel({
  children,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  autoplay = false,
  autoplayInterval = 5000,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(itemsPerView.desktop);
  const touchStartX = useRef(0);
  const isPaused = useRef(false);

  const totalItems = children.length;
  const maxIndex = Math.max(0, totalItems - visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(itemsPerView.mobile);
      else if (w < 1024) setVisibleCount(itemsPerView.tablet);
      else setVisibleCount(itemsPerView.desktop);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [itemsPerView]);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, maxIndex]);

  // Touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < maxIndex) next();
      else if (diff < 0 && currentIndex > 0) prev();
    }
  };

  const totalDots = maxIndex + 1;
  const gapPx = 24; // gap-6 = 1.5rem = 24px
  const itemWidthPercent = 100 / visibleCount;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      {/* Carousel track */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            transform: `translateX(calc(-${currentIndex * itemWidthPercent}% - ${currentIndex * gapPx}px))`,
            gap: `${gapPx}px`,
          }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{ width: `calc(${itemWidthPercent}% - ${((visibleCount - 1) * gapPx) / visibleCount}px)` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-1 sm:left-0 top-1/2 -translate-y-1/2 sm:-translate-x-4 lg:-translate-x-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 sm:bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-dark hover:bg-copper-400 hover:text-white hover:border-copper-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-dark disabled:hover:border-gray-100 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={16} className="sm:hidden" />
            <ChevronLeft size={18} className="hidden sm:block" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-1 sm:right-0 top-1/2 -translate-y-1/2 sm:translate-x-4 lg:translate-x-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 sm:bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-dark hover:bg-copper-400 hover:text-white hover:border-copper-400 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-dark disabled:hover:border-gray-100 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>
        </>
      )}

      {/* Dots */}
      {totalDots > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 h-2.5 bg-copper-400'
                  : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Ir a grupo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
