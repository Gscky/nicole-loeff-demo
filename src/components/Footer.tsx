import { CLINIC } from '../lib/constants';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/casos', label: 'Casos de Exito' },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-emerald-900 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand — same logo as header */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/images/brand/logo.png"
                alt={CLINIC.fullName}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <p className="font-display text-lg font-semibold text-white">{CLINIC.name}</p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-emerald-300">
                  {CLINIC.subtitle}
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Navegacion
            </h4>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block font-body text-sm text-white/50 hover:text-copper-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${CLINIC.phoneRaw}`}
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-copper-400 transition-colors"
              >
                <Phone size={14} />
                {CLINIC.phone}
              </a>
              <a
                href={`tel:${CLINIC.phoneLandlineRaw}`}
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-copper-400 transition-colors"
              >
                <Phone size={14} />
                {CLINIC.phoneLandline}
              </a>
              <a
                href={`mailto:${CLINIC.email}`}
                className="flex items-center gap-2 font-body text-sm text-white/50 hover:text-copper-400 transition-colors"
              >
                <Mail size={14} />
                {CLINIC.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-white/30 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-white/50 leading-relaxed">
                  {CLINIC.address}<br />
                  {CLINIC.commune}, {CLINIC.city}
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 tracking-wide">
              Siguenos
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-copper-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={CLINIC.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-copper-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={CLINIC.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-copper-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; 2026 {CLINIC.fullName}. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-white/20">
            Desarrollado por Evolution.AI
          </p>
        </div>
      </div>
    </footer>
  );
}
