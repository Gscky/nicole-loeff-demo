import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { SPECIALTIES } from '../lib/constants';
import { ChevronRight, X } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function Specialties() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedSpec = SPECIALTIES.find((s) => s.id === selected);

  return (
    <section id="especialidades" className="relative py-28 lg:py-36 bg-forest-900 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-400 mb-4">
              Nuestras Especialidades
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              Cuidado integral para
              <span className="block font-normal italic text-gold-300">toda su familia</span>
            </h2>
            <div className="mx-auto gold-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-white/50 leading-relaxed">
              Un equipo de profesionales altamente calificados, atendiendo sus necesidades 
              odontológicas con las técnicas más modernas y materiales de la más alta calidad.
            </p>
          </ScrollReveal>
        </div>

        {/* Specialties Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALTIES.map((spec, i) => (
            <ScrollReveal key={spec.id} delay={i * 0.08}>
              <motion.button
                onClick={() => setSelected(spec.id)}
                className="group relative w-full text-left overflow-hidden rounded-2xl bg-forest-800/50 border border-white/5 p-6 transition-all duration-500 hover:bg-forest-800/80 hover:border-gold-400/20 hover:shadow-xl hover:shadow-gold-400/5"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon */}
                <span className="text-3xl mb-4 block">{spec.icon}</span>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {spec.title}
                </h3>

                {/* Short desc */}
                <p className="font-body text-sm text-white/40 leading-relaxed mb-4 line-clamp-2">
                  {spec.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1 font-body text-xs tracking-wide text-gold-400/60 group-hover:text-gold-400 transition-colors">
                  <span>Ver más</span>
                  <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
                </div>

                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gold-400/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedSpec && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedSpec.image}
                  alt={selectedSpec.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-forest-800 hover:bg-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 -mt-8 relative">
                <span className="text-4xl mb-3 block">{selectedSpec.icon}</span>
                <h3 className="font-display text-2xl font-semibold text-forest-900 mb-3">
                  {selectedSpec.title}
                </h3>
                <div className="gold-divider mb-4" />
                <p className="font-body text-warm-600 leading-relaxed mb-6">
                  {selectedSpec.description}
                </p>
                <a
                  href={CLINIC.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest-700 px-6 py-3 font-body text-sm font-medium text-white hover:bg-forest-600 transition-colors"
                >
                  Consultar por este tratamiento
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
