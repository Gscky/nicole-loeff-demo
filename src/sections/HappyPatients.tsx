import { ScrollReveal } from '../components/ScrollReveal';

const PATIENT_PHOTOS = [
  { src: '/images/patients/paciente-5-web.jpg', alt: 'Dra. Nicole Loeff con una paciente niña feliz tras su control' },
  { src: '/images/patients/paciente-2.jpeg', alt: 'Dra. Nicole con pacientes jóvenes sonriendo' },
  { src: '/images/patients/paciente-3.jpeg', alt: 'Dra. Nicole con paciente niño feliz' },
];

export function HappyPatients() {
  return (
    <section className="py-24 lg:py-32 bg-emerald-50/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Nuestros Pacientes Felices
            </h2>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base sm:text-lg text-gray-500 leading-relaxed">
              Más de 23 años creando sonrisas y experiencias que marcan la diferencia
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[260px] lg:auto-rows-[300px]">
            {/* Large - spans 2 cols, 2 rows */}
            <div className="col-span-2 row-span-2 group rounded-xl overflow-hidden relative">
              <img
                src={PATIENT_PHOTOS[1].src}
                alt={PATIENT_PHOTOS[1].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Top right */}
            <div className="col-span-2 row-span-1 group rounded-xl overflow-hidden relative">
              <img
                src={PATIENT_PHOTOS[0].src}
                alt={PATIENT_PHOTOS[0].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom right */}
            <div className="col-span-2 row-span-1 group rounded-xl overflow-hidden relative">
              <img
                src={PATIENT_PHOTOS[2].src}
                alt={PATIENT_PHOTOS[2].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </ScrollReveal>

        {/* Description text */}
        <ScrollReveal>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-body text-base sm:text-lg text-gray-500 leading-relaxed">
              En nuestra clínica, cada paciente es parte de nuestra familia. Nos dedicamos a brindar
              una atención cálida, personalizada y libre de estrés. Desde los más pequeños hasta los
              adultos, nuestro compromiso es que cada visita sea una experiencia positiva y que cada
              sonrisa refleje nuestro cuidado.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
