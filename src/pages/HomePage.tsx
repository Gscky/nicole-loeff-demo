import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { AboutPreview } from '../sections/AboutPreview';
import { BeforeAfter } from '../sections/BeforeAfter';
import { Testimonials } from '../sections/Testimonials';
import { Technology } from '../sections/Technology';
import { CtaContact } from '../sections/CtaContact';
import { Location } from '../sections/Location';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <BeforeAfter />
      <Testimonials />
      <Technology />
      <CtaContact />
      <Location />
    </>
  );
}
