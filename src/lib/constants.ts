export const CLINIC = {
  name: 'Dra. Nicole Loeff',
  subtitle: 'Clínica Dental',
  fullName: 'Dra. Nicole Loeff - Clínica Dental',
  legalName: 'Servicios Odontológicos Nicole Loeff Mirelmann E.I.R.L.',
  tagline: 'Tu sonrisa en las mejores manos',
  description: 'Odontología de excelencia con atención personalizada',
  mission: 'Nuestro objetivo es prestar un servicio odontológico de la más alta calidad, lo más cómodamente posible, y con un costo razonable para usted.',
  phone: '+56 9 4420 5077',
  phoneLandline: '+56 2 3224 3732',
  phoneRaw: '56944205077',
  phoneLandlineRaw: '56232243732',
  email: 'contacto@nicoleloeff.cl',
  address: 'Calle Estoril 200, Oficina 929-930',
  commune: 'Las Condes',
  city: 'Santiago, Chile',
  instagram: 'https://www.instagram.com/clinicanicoleloeff',
  instagramHandle: '@clinicanicoleloeff',
  facebook: 'https://www.facebook.com/dranicoleloeff/',
  linkedin: 'https://www.linkedin.com/in/nicole-loeff-mirelmann-34361a96',
  website: 'https://nicoleloeff.cl',
  whatsappLink: 'https://wa.me/56944205077?text=Hola%20Dra.%20Nicole%2C%20me%20gustar%C3%ADa%20agendar%20una%20hora%20en%20la%20cl%C3%ADnica%20%F0%9F%98%8A',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9!2d-70.5679!3d-33.4053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf1b2ef0e9c1%3A0x4b0fb1c3b2e4f5a6!2sEstoril%20200%2C%20Las%20Condes%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1',
  googleMapsLink: 'https://www.google.com/maps/place/Estoril+200,+Las+Condes,+Regi%C3%B3n+Metropolitana,+Chile',
  hours: {
    weekdays: 'Lunes a Viernes: 9:00 - 19:00',
    saturday: 'Sábados: 9:00 - 14:00',
    sunday: 'Domingos: Cerrado',
  },
} as const;

export const SPECIALTIES = [
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Oral',
    description: 'Restauramos la función, estética y armonía de tu sonrisa mediante prótesis dentales fijas, removibles y sobre implantes con las técnicas más modernas.',
    icon: 'refresh',
  },
  {
    id: 'implantologia',
    title: 'Implantología',
    description: 'Implantes de titanio biocompatibles que reemplazan las raíces naturales de los dientes perdidos, brindando una solución permanente con resultados estéticos superiores.',
    icon: 'implant',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'Movimientos suaves y precisos que corrigen la posición dental, mejorando la oclusión y alineación para una sonrisa perfecta. Opciones fijas, removibles y funcionales.',
    icon: 'aligners',
  },
  {
    id: 'estetica',
    title: 'Estética Dental',
    description: 'Blanqueamiento profesional, carillas estéticas de resina y diseño de sonrisa. Procedimientos seguros y rápidos para una sonrisa luminosa y natural.',
    icon: 'sparkle',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'Tratamiento de conducto radicular que salva dientes naturales eliminando la pulpa infectada. Procedimiento con anestesia local, seguro y con 90% de éxito.',
    icon: 'microscope',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'Cuidado dental especializado para niños y recién nacidos. Diagnóstico, selladores, tratamiento de caries, manejo de traumatismos y educación en higiene oral.',
    icon: 'baby',
  },
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description: 'Tratamiento de enfermedades de las encías que afectan el soporte de tus dientes. Prevención y control de placa dental para mantener una base sólida y saludable.',
    icon: 'shield',
  },
  {
    id: 'bruxismo',
    title: 'Tratamiento para Bruxismo',
    description: 'Soluciones para el apretamiento y rechinamiento inconsciente de los dientes. Férulas de descarga nocturna y corrección oclusal para proteger tu estructura dental.',
    icon: 'lock',
  },
] as const;

export const REVIEWS = [
  {
    name: 'María González',
    text: 'Excelente atención. La Dra. Nicole me hizo una rehabilitación oral completa y quedé encantada con los resultados. Se nota la calidad de los materiales y el profesionalismo.',
    stars: 5,
  },
  {
    name: 'Carlos Ruiz',
    text: 'Muy profesional. Me pusieron implantes dentales y el procedimiento fue impecable. La recuperación fue muy rápida y los resultados son naturales.',
    stars: 5,
  },
  {
    name: 'Valentina Mora',
    text: 'El blanqueamiento dental superó mis expectativas. La clínica es moderna y acogedora, se siente la confianza desde que entras. Recomendada al 100%.',
    stars: 5,
  },
  {
    name: 'Andrés Pérez',
    text: 'La ortodoncia cambió mi sonrisa por completo. Profesionalismo y calidez en cada visita. Sin duda la mejor experiencia dental que he tenido.',
    stars: 5,
  },
  {
    name: 'Sofía López',
    text: 'Las carillas estéticas quedaron perfectas, se ven completamente naturales. La Dra. Nicole tiene un ojo increíble para el diseño de sonrisa.',
    stars: 5,
  },
  {
    name: 'Fernando Torres',
    text: 'Clínica de primer nivel en Las Condes. Equipos de última generación y un trato muy humano. Tuve una endodoncia y no sentí absolutamente nada.',
    stars: 5,
  },
] as const;

export const GOOGLE_RATING = 4.9;

export const TEAM = [
  {
    name: 'Dra. Nicole Loeff Mirelmann',
    role: 'Directora Clínica',
    specialty: 'Periodoncia e Implantología',
    bio: 'Cirujano Dentista, Universidad de Chile (1996) con distinción máxima. Magíster en Periodoncia e Implantología, Universidad Andrés Bello (2005) con distinción Magna Cum Laude.',
    image: 'https://nicoleloeff.cl/wp-content/uploads/2015/04/Z9A3778retocada-2-897x1024.jpg',
  },
  {
    name: 'Dra. Catalina Valdivieso Lolic',
    role: 'Endodoncista',
    specialty: 'Endodoncia',
    bio: 'Cirujano Dentista, Magíster en Endodoncia, Universidad de Los Andes. Jefe del Servicio Dental del Centro Médico Militar Rosa O\'Higgins y docente universitaria.',
    image: 'https://nicoleloeff.cl/wp-content/uploads/2015/04/Catalina-Valdivieso-1-838x1024.jpg',
  },
  {
    name: 'Dra. Nicole Dattas Zapata',
    role: 'Rehabilitadora Oral',
    specialty: 'Rehabilitación Oral',
    bio: 'Cirujano Dentista, Universidad de Chile (1996). Magíster en Rehabilitación Oral (2004). Especialista en restauraciones de alta complejidad y prótesis dentales.',
    image: 'https://nicoleloeff.cl/wp-content/uploads/2015/04/nicole-dattas-225x300.jpg',
  },
  {
    name: 'Dra. Karina Moreno Reyes',
    role: 'Ortodoncista',
    specialty: 'Ortodoncia y Ortopedia Maxilar',
    bio: 'Magíster en Ortodoncia y Ortopedia Maxilar. Especialista en FLOW JAC SYSTEM, la única ortodoncia sin brackets disponible en Santiago.',
    image: 'https://nicoleloeff.cl/wp-content/uploads/2020/07/Lizbeth-Moreno-749x1024.jpg',
  },
] as const;

export const CLINIC_IMAGES = [
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4014-1024x683.jpg', alt: 'Recepción de la clínica dental' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4084-1024x683.jpg', alt: 'Sala de espera moderna' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4300-1024x683.jpg', alt: 'Box de atención dental' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4305-1024x683.jpg', alt: 'Equipamiento dental moderno' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4316-1024x683.jpg', alt: 'Sala de tratamientos' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/Z9A4322-1024x683.jpg', alt: 'Detalle del equipamiento' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/sala1.jpg', alt: 'Sala de procedimientos 1' },
  { src: 'https://nicoleloeff.cl/wp-content/uploads/2016/03/sala2.jpg', alt: 'Sala de procedimientos 2' },
] as const;

export const BEFORE_AFTER_CASES = [
  {
    id: 1,
    title: 'Restauración con Resina Compuesta',
    description: 'Reparación de desgaste y fracturas en dientes anteriores superiores con resinas de alta estética.',
    image: '/images/cases/caso-1.jpg',
  },
  {
    id: 2,
    title: 'Reconstrucción de Dientes Fracturados',
    description: 'Rehabilitación de incisivos dañados y fracturados, devolviendo forma y función natural.',
    image: '/images/cases/caso-2.jpg',
  },
  {
    id: 3,
    title: 'Cierre de Diastema',
    description: 'Eliminación del espacio entre dientes frontales para una sonrisa más armónica.',
    image: '/images/cases/caso-3.jpg',
  },
  {
    id: 4,
    title: 'Carillas Estéticas',
    description: 'Corrección de irregularidades y alineación con carillas de resina compuesta.',
    image: '/images/cases/caso-4.jpg',
  },
  {
    id: 5,
    title: 'Diseño de Sonrisa',
    description: 'Armonización dental con carillas para una sonrisa equilibrada y natural.',
    image: '/images/cases/caso-5.jpg',
  },
  {
    id: 6,
    title: 'Blanqueamiento y Carillas',
    description: 'Blanqueamiento profesional combinado con carillas estéticas para un resultado impecable.',
    image: '/images/cases/caso-6.jpg',
  },
  {
    id: 7,
    title: 'Coronas de Porcelana',
    description: 'Restauración de piezas laterales con coronas de porcelana de alta estética.',
    image: '/images/cases/caso-7.jpeg',
  },
  {
    id: 8,
    title: 'Implante Dental',
    description: 'Reemplazo de pieza perdida con implante y cierre de espacios interdentales.',
    image: '/images/cases/caso-8.jpeg',
  },
  {
    id: 9,
    title: 'Rehabilitación Oral Completa',
    description: 'Transformación integral de la sonrisa con rehabilitación de múltiples piezas.',
    image: '/images/cases/caso-9.jpeg',
  },
  {
    id: 10,
    title: 'Rehabilitación Inferior',
    description: 'Reconstrucción completa del arco inferior con severo desgaste y sarro.',
    image: '/images/cases/caso-10.jpeg',
  },
  {
    id: 11,
    title: 'Carillas Inferiores',
    description: 'Corrección de irregularidades en dientes inferiores con carillas de resina.',
    image: '/images/cases/caso-11.jpeg',
  },
  {
    id: 12,
    title: 'Ortodoncia y Alineación',
    description: 'Corrección de apiñamiento dental para una sonrisa equilibrada y funcional.',
    image: '/images/cases/caso-12.jpeg',
  },
  {
    id: 13,
    title: 'Rehabilitación Estética Masculina',
    description: 'Restauración completa de la sonrisa con carillas y coronas de aspecto natural.',
    image: '/images/cases/caso-13.jpeg',
  },
  {
    id: 14,
    title: 'Reconstrucción Superior Completa',
    description: 'Rehabilitación integral del arco superior con coronas y carillas de porcelana.',
    image: '/images/cases/caso-14.jpeg',
  },
  {
    id: 15,
    title: 'Carillas Laterales',
    description: 'Mejora de la vista lateral de la sonrisa, corrigiendo prominencia y alineación.',
    image: '/images/cases/caso-15.jpeg',
  },
  {
    id: 16,
    title: 'Rehabilitación Periodontal',
    description: 'Tratamiento periodontal completo con rehabilitación estética en caso severo.',
    image: '/images/cases/caso-16.jpeg',
  },
  {
    id: 17,
    title: 'Diseño de Sonrisa Personalizado',
    description: 'Carillas estéticas para lograr armonía, simetría y naturalidad en la sonrisa.',
    image: '/images/cases/caso-17.jpeg',
  },
  {
    id: 18,
    title: 'Corrección de Apiñamiento',
    description: 'Resolución de apiñamiento dental con carillas para una sonrisa alineada.',
    image: '/images/cases/caso-18.jpeg',
  },
  {
    id: 19,
    title: 'Blanqueamiento Integral',
    description: 'Transformación completa con blanqueamiento profesional y carillas estéticas.',
    image: '/images/cases/caso-19.jpeg',
  },
] as const;

export const CLINIC_PHOTOS = [
  { src: '/images/clinic/salon-verde.png', alt: 'Box de atención dental equipado' },
  { src: '/images/clinic/recepcion.png', alt: 'Recepción de la clínica' },
  { src: '/images/clinic/esterilizacion.png', alt: 'Área de esterilización' },
  { src: '/images/clinic/dra-nicole-casos.png', alt: 'Dra. Nicole Loeff con casos de éxito' },
  { src: '/images/clinic/salon-naranja.png', alt: 'Sala de tratamientos moderna' },
  { src: '/images/clinic/dra-paciente.png', alt: 'Atención dental profesional' },
  { src: '/images/cases/dentista-trabajando.jpg', alt: 'Procedimiento de blanqueamiento dental' },
] as const;
