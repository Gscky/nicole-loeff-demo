export const CLINIC = {
  name: 'Dra. Nicole Loeff',
  subtitle: 'Clínica Dental',
  tagline: 'Odontología de excelencia con la más alta calidad',
  description: 'Tecnología de última generación y materiales premium para una sonrisa que refleja lo mejor de usted.',
  phone: '+56 9 4420 5077',
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
    name: 'Carolina M.',
    stars: 5,
    text: 'Excelente profesional. Me realizó un tratamiento de carillas y quedé impresionada con los resultados. El trato es personalizado y la clínica es hermosa.',
  },
  {
    name: 'Francisco R.',
    stars: 5,
    text: 'La mejor dentista que he visitado. Tecnología de primer nivel y materiales de alta calidad. Se nota la diferencia.',
  },
  {
    name: 'Valentina S.',
    stars: 5,
    text: 'Llevé a mis hijos y la experiencia fue increíble. La Dra. Nicole tiene una paciencia y dedicación únicas. 100% recomendada.',
  },
  {
    name: 'Rodrigo L.',
    stars: 5,
    text: 'Me hice implantes y el resultado es perfecto. Muy profesional, explica todo el proceso con detalle. La clínica es moderna y acogedora.',
  },
  {
    name: 'Andrea P.',
    stars: 5,
    text: 'Después de años buscando una dentista de confianza, encontré a la Dra. Loeff. Equipos de última generación y un trato humano excepcional.',
  },
  {
    name: 'Martín G.',
    stars: 5,
    text: 'El blanqueamiento quedó espectacular. El ambiente de la clínica transmite tranquilidad y profesionalismo desde que entras.',
  },
] as const;
