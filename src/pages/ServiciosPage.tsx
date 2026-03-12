import { ScrollReveal } from '../components/ScrollReveal';
import { SPECIALTIES, CLINIC } from '../lib/constants';
import {
  RefreshCw,
  CircleDot,
  AlignLeft,
  Sparkles,
  Microscope,
  Baby,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  refresh: RefreshCw,
  implant: CircleDot,
  aligners: AlignLeft,
  sparkle: Sparkles,
  microscope: Microscope,
  baby: Baby,
  shield: ShieldCheck,
  lock: Lock,
};

const SPECIALTY_IMAGES: Record<string, string> = {
  rehabilitacion: '/images/specialties/rehabilitacion-oral.jpg',
  implantologia: '/images/specialties/implantologia.jpg',
  ortodoncia: '/images/specialties/ortodoncia.jpg',
  estetica: '/images/specialties/blanqueamiento.jpg',
  endodoncia: '/images/specialties/endodoncia.jpg',
  odontopediatria: '/images/specialties/odontopediatria.jpg',
  periodoncia: '/images/specialties/periodoncia.jpg',
  bruxismo: '/images/specialties/sedacion.jpg',
};

export function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/cases/dentista-trabajando.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-emerald-900/95" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nuestros Servicios
            </h1>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base sm:text-lg text-white/70 leading-relaxed">
              Un equipo multidisciplinario de especialistas para atender cada una
              de tus necesidades odontologicas con la mas alta calidad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {SPECIALTIES.map((spec, i) => {
              const Icon = ICON_MAP[spec.icon];
              const isEven = i % 2 === 0;
              const image = SPECIALTY_IMAGES[spec.id];

              return (
                <ScrollReveal key={spec.id}>
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Image */}
                    <div className={`overflow-hidden rounded-2xl shadow-lg ${
                      isEven ? '' : 'lg:order-2'
                    }`}>
                      <img
                        src={image}
                        alt={spec.title}
                        className="w-full h-56 sm:h-72 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content */}
                    <div className={isEven ? '' : 'lg:order-1'}>
                      <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                        <Icon size={28} className="text-emerald-500" />
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-dark mb-4">
                        {spec.title}
                      </h2>
                      <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                        {spec.description}
                      </p>
                      <a
                        href={CLINIC.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-copper-400 px-8 py-3 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-lg"
                      >
                        Consultar por este servicio
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dentist working photo */}
      <section className="py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/cases/dentista-trabajando.jpg"
                  alt="Dra. Nicole Loeff realizando procedimiento dental"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-dark mb-6">
                  Tecnologia de vanguardia
                </h2>
                <div className="accent-divider mb-6" />
                <p className="font-body text-base text-gray-600 leading-relaxed mb-4">
                  Contamos con equipos de ultima generacion para diagnosticos precisos y
                  tratamientos eficientes. Desde lupas de magnificacion hasta sistemas
                  de esterilizacion de ultima generacion.
                </p>
                <p className="font-body text-base text-gray-600 leading-relaxed mb-8">
                  Utilizamos exclusivamente materiales de las mejores marcas mundiales,
                  garantizando durabilidad y resultados esteticos superiores.
                </p>
                <a
                  href={CLINIC.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-copper-400 px-10 py-4 font-body text-base font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-xl hover:shadow-copper-400/30"
                >
                  Agenda tu hora
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
