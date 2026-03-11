import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { BeforeAfter } from './sections/BeforeAfter';
import { Testimonials } from './sections/Testimonials';
import { Team } from './sections/Team';
import { Technology } from './sections/Technology';
import { Location } from './sections/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Team />
      <Technology />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
