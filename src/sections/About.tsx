import { ScrollReveal } from '../components/ScrollReveal';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';

const VALUES = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Materiales y equipos de la más alta calidad disponible en el mercado.',
  },
  {
    icon: Heart,
    title: 'Calidez',
    description: 'Un trato humano y personalizado que hace la diferencia.',
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Años de experiencia respaldados por resultados impecables.',
  },
  {
    icon: Sparkles,
    title: 'Tecnología',
    description: 'Equipamiento de última generación para procedimientos precisos y cómodos.',
  },
];

export function About() {
  return (
    <section className="relative py-28 lg:py-36 bg-warm-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-forest-800) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/gallery/clinica-interior.jpg"
                  alt="Interior Clínica Dental Nicole Loeff"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/20 to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-300/30 rounded-2xl -z-10" />
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-forest-800 text-white px-6 py-4 rounded-xl shadow-xl">
                <p className="font-display text-3xl font-semibold text-gold-400">+10</p>
                <p className="font-body text-xs tracking-wide text-white/70 uppercase">Años de experiencia</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <div>
            <ScrollReveal>
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-600 mb-4">
                Sobre Nosotros
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-forest-900 leading-tight mb-6">
                Compromiso con la
                <span className="block font-normal italic text-gold-600">excelencia dental</span>
              </h2>
              <div className="gold-divider mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="font-body text-base text-warm-600 leading-relaxed mb-6">
                En Clínica Dental Nicole Loeff, nuestra principal preocupación es prestar un servicio 
                odontológico de la más alta calidad, lo más cómodamente posible para usted.
              </p>
              <p className="font-body text-base text-warm-600 leading-relaxed mb-10">
                Contamos con tecnología de última generación y los mejores materiales del mercado, 
                porque creemos que cada paciente merece un tratamiento de nivel mundial. Ubicados en 
                Las Condes, ofrecemos un ambiente moderno y acogedor donde su bienestar es nuestra prioridad.
              </p>
            </ScrollReveal>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-6">
              {VALUES.map((value, i) => (
                <ScrollReveal key={value.title} delay={0.2 + i * 0.1}>
                  <div className="group">
                    <value.icon
                      size={22}
                      className="text-gold-500 mb-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <h3 className="font-display text-lg font-semibold text-forest-800 mb-1">
                      {value.title}
                    </h3>
                    <p className="font-body text-sm text-warm-500 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
