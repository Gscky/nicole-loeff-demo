import { useState, useRef, useCallback } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BEFORE_AFTER_CASES } from '../lib/constants';

function ComparisonSlider({ beforeImage, afterImage, title }: {
  beforeImage: string;
  afterImage: string;
  title: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] sm:aspect-[3/2] rounded-2xl overflow-hidden cursor-col-resize select-none touch-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width background) */}
      <img
        src={afterImage}
        alt={`${title} - Después`}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          draggable={false}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
              <path d="M5 1L1 6L5 11" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
              <path d="M1 1L5 6L1 11" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-gray-dark/70 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-1.5 rounded-full">
        Después
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="resultados" className="py-24 lg:py-32 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Resultados que hablan por sí solos
            </h2>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-gray-500 leading-relaxed">
              Desliza para comparar los resultados de nuestros tratamientos.
              Cada caso refleja nuestro compromiso con la excelencia.
            </p>
          </ScrollReveal>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {BEFORE_AFTER_CASES.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <div>
                <ComparisonSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  title={item.title}
                />
                <p className="font-display text-lg font-semibold text-gray-dark mt-4 text-center">
                  {item.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
