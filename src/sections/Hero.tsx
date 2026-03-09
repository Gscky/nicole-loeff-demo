import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
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
          alt="Clínica Dental Nicole Loeff"
          className="h-full w-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-900/70 to-forest-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/40 via-transparent to-forest-950/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gold-400/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-400/5 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Gold divider top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mb-8 h-[1px] w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-gold-400 mb-6"
        >
          {CLINIC.subtitle} — {CLINIC.commune}
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-8"
        >
          Dra. Nicole
          <br />
          <span className="font-normal italic text-gold-300">Loeff</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mx-auto max-w-xl font-body text-base sm:text-lg text-white/70 leading-relaxed mb-12"
        >
          {CLINIC.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-gold-400 px-8 py-4 font-body text-sm font-semibold tracking-wide text-forest-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-xl hover:shadow-gold-400/20 hover:scale-[1.02]"
          >
            <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
            Agendar Hora
          </a>
          <a
            href="#especialidades"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-body text-sm tracking-wide text-white/90 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-300 hover:bg-white/5"
          >
            Conocer Especialidades
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
          <ArrowDown size={20} className="text-gold-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
