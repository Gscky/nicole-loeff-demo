import { ScrollReveal } from '../components/ScrollReveal';
import { Carousel } from '../components/Carousel';
import { SPECIALTIES } from '../lib/constants';
import { Link } from 'react-router-dom';
import {
  RefreshCw,
  CircleDot,
  AlignLeft,
  Sparkles,
  Microscope,
  Baby,
  ShieldCheck,
  Lock,
  ArrowRight,
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

export function Services() {
  return (
    <section id="servicios" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Nuestras Especialidades
            </h2>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-gray-500 leading-relaxed">
              Un equipo de profesionales altamente calificados y especializados,
              atendiendo sus necesidades odontologicas en cada una de las siguientes areas.
            </p>
          </ScrollReveal>
        </div>

        {/* Carousel */}
        <ScrollReveal>
          <div className="px-6 lg:px-8">
            <Carousel
              itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            >
              {SPECIALTIES.map((spec) => {
                const Icon = ICON_MAP[spec.icon];
                return (
                  <div
                    key={spec.id}
                    className="group rounded-2xl bg-white border border-gray-100 p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-copper-400/10 hover:border-copper-200 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-emerald-500">
                      <Icon
                        size={22}
                        className="text-emerald-500 transition-colors duration-300 group-hover:text-white"
                      />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-gray-dark mb-2">
                      {spec.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-copper-400 hover:text-copper-500 transition-colors group"
            >
              Ver todos los servicios
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
