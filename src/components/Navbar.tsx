import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC } from '../lib/constants';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/equipo', label: 'Equipo' },
  { href: '/casos', label: 'Casos de Exito' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const showTransparent = isHome && !scrolled;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(0,0,0,0.08)]'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/brand/logo.png"
                alt={CLINIC.fullName}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <p className={`font-display text-lg font-semibold tracking-wide transition-colors duration-500 ${
                  showTransparent ? 'text-white' : 'text-gray-dark'
                }`}>
                  {CLINIC.name}
                </p>
                <p className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-500 ${
                  showTransparent ? 'text-emerald-200' : 'text-emerald-500'
                }`}>
                  {CLINIC.subtitle}
                </p>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-300 hover:text-copper-400 ${
                    location.pathname === link.href
                      ? 'text-copper-400'
                      : showTransparent ? 'text-white/90' : 'text-gray-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contacto"
                onClick={() => {
                  if (isHome) {
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="rounded-full bg-copper-400 px-6 py-2.5 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-lg hover:shadow-copper-400/25"
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${
                showTransparent ? 'text-white' : 'text-gray-dark'
              }`}
              aria-label="Menu de navegacion"
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-5 pb-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-display text-2xl transition-colors ${
                    location.pathname === link.href
                      ? 'text-copper-400'
                      : 'text-gray-dark hover:text-copper-400'
                  }`}
                >
                  {link.label}
                </Link>
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
