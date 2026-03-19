import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Testimonials() {
  useEffect(() => {
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) return;
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Lo que dicen nuestros pacientes
            </h2>
            <div className="mx-auto accent-divider mb-8" />
          </ScrollReveal>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <ScrollReveal>
          <div className="flex justify-center">
            <div
              className="elfsight-app-c2fb8cbf-94dd-4a73-9031-4049bdcc52a0 w-full"
              data-elfsight-app-lazy
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
