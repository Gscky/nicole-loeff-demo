import { ScrollReveal } from '../components/ScrollReveal';
import { Cpu, UserCheck, Building2, Gem } from 'lucide-react';
import { CLINIC_IMAGES } from '../lib/constants';

const HIGHLIGHTS = [
  {
    icon: Cpu,
    title: 'Tecnología de punta',
    description: 'Equipos de última generación para diagnósticos precisos y tratamientos eficientes.',
  },
  {
    icon: UserCheck,
    title: 'Atención personalizada',
    description: 'Cada paciente recibe un plan de tratamiento único y a medida.',
  },
  {
    icon: Building2,
    title: 'Ambiente exclusivo',
    description: 'Espacios diseñados para tu comodidad y tranquilidad.',
  },
  {
    icon: Gem,
    title: 'Materiales premium',
    description: 'Materiales importados de las mejores marcas mundiales.',
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="py-24 lg:py-32 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Tecnología de vanguardia, atención boutique
            </h2>
            <div className="mx-auto accent-divider" />
          </ScrollReveal>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Text side */}
          <ScrollReveal>
            <div>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                Ubicada en un lugar de fácil acceso en Las Condes, nuestra clínica cuenta con la
                más moderna tecnología y un ambiente grato, para hacer de su atención algo distinto.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                Hemos implementado equipos de última generación para entregar un servicio de nivel
                mundial. Cada detalle está pensado para su comodidad: desde protocolos de bioseguridad
                con autoclave de última generación hasta procedimientos realizados con lupas de
                magnificación y tecnología de precisión milimétrica.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                Utilizamos exclusivamente materiales de las mejores marcas mundiales, garantizando
                durabilidad y resultados estéticos superiores. Nuestro objetivo es que cada paciente
                reciba un tratamiento de nivel mundial en un ambiente acogedor y profesional.
              </p>
            </div>
          </ScrollReveal>

          {/* Image grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-3">
              {CLINIC_IMAGES.slice(0, 4).map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* More clinic images */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
            {CLINIC_IMAGES.slice(4).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-emerald-500" />
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
