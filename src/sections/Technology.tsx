import { ScrollReveal } from '../components/ScrollReveal';
import { Cpu, Gem, ShieldCheck, Microscope } from 'lucide-react';

const FEATURES = [
  {
    icon: Cpu,
    title: 'Equipos de Última Generación',
    description: 'Tecnología digital avanzada para diagnósticos precisos y tratamientos eficientes con la mínima molestia.',
  },
  {
    icon: Gem,
    title: 'Materiales Premium',
    description: 'Utilizamos exclusivamente materiales de las mejores marcas mundiales, garantizando durabilidad y resultados estéticos superiores.',
  },
  {
    icon: ShieldCheck,
    title: 'Protocolos de Bioseguridad',
    description: 'Esterilización con autoclave de última generación y protocolos que superan los estándares internacionales.',
  },
  {
    icon: Microscope,
    title: 'Precisión Milimétrica',
    description: 'Procedimientos realizados con lupas de magnificación y tecnología que asegura resultados de nivel mundial.',
  },
];

export function Technology() {
  return (
    <section className="relative py-28 lg:py-36 bg-warm-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <ScrollReveal>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-600 mb-4">
                Tecnología & Calidad
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-forest-900 leading-tight mb-6">
                Lo mejor para
                <span className="block font-normal italic text-gold-600">su sonrisa</span>
              </h2>
              <div className="gold-divider mb-8" />
              <p className="font-body text-base text-warm-600 leading-relaxed mb-12">
                Hemos implementado una clínica con lo último en equipos y tecnología para entregar 
                un servicio de nivel mundial y sin molestias para nuestros pacientes. Cada detalle 
                está pensado para su comodidad y los mejores resultados.
              </p>
            </ScrollReveal>

            <div className="space-y-8">
              {FEATURES.map((feature, i) => (
                <ScrollReveal key={feature.title} delay={0.1 + i * 0.1}>
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-forest-800 flex items-center justify-center transition-all duration-300 group-hover:bg-gold-500 group-hover:shadow-lg group-hover:shadow-gold-400/20">
                      <feature.icon size={20} className="text-gold-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-forest-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="font-body text-sm text-warm-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Image side */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/banners/banner-2.jpg"
                      alt="Equipamiento dental moderno"
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/banners/banner-5.jpg"
                      alt="Esterilización"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/banners/banner-4.jpg"
                      alt="Sala de tratamiento"
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src="/images/banners/banner-3.jpg"
                      alt="Atención personalizada"
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 rounded-full bg-gold-200/40 blur-2xl" />
              <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 rounded-full bg-forest-200/40 blur-2xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
