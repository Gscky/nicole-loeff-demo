import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Clock, Users } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/clinic/dra-nicole-casos.png"
                  alt="Dra. Nicole Loeff"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src="/images/clinic/salon-naranja.png"
                  alt="Clinica dental moderna"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-copper-400">+30</p>
                    <p className="font-body text-xs text-gray-500">Anos</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-copper-400">4.9</p>
                    <p className="font-body text-xs text-gray-500">Google</p>
                  </div>
                  <div className="w-px h-10 bg-gray-200" />
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-copper-400">+5k</p>
                    <p className="font-body text-xs text-gray-500">Pacientes</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div className="lg:pl-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-6">
                Odontologia de excelencia
              </h2>
              <div className="accent-divider mb-6" />
              <p className="font-body text-base text-gray-600 leading-relaxed mb-6">
                {CLINIC.mission}
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed mb-8">
                Ubicada en Las Condes, nuestra clinica cuenta con la mas moderna tecnologia
                y un equipo de profesionales especializados en cada area de la odontologia.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 rounded-xl bg-gray-light">
                  <Award size={24} className="text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-xs font-medium text-gray-dark">Excelencia</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-light">
                  <Users size={24} className="text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-xs font-medium text-gray-dark">Equipo elite</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-gray-light">
                  <Clock size={24} className="text-emerald-500 mx-auto mb-2" />
                  <p className="font-body text-xs font-medium text-gray-dark">Puntualidad</p>
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
