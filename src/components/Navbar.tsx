import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CLINIC } from '../lib/constants';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#tecnologia', label: 'Tecnología' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <img
                src="/images/brand/logo.png"
                alt={CLINIC.fullName}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <p className={`font-display text-lg font-semibold tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-gray-dark' : 'text-white'
                }`}>
                  {CLINIC.name}
                </p>
                <p className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-500 ${
                  scrolled ? 'text-emerald-500' : 'text-emerald-200'
                }`}>
                  {CLINIC.subtitle}
                </p>
              </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-300 hover:text-copper-400 ${
                    scrolled ? 'text-gray-dark' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CLINIC.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-copper-400 px-6 py-2.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-lg hover:shadow-copper-400/25"
              >
                Agenda tu hora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-gray-dark' : 'text-white'
              }`}
              aria-label="Menú de navegación"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl text-gray-dark hover:text-copper-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4 pt-6 border-t border-gray-100">
                <a
                  href={CLINIC.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-copper-400 px-6 py-3.5 font-body text-base font-semibold text-white"
                >
                  Agenda tu hora
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
