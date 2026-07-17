import { ScrollReveal } from '../components/ScrollReveal';
import { Play } from 'lucide-react';

/* Sección informativa cerca del footer: video institucional de la clínica
   + tarjeta que redirige a la entrevista/podcast en YouTube. */
const YT_ID = 'l9Be8l6QQYM';
const YT_URL = 'https://youtu.be/l9Be8l6QQYM';

export function VideoSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-emerald-950 overflow-hidden">
      {/* Filo dorado superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-300/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-copper-300" aria-hidden />
              <p className="font-body text-[11px] uppercase tracking-[0.4em] text-copper-200">
                Conócenos
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              La clínica en video
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed">
              Un vistazo cercano a nuestro equipo y a la atención boutique que vivirás en la clínica.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 lg:gap-10 items-stretch">
          {/* Video institucional (local) */}
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <video
                className="w-full aspect-video object-cover bg-emerald-900"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                poster="/videos/clinica-gente-poster.jpg"
              >
                <source src="/videos/clinica-gente.mp4" type="video/mp4" />
              </video>
            </div>
          </ScrollReveal>

          {/* Tarjeta → entrevista/podcast en YouTube */}
          <ScrollReveal direction="right">
            <a
              href={YT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver la entrevista de la Dra. Nicole Loeff en YouTube"
              className="group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
            >
              <img
                src={`https://img.youtube.com/vi/${YT_ID}/hqdefault.jpg`}
                alt="Entrevista a la Dra. Nicole Loeff en YouTube"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/45 to-emerald-950/10" />

              {/* Botón play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-emerald-950 shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
              </div>

              <div className="relative z-10 p-6">
                <p className="font-body text-[11px] uppercase tracking-[0.3em] text-copper-200 mb-2">
                  Entrevista · YouTube
                </p>
                <p className="font-display text-xl font-semibold leading-snug text-white">
                  Conversación con la Dra. Nicole Loeff
                </p>
                <span className="mt-3 inline-flex items-center gap-2 font-body text-sm font-semibold text-white/80 transition-colors group-hover:text-copper-200">
                  Ver en YouTube →
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
