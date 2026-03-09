import { motion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { MessageCircle, Phone } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function CTA() {
  return (
    <section className="relative py-28 lg:py-36 bg-forest-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-400/5 blur-[150px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
        backgroundSize: '24px 24px',
      }} />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />

          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold-400 mb-6">
            Su nueva sonrisa comienza aquí
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
            Reserve su hora
            <span className="block font-normal italic text-gold-300">hoy mismo</span>
          </h2>

          <p className="mx-auto max-w-xl font-body text-base text-white/50 leading-relaxed mb-12">
            Dé el primer paso hacia la sonrisa que siempre soñó. Contáctenos por WhatsApp 
            y agendaremos su consulta de evaluación.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-gold-400 px-10 py-4 font-body text-sm font-semibold tracking-wide text-forest-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-400/20 hover:scale-[1.02]"
            >
              <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
              WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="flex items-center gap-3 rounded-full border border-white/20 px-10 py-4 font-body text-sm tracking-wide text-white/80 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-300"
            >
              <Phone size={16} />
              {CLINIC.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
