import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Award, Sparkles } from 'lucide-react';

/* Presentación de la fundadora — va en la home entre el hero y el carrusel
   de especialidades. Foto profesional + credenciales + su sello en estética. */
export function Fundadora() {
  return (
    <section className="py-24 lg:py-32 bg-emerald-50/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* marco decorativo desplazado, guiño art-deco del hero */}
              <div
                aria-hidden
                className="absolute -inset-3 translate-x-4 translate-y-4 rounded-3xl border border-copper-300/50"
              />
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/team/nicole.jpg"
                  alt="Dra. Nicole Loeff, fundadora y directora de la clínica"
                  loading="lazy"
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl border border-gray-100 px-6 py-3 whitespace-nowrap">
                <p className="font-body text-xs sm:text-sm font-semibold text-copper-500 tracking-wide">
                  Fundadora · Directora Clínica
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Texto */}
          <ScrollReveal direction="right">
            <div className="lg:pl-4 mt-6 lg:mt-0">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-copper-400" aria-hidden />
                <p className="font-body text-[11px] uppercase tracking-[0.4em] text-copper-500">
                  La fundadora
                </p>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-3">
                Dra. Nicole Loeff
              </h2>
              <p className="font-display text-lg sm:text-xl italic text-copper-500 mb-6">
                Cirujana Dentista, Magíster en Periodoncia e Implantología, Especialista en Estética Dental
              </p>

              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Fundadora y directora de la clínica, ha dedicado su carrera a una odontología
                de excelencia: cada caso se planifica con precisión milimétrica y un trato
                cercano y personalizado, el sello de su clínica boutique.
              </p>

              {/* Credenciales */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 w-10 h-10 shrink-0 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <GraduationCap size={20} className="text-emerald-500" />
                  </span>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-dark">Cirujana Dentista, Universidad de Chile</span>, titulada
                    con distinción máxima el año 2001.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 w-10 h-10 shrink-0 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <Award size={20} className="text-emerald-500" />
                  </span>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-dark">Magíster en Periodoncia e Implantología</span>, Universidad
                    Andrés Bello, titulada con distinción máxima el año 2007.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 w-10 h-10 shrink-0 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <Sparkles size={20} className="text-copper-400" />
                  </span>
                  <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-gray-dark">Experta en estética dental</span>: carillas de alta precisión,
                    diseño de sonrisa y manejo integral de la estética, con resultados naturales
                    y duraderos.
                  </p>
                </li>
              </ul>

              <Link
                to="/equipo"
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-copper-400 hover:text-copper-500 transition-colors group"
              >
                Conocer a todo el equipo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
