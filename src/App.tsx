import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { useEffect, lazy, Suspense } from 'react';

// Páginas no-home en carga diferida (code-splitting): el bundle inicial del home
// no las incluye. Son named exports → se adaptan a `default` para React.lazy.
const ServiciosPage = lazy(() => import('./pages/ServiciosPage').then((m) => ({ default: m.ServiciosPage })));
const EquipoPage = lazy(() => import('./pages/EquipoPage').then((m) => ({ default: m.EquipoPage })));
const CasosPage = lazy(() => import('./pages/CasosPage').then((m) => ({ default: m.CasosPage })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: 'easeInOut' as const },
};

export default function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} {...pageTransition}>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/servicios" element={<ServiciosPage />} />
              <Route path="/equipo" element={<EquipoPage />} />
              <Route path="/casos" element={<CasosPage />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
