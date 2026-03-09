export const CLINIC = {
  name: 'Dra. Nicole Loeff',
  subtitle: 'Clínica Dental',
  tagline: 'Odontología de excelencia con la más alta calidad',
  description: 'Tecnología de última generación y materiales premium para una sonrisa que refleja lo mejor de usted.',
  phone: '+56 9 4420 5077',
  phoneLandline: '(2) 3224 3732',
  phoneRaw: '56944205077',
  email: 'contacto@nicoleloeff.cl',
  address: 'Calle Estoril 200, Oficina 929-930',
  commune: 'Las Condes',
  city: 'Santiago, Chile',
  instagram: 'https://www.instagram.com/clinicanicoleloeff',
  instagramHandle: '@clinicanicoleloeff',
  website: 'https://nicoleloeff.cl',
  whatsappLink: 'https://wa.me/56944205077?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20hora',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.0!2d-70.57!3d-33.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI0JzAwLjAiUyA3MMKwMzQnMDAuMCJX!5e0!3m2!1ses!2scl!4v1',
  googleMapsLink: 'https://www.google.com/maps/search/Estoril+200+oficina+929+Las+Condes',
} as const;

export const SPECIALTIES = [
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Oral',
    description: 'Devolvemos la función, estética y armonía de su sonrisa mediante prótesis y técnicas de última generación.',
    image: '/images/specialties/rehabilitacion-oral.jpg',
    icon: '🦷',
  },
  {
    id: 'implantologia',
    title: 'Implantología',
    description: 'Implantes dentales de titanio de la más alta calidad para una solución permanente y natural.',
    image: '/images/specialties/implantologia.jpg',
    icon: '⚙️',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Movimientos suaves y precisos para una sonrisa perfectamente alineada.',
    image: '/images/specialties/ortodoncia.jpg',
    icon: '✨',
  },
  {
    id: 'estetica',
    title: 'Estética Dental',
    description: 'Blanqueamiento, carillas y diseño de sonrisa para resultados que transforman.',
    image: '/images/specialties/blanqueamiento.jpg',
    icon: '💎',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'Tratamiento de conducto con tecnología avanzada, seguro y sin molestias.',
    image: '/images/specialties/endodoncia.jpg',
    icon: '🔬',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado para los más pequeños, en un ambiente cálido y seguro.',
    image: '/images/specialties/odontopediatria.jpg',
    icon: '👶',
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description: 'Salud de las encías con tratamientos especializados para una base sólida.',
    image: '/images/specialties/periodoncia.jpg',
    icon: '🩺',
  },
  {
    id: 'bruxismo',
    title: 'Tratamiento Bruxismo',
    description: 'Soluciones efectivas para el bruxismo y protección de su estructura dental.',
    image: '/images/specialties/sedacion.jpg',
    icon: '🛡️',
  },
] as const;

export const REVIEWS = [
  {
    name: 'María G.',
    stars: 5,
    text: 'Excelente atención. La Dra. Nicole me hizo una rehabilitación oral completa y quedé encantada con los resultados. Se nota la calidad de los materiales.',
  },
  {
    name: 'Carlos R.',
    stars: 5,
    text: 'Muy profesional. Me trataron un problema de bruxismo que llevaba años sin resolver. La tecnología que tienen es de otro nivel.',
  },
  {
    name: 'Valentina M.',
    stars: 5,
    text: 'Llevé a mi hijo de 5 años y lo trataron con mucha paciencia. La clínica es moderna y acogedora, se siente la confianza desde que entras.',
  },
  {
    name: 'Andrés P.',
    stars: 5,
    text: 'Me puse implantes con la Dra. Loeff. El procedimiento fue impecable y la recuperación muy rápida. Resultados naturales y perfectos.',
  },
  {
    name: 'Sofía L.',
    stars: 5,
    text: 'El blanqueamiento dental superó mis expectativas. Sonrío con mucha más confianza ahora. Recomendada al 100%.',
  },
  {
    name: 'Fernando T.',
    stars: 5,
    text: 'Clínica de primer nivel en Las Condes. Equipos de última generación y un trato muy humano. Sin duda la mejor experiencia dental que he tenido.',
  },
  {
    name: 'Camila S.',
    stars: 5,
    text: 'La ortodoncia que me hizo la Dra. Nicole cambió mi sonrisa por completo. Profesionalismo y calidez en cada visita.',
  },
  {
    name: 'Roberto D.',
    stars: 5,
    text: 'Tuve una endodoncia y no sentí absolutamente nada. Muy buena mano y excelente tecnología. Altamente recomendable.',
  },
] as const;

export const GOOGLE_RATING = 4.8;
