import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/banners/banner-prov.jpg"
          alt="Clínica Dental Nicole Loeff - Interior moderno"
          className="h-full w-full object-cover"
        />
        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 via-emerald-900/70 to-emerald-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-emerald-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {CLINIC.tagline}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-2xl font-body text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-8 sm:mb-10 px-2"
        >
          {CLINIC.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-copper-400 px-8 sm:px-10 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-xl hover:shadow-copper-400/30 hover:scale-[1.02]"
          >
            Agenda tu hora
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
