import { ScrollReveal } from '../components/ScrollReveal';
import { CLINIC } from '../lib/constants';
import { Calendar } from 'lucide-react';

export function CtaContact() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-emerald-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-copper-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <ScrollReveal>
          <Calendar size={32} className="sm:hidden text-copper-400 mx-auto mb-4" />
          <Calendar size={40} className="hidden sm:block text-copper-400 mx-auto mb-6" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Agenda tu hora hoy
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Tu sonrisa merece la mejor atención. Reserva tu cita y déjanos cuidar de ti
            con la excelencia y calidez que nos caracteriza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href={CLINIC.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-copper-400 px-8 sm:px-10 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-xl hover:shadow-copper-400/30 hover:scale-[1.02]"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 px-8 sm:px-10 py-3.5 sm:py-4 font-body text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            >
              Llamar ahora
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
