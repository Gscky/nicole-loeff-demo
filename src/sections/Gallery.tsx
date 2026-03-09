import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { src: '/images/gallery/clinica-interior.jpg', alt: 'Recepción de la clínica', caption: 'Recepción' },
  { src: '/images/banners/banner-2.jpg', alt: 'Sala de tratamiento moderna', caption: 'Sala de Tratamiento' },
  { src: '/images/banners/banner-4.jpg', alt: 'Equipamiento dental', caption: 'Equipamiento' },
  { src: '/images/banners/banner-3.jpg', alt: 'Atención personalizada', caption: 'Atención Personalizada' },
  { src: '/images/banners/banner-7.jpg', alt: 'Ubicación de la clínica', caption: 'Nuestra Ubicación' },
  { src: '/images/banners/banner-5.jpg', alt: 'Zona de esterilización', caption: 'Bioseguridad' },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((c) => c !== null ? (c - 1 + IMAGES.length) % IMAGES.length : null);
  const next = () => setLightbox((c) => c !== null ? (c + 1) % IMAGES.length : null);

  return (
    <section id="clinica" className="relative py-28 lg:py-36 bg-forest-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-400 mb-4">
              Nuestra Clínica
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-white leading-tight mb-6">
              Un espacio pensado
              <span className="block font-normal italic text-gold-300">para su bienestar</span>
            </h2>
            <div className="mx-auto gold-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-white/40 leading-relaxed">
              Ubicada en un lugar de fácil acceso en Las Condes, nuestra clínica cuenta con la más 
              moderna tecnología y un ambiente acogedor, diseñado para hacer de su atención algo distinto.
            </p>
          </ScrollReveal>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {IMAGES.map((img, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              className={i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''}
            >
              <motion.button
                onClick={() => setLightbox(i)}
                className="group relative w-full overflow-hidden rounded-xl"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? 'h-64 sm:h-80 md:h-full' : 'h-40 sm:h-48 md:h-56'
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-display text-sm text-white">{img.caption}</p>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={IMAGES[lightbox].src}
              alt={IMAGES[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <p className="absolute bottom-6 text-center font-display text-white/60">
              {IMAGES[lightbox].caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
