import { ScrollReveal } from '../components/ScrollReveal';

/*
  Lista abierta: sumar una foto es agregar una línea acá, sin tocar el layout.
  Antes esta sección era una grilla de huecos fijos y cada foto nueva obligaba a
  rediseñarla; ahora entran todas las que haya.
*/
const PATIENT_PHOTOS = [
  { src: '/images/patients/paciente-2.jpeg', alt: 'Dra. Nicole con pacientes jóvenes sonriendo' },
  { src: '/images/odontopediatria/nino-2.jpg', alt: 'Dos hermanos en el sillón dental tras su control' },
  { src: '/images/patients/paciente-5-web.jpg', alt: 'Dra. Nicole Loeff con una paciente niña feliz tras su control' },
  { src: '/images/odontopediatria/nino-1.jpg', alt: 'Paciente pequeña vestida de dentista en la clínica' },
  { src: '/images/patients/paciente-3.jpeg', alt: 'Dra. Nicole con paciente niño feliz' },
  { src: '/images/odontopediatria/nino-3.jpg', alt: 'Mamá e hija en el sillón dental' },
  { src: '/images/patients/paciente-pediatria.jpg', alt: 'Paciente de odontopediatría mostrando el diente que se le cayó' },
  { src: '/images/odontopediatria/nino-4.jpg', alt: 'Dra. Nicole con una paciente adolescente' },
];

function Foto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative mx-2 h-52 w-52 shrink-0 overflow-hidden rounded-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72">
      <img
        src={src}
        alt={alt}
        /* eager a propósito: el carrusel nunca se detiene, así que una foto que
           carga tarde deja un hueco blanco a la vista. Son 8 fotos y las repetidas
           salen de caché, así que el costo real es el mismo. */
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export function HappyPatients() {
  return (
    <section id="pacientes" className="py-24 lg:py-32 bg-emerald-50/40">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
      </div>

      {/* Carrusel infinito — a ancho completo, sin el margen del contenedor.
          La lista va duplicada: el track se desplaza -50% y vuelve al punto de partida. */}
      <div className="patients-marquee">
        <div className="patients-marquee-track">
          {[...PATIENT_PHOTOS, ...PATIENT_PHOTOS].map((foto, i) => (
            <Foto key={`${foto.src}-${i}`} src={foto.src} alt={i < PATIENT_PHOTOS.length ? foto.alt : ''} />
          ))}
        </div>
      </div>

      {/* Description text */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
