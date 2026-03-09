import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Specialties } from './sections/Specialties';
import { Gallery } from './sections/Gallery';
import { Technology } from './sections/Technology';
import { Testimonials } from './sections/Testimonials';
import { Location } from './sections/Location';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Gallery />
      <Technology />
      <Testimonials />
      <CTA />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
