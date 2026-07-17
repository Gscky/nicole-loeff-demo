import { Hero } from '../sections/Hero';
import { Fundadora } from '../sections/Fundadora';
import EspecialidadesCarousel from '../sections/EspecialidadesCarousel';
import EsteticaClinica from '../sections/EsteticaClinica';
import { AboutPreview } from '../sections/AboutPreview';
import { BeforeAfter } from '../sections/BeforeAfter';
import { HappyPatients } from '../sections/HappyPatients';
import { Testimonials } from '../sections/Testimonials';
import { Technology } from '../sections/Technology';
import { CtaContact } from '../sections/CtaContact';
import { Location } from '../sections/Location';
import { VideoSection } from '../sections/VideoSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Fundadora />
      <EspecialidadesCarousel />
      <EsteticaClinica />
      <AboutPreview />
      <BeforeAfter />
      <HappyPatients />
      <Testimonials />
      <Technology />
      <CtaContact />
      <Location />
      <VideoSection />
    </>
  );
}
