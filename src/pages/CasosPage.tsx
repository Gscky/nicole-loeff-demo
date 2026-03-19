import { ScrollReveal } from '../components/ScrollReveal';
import { BEFORE_AFTER_CASES, CLINIC } from '../lib/constants';

export function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/cases/dentista-trabajando.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-emerald-900/95" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
              Algunos de Nuestros Casos de Éxito
            </h1>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed">
              Resultados reales que demuestran nuestro compromiso con la excelencia.
              Cada sonrisa transformada es nuestra mayor satisfacción.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* All Cases */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {BEFORE_AFTER_CASES.map((item) => (
              <ScrollReveal key={item.id}>
                <div className="group rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 hover:shadow-xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} - Antes y Después`}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5 sm:gap-2">
                      <span className="bg-gray-dark/70 backdrop-blur-sm text-white text-[10px] sm:text-xs font-body font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                        Antes
                      </span>
                      <span className="bg-emerald-500/80 backdrop-blur-sm text-white text-[10px] sm:text-xs font-body font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                        Después
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 lg:p-6">
                    <h3 className="font-display text-base sm:text-lg lg:text-xl font-semibold text-gray-dark mb-1.5 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed mb-3 sm:mb-4">
                      {item.description}
                    </p>
                    <a
                      href={CLINIC.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-body text-xs sm:text-sm font-semibold text-copper-400 hover:text-copper-500 transition-colors"
                    >
                      Consultar por este tratamiento
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-copper-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Tu sonrisa puede ser el próximo caso de éxito
            </h2>
            <p className="font-body text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto">
              Agenda una evaluación y descubre cómo podemos transformar tu sonrisa.
            </p>
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-copper-400 px-8 sm:px-10 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-xl hover:shadow-copper-400/30 hover:scale-[1.02]"
            >
              Agendar evaluación
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
