import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import EsteticaClinica from '../sections/EsteticaClinica';
import { AboutPreview } from '../sections/AboutPreview';
import { BeforeAfter } from '../sections/BeforeAfter';
import { HappyPatients } from '../sections/HappyPatients';
import { Testimonials } from '../sections/Testimonials';
import { Technology } from '../sections/Technology';
import { CtaContact } from '../sections/CtaContact';
import { Location } from '../sections/Location';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <EsteticaClinica />
      <AboutPreview />
      <BeforeAfter />
      <HappyPatients />
      <Testimonials />
      <Technology />
      <CtaContact />
      <Location />
    </>
  );
}
