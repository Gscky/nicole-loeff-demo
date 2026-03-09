import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Clock, Phone, MessageCircle, Instagram } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function Location() {
  return (
    <section id="ubicacion" className="relative py-28 lg:py-36 bg-warm-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.25em] uppercase text-gold-600 mb-4">
              Encuéntrenos
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-light text-forest-900 leading-tight mb-6">
              Visítenos en
              <span className="block font-normal italic text-gold-600">Las Condes</span>
            </h2>
            <div className="mx-auto gold-divider" />
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Map */}
          <ScrollReveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl bg-warm-200 h-[400px] shadow-lg">
              <iframe
                src={CLINIC.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Clínica Dental Nicole Loeff"
                className="absolute inset-0"
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center bg-warm-100">
                <a
                  href={CLINIC.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-forest-700 hover:text-gold-600 transition-colors font-body"
                >
                  <MapPin size={20} />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-warm-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                    <MapPin size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest-800 mb-1">Dirección</h3>
                    <p className="font-body text-sm text-warm-600 leading-relaxed">
                      {CLINIC.address}
                      <br />
                      {CLINIC.commune}, {CLINIC.city}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-warm-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                    <Clock size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest-800 mb-1">Horario</h3>
                    <p className="font-body text-sm text-warm-600 leading-relaxed">
                      Atención con hora previa
                      <br />
                      Agenda tu cita por WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-warm-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-forest-800 flex items-center justify-center">
                    <Phone size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest-800 mb-1">Contacto</h3>
                    <p className="font-body text-sm text-warm-600">
                      {CLINIC.phone}
                    </p>
                    <p className="font-body text-sm text-warm-500">
                      {CLINIC.email}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.4}>
              <div className="space-y-3">
                <a
                  href={CLINIC.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-forest-700 px-6 py-4 font-body text-sm font-semibold text-white hover:bg-forest-600 transition-all duration-300 hover:shadow-lg"
                >
                  <MessageCircle size={16} />
                  Agendar por WhatsApp
                </a>
                <a
                  href={CLINIC.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-warm-300 px-6 py-4 font-body text-sm font-medium text-warm-700 hover:border-gold-400 hover:text-gold-600 transition-colors"
                >
                  <Instagram size={16} />
                  {CLINIC.instagramHandle}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
