import { CLINIC } from '../lib/constants';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/images/brand/logo.png"
              alt={CLINIC.name}
              className="h-10 w-auto mb-4 brightness-200"
            />
            <p className="font-display text-lg text-white mb-1">{CLINIC.name}</p>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-gold-400/70">
              {CLINIC.subtitle}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-gold-400 transition-colors"
              >
                <Phone size={14} />
                {CLINIC.phone}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-gold-400 transition-colors"
              >
                <Mail size={14} />
                {CLINIC.email}
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-gold-400 transition-colors"
              >
                <Instagram size={14} />
                {CLINIC.instagramHandle}
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Ubicación
            </h4>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-gold-400/50 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm text-white/50 leading-relaxed">
                {CLINIC.address}
                <br />
                {CLINIC.commune}
                <br />
                {CLINIC.city}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Especialidades
            </h4>
            <div className="space-y-2">
              {['Rehabilitación Oral', 'Implantología', 'Ortodoncia', 'Estética Dental', 'Endodoncia'].map((s) => (
                <a
                  key={s}
                  href="#especialidades"
                  className="block font-body text-sm text-white/40 hover:text-gold-400 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © {year} {CLINIC.name} — {CLINIC.subtitle}. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/20">
            Diseñado con ♥ por Evolution.AI
          </p>
        </div>
      </div>
    </footer>
  );
}
