import { ScrollReveal } from '../components/ScrollReveal';
import { Carousel } from '../components/Carousel';
import { BEFORE_AFTER_CASES } from '../lib/constants';
import { ESTETICA_CASE_SRCS } from './EsteticaClinica';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BeforeAfterProps {
  showAll?: boolean;
}

function CaseCard({ item }: { item: (typeof BEFORE_AFTER_CASES)[number] }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-copper-400/10 transition-all duration-500 h-full">
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={`${item.title} - Antes y Después`}
          loading="lazy"
          width={800}
          height={800}
          className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* Before/After labels */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-gray-dark/70 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-1 rounded-full">
            Antes
          </span>
          <span className="bg-emerald-500/80 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-1 rounded-full">
            Después
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">
          {item.title}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export function BeforeAfter({ showAll = false }: BeforeAfterProps) {
  // En la home se muestran todos los casos MENOS los que ya aparecen en el mazo
  // de Estética (misma página) y los reservados solo para la galería completa;
  // en /casos (showAll) van los 19.
  const soloEnCasos = ['/images/cases/caso-6.jpg', '/images/cases/caso-3.jpg'];
  const cases = showAll
    ? BEFORE_AFTER_CASES
    : BEFORE_AFTER_CASES.filter(
        (c) => !ESTETICA_CASE_SRCS.includes(c.image) && !soloEnCasos.includes(c.image)
      );

  return (
    <section id="resultados" className="py-24 lg:py-32 bg-gray-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Resultados que hablan por sí solos
            </h2>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-gray-500 leading-relaxed">
              Cada caso clínico es único y nos importa.
              Resultados reales de nuestros pacientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Cases Carousel */}
        <ScrollReveal>
          <div className="sm:px-6 lg:px-8">
            <Carousel
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
              autoplay
              autoplayInterval={5000}
            >
              {cases.map((item) => (
                <CaseCard key={item.id} item={item} />
              ))}
            </Carousel>
          </div>
        </ScrollReveal>

        {/* CTA */}
        {!showAll && (
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                to="/casos"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#C97E3E] px-9 py-4 font-body text-[17px] font-semibold text-white shadow-lg shadow-[#C97E3E]/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b06d33] hover:shadow-xl hover:shadow-[#C97E3E]/40"
              >
                Ver todos los casos
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
