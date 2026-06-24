import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative pb-10 lg:pb-8">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/excelencia/excelencia-1.jpg"
                    alt="Dra. Nicole Loeff atendiendo a una paciente en la clínica dental"
                    loading="lazy"
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg mt-6 sm:mt-8">
                  <img
                    src="/images/excelencia/excelencia-2.jpg"
                    alt="Paciente feliz mostrando su sonrisa tras el tratamiento dental"
                    loading="lazy"
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-xl sm:rounded-2xl shadow-xl px-4 sm:px-6 py-3 sm:py-4 border border-gray-100 w-[85%] sm:w-auto">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="font-display text-xl sm:text-2xl font-bold text-copper-400">+15</p>
                    <p className="font-body text-[10px] sm:text-xs text-gray-500">Años</p>
                  </div>
                  <div className="w-px h-8 sm:h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-display text-xl sm:text-2xl font-bold text-copper-400">5.0</p>
                    <p className="font-body text-[10px] sm:text-xs text-gray-500">Google</p>
                  </div>
                  <div className="w-px h-8 sm:h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-display text-xl sm:text-2xl font-bold text-copper-400">+8k</p>
                    <p className="font-body text-[10px] sm:text-xs text-gray-500">Pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div className="lg:pl-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
                Odontología de excelencia
              </h2>
              <div className="accent-divider mb-6" />
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {CLINIC.mission}
              </p>
              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Ubicada en Las Condes, nuestra clínica cuenta con la más moderna tecnología
                y un equipo de profesionales especializados en cada área de la odontología.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-light">
                  <Award size={20} className="sm:hidden text-emerald-500 mx-auto mb-1.5" />
                  <Award size={24} className="hidden sm:block text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-[10px] sm:text-xs font-medium text-gray-dark">Excelencia</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-light">
                  <Users size={20} className="sm:hidden text-emerald-500 mx-auto mb-1.5" />
                  <Users size={24} className="hidden sm:block text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-[10px] sm:text-xs font-medium text-gray-dark">Equipo elite</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-gray-light">
                  <Clock size={20} className="sm:hidden text-emerald-500 mx-auto mb-1.5" />
                  <Clock size={24} className="hidden sm:block text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-[10px] sm:text-xs font-medium text-gray-dark">Puntualidad</p>
                </div>
              </div>

              <Link
                to="/equipo"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-copper-400 hover:text-copper-500 transition-colors group"
              >
                Conocer al equipo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
