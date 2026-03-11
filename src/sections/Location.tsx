import { ScrollReveal } from '../components/ScrollReveal';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { CLINIC } from '../lib/constants';

export function Location() {
  return (
    <section id="contacto" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Encuéntranos
            </h2>
            <div className="mx-auto accent-divider" />
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Map */}
          <ScrollReveal className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[280px] sm:h-[350px] lg:h-[400px] shadow-md">
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
            </div>
          </ScrollReveal>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-gray-light p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">Dirección</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {CLINIC.address}
                      <br />
                      {CLINIC.commune}, {CLINIC.city}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl bg-gray-light p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">Teléfono</h3>
                    <p className="font-body text-sm text-gray-500">
                      {CLINIC.phone}
                    </p>
                    <p className="font-body text-sm text-gray-500">
                      {CLINIC.phoneLandline}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="rounded-2xl bg-gray-light p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">Email</h3>
                    <p className="font-body text-sm text-gray-500">
                      {CLINIC.email}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="rounded-2xl bg-gray-light p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">Horarios</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {CLINIC.hours.weekdays}
                      <br />
                      {CLINIC.hours.saturday}
                      <br />
                      {CLINIC.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
