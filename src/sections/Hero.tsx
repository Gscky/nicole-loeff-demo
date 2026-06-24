import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { CLINIC } from '../lib/constants';

const HERO_VIDEO = '/videos/hero_nicole_loeff_1080p_web.mp4';
const HERO_POSTER = '/videos/hero-poster.jpg';

const STATS = [
  { value: '15', suffix: '+', label: 'Años de experiencia', accent: 'text-copper-300' },
  { value: '8K', suffix: '+', label: 'Pacientes atendidos', accent: 'text-emerald-200' },
  { value: '5.0', suffix: '★', label: 'En reseñas', accent: 'text-copper-300' },
];

export function Hero() {
  // prefers-reduced-motion: mostramos el poster estático en vez del video
  // y neutralizamos las animaciones de entrada.
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Entrada suave: si hay reduce-motion, sin desplazamiento.
  const fadeUp = (delay: number) =>
    reduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: 'easeOut' as const },
        };

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-emerald-950"
    >
      {/* ---- Capa de fondo: VIDEO full-screen (o poster si reduce-motion) ---- */}
      {reduceMotion ? (
        <img
          src={HERO_POSTER}
          alt="Clínica dental Dra. Nicole Loeff"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      )}

      {/* ---- Overlay para legibilidad (verde salvia oscurecido) ---- */}
      {/* Direccional: más denso abajo-izquierda donde vive el texto. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(105deg, rgba(12,20,14,0.82) 0%, rgba(24,39,28,0.55) 45%, rgba(24,39,28,0.22) 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-emerald-950/85 via-emerald-950/25 to-transparent"
      />
      {/* Filo dorado decorativo bajo el navbar */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-48 h-px bg-gradient-to-r from-transparent via-copper-300/50 to-transparent"
      />

      {/* ---- Contenido (encima del overlay) ---- */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-28 pt-32 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div {...fadeUp(0.15)} className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-copper-300" aria-hidden />
            <p className="font-body text-[11px] uppercase tracking-[0.4em] text-copper-200">
              {CLINIC.subtitle}
            </p>
          </motion.div>

          {/* Título */}
          <motion.h1
            {...fadeUp(0.3)}
            className="mb-5 font-display text-4xl font-bold leading-[1.03] text-white drop-shadow-sm sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem]"
          >
            Dra. Nicole
            <br />
            <span className="text-copper-300">Loeff</span>
          </motion.h1>

          {/* Eslogan */}
          <motion.p
            {...fadeUp(0.5)}
            className="mb-6 max-w-md font-display text-xl italic leading-snug text-emerald-50/90 sm:text-2xl lg:text-[1.6rem]"
          >
            {CLINIC.tagline}
          </motion.p>

          {/* Descripción */}
          <motion.p
            {...fadeUp(0.62)}
            className="mb-10 max-w-md font-body text-base leading-relaxed text-gray-100/85 sm:text-lg"
          >
            {CLINIC.description}
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.75)}>
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agenda tu hora por WhatsApp con la Dra. Nicole Loeff"
              className="group inline-flex items-center gap-3 rounded-full bg-copper-400 px-8 py-3.5 font-body text-sm font-semibold text-white shadow-lg shadow-copper-900/30 transition-all duration-300 hover:scale-[1.02] hover:bg-copper-500 hover:shadow-xl hover:shadow-copper-900/40 sm:px-10 sm:py-4 sm:text-base"
            >
              Agenda tu hora
              <span
                aria-hidden
                className="inline-block h-px w-5 bg-white/80 transition-all duration-300 group-hover:w-8"
              />
            </a>
          </motion.div>
        </div>

        {/* ---- Stat-cards (banda glass inferior) ---- */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-14 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4 lg:mt-16"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-md sm:items-start sm:px-5 sm:py-4 sm:text-left"
            >
              <p className={`font-display text-2xl font-bold leading-none sm:text-3xl lg:text-4xl ${s.accent}`}>
                {s.value}
                <span className="align-top text-lg lg:text-xl">{s.suffix}</span>
              </p>
              <p className="mt-1.5 font-body text-[9px] font-medium uppercase leading-tight tracking-[0.2em] text-gray-100/80 lg:text-[10px]">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ---- Indicador de scroll ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="rounded-full border border-white/30 bg-white/10 p-2 backdrop-blur-sm"
          aria-hidden
        >
          <ArrowDown size={18} className="text-copper-200" />
        </motion.div>
      </motion.div>
    </section>
  );
}
