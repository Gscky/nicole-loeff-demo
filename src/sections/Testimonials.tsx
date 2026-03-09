import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { REVIEWS } from '../lib/constants';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  return (
    <section id="testimonios" className="relative py-28 lg:py-36 bg-warm-100 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-200/30 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-forest-200/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-600 mb-4">
              Testimonios
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-forest-900 leading-tight mb-6">
              Lo que dicen
              <span className="block font-normal italic text-gold-600">nuestros pacientes</span>
            </h2>
            <div className="mx-auto gold-divider" />
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal>
          <div className="relative mx-auto max-w-3xl">
            {/* Quote icon */}
            <Quote size={48} className="mx-auto mb-8 text-gold-300/40" />

            {/* Review content */}
            <div className="relative min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {Array.from({ length: REVIEWS[current].stars }).map((_, i) => (
                      <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-display text-xl sm:text-2xl font-light text-forest-800 leading-relaxed italic mb-8">
                    "{REVIEWS[current].text}"
                  </p>

                  {/* Name */}
                  <div>
                    <div className="mx-auto w-8 h-[1px] bg-gold-400 mb-4" />
                    <p className="font-body text-sm font-semibold tracking-wide text-forest-700">
                      {REVIEWS[current].name}
                    </p>
                    <p className="font-body text-xs text-warm-500 mt-1">
                      Paciente verificada
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-warm-300 text-warm-500 hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-gold-400'
                        : 'w-2 bg-warm-300 hover:bg-warm-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full border border-warm-300 text-warm-500 hover:border-gold-400 hover:text-gold-600 transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Google rating badge */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-warm-200 w-fit mx-auto">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="font-body text-sm text-warm-600">
              <strong className="text-forest-800">5.0</strong> en Google Reviews
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
