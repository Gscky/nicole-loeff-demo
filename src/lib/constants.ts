export const CLINIC = {
  name: 'Dra. Nicole Loeff',
  subtitle: 'Clínica Dental',
  fullName: 'Dra. Nicole Loeff - Clínica Dental',
  legalName: 'Servicios Odontológicos Nicole Loeff Mirelmann E.I.R.L.',
  tagline: 'Tu sonrisa en las mejores manos',
  description: 'Clínica Boutique con atención personalizada y tecnología de vanguardia',
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
    saturday: 'Sábados: Cerrado',
    sunday: 'Domingos: Cerrado',
  },
} as const;

export const SPECIALTIES = [
  {
    id: 'periodoncia',
    title: 'Periodoncia',
    description: 'La Periodoncia es la especialidad de la odontología dedicada a la prevención, diagnóstico y tratamiento de las enfermedades que afectan las encías y los tejidos de soporte de los dientes, como el hueso y el ligamento periodontal. Las enfermedades más frecuentes son la gingivitis, que corresponde a la inflamación de las encías, y la periodontitis, una infección que, si no se trata a tiempo, puede provocar la pérdida del hueso que sostiene los dientes y comprometer su estabilidad. El objetivo de la periodoncia es mantener las encías y los tejidos de soporte sanos, permitiendo conservar los dientes naturales firmes y saludables durante toda la vida.',
    icon: 'shield',
  },
  {
    id: 'estetica',
    title: 'Estética Dental',
    description: 'La Estética Dental es la especialidad de la odontología que busca realzar la belleza natural de tu sonrisa, logrando resultados armónicos, saludables y acordes a cada persona. A través de tratamientos como el blanqueamiento dental, carillas y restauraciones estéticas, es posible mejorar el color, la forma y la apariencia de los dientes, devolviendo confianza para sonreír con naturalidad, siempre cuidando la salud y la función de tu sonrisa.',
    icon: 'sparkle',
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatría',
    description: 'La Odontopediatría es la especialidad de la odontología dedicada al cuidado de la salud bucal de bebés, niños y adolescentes, acompañando cada etapa de su crecimiento. Comprende los controles preventivos, la aplicación de sellantes y flúor, el tratamiento de caries y el manejo de traumatismos dentales, siempre en un ambiente de confianza donde el niño se sienta seguro y tranquilo. El objetivo de la odontopediatría es formar buenos hábitos de higiene desde temprana edad y lograr que los niños crezcan con una sonrisa sana y una relación positiva con la atención dental.',
    icon: 'baby',
  },
  {
    id: 'implantologia',
    title: 'Implantología',
    description: 'La Implantología es la especialidad de la odontología dedicada a reemplazar los dientes perdidos mediante implantes dentales: pequeños pilares de titanio biocompatible que se integran al hueso y cumplen la función de la raíz natural del diente. Sobre ellos se instala una corona, un puente o una prótesis, devolviendo la capacidad de masticar, hablar y sonreír con total naturalidad. El objetivo de la implantología es entregar una solución fija y duradera que además preserva el hueso y mantiene la armonía de tu sonrisa en el tiempo.',
    icon: 'implant',
  },
  {
    id: 'cirugia-bucal',
    title: 'Cirugía Bucal',
    description: 'La Cirugía Bucal es la especialidad de la odontología dedicada a resolver, mediante procedimientos quirúrgicos, aquellas situaciones que no pueden tratarse de otra forma dentro de la boca. La intervención más frecuente es la extracción de las muelas del juicio, que muchas veces quedan retenidas o mal posicionadas y terminan provocando dolor, inflamación o daño en los dientes vecinos. También comprende la extracción de dientes con daño irreparable, la remoción de restos de raíces y la preparación del hueso antes de instalar un implante. El objetivo de la cirugía bucal es eliminar el origen del problema de manera segura y controlada, acompañándote en la recuperación para devolver la salud y la tranquilidad a tu boca.',
    icon: 'scan',
  },
  {
    id: 'bruxismo',
    title: 'Oclusión y Trastornos Temporomandibulares',
    description: 'La Oclusión y los Trastornos Temporomandibulares corresponden al área de la odontología dedicada a estudiar cómo encajan tus dientes al morder y cómo funciona la articulación que une la mandíbula con el cráneo. Las molestias más frecuentes son el apriete dental o bruxismo, el desgaste de los dientes, los dolores musculares de la cara y el cuello, y los ruidos o la dificultad al abrir la boca. Su tratamiento combina el diagnóstico de la mordida, el uso de férulas de descarga y los ajustes oclusales, con el objetivo de proteger tus dientes, aliviar el dolor y devolver el equilibrio y la comodidad a tu mandíbula.',
    icon: 'lock',
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación Oral',
    description: 'La Rehabilitación Oral es la especialidad de la odontología dedicada a devolver la función, la estética y la armonía de la boca cuando los dientes se han perdido, desgastado o dañado. A través de coronas, puentes, incrustaciones y prótesis fijas, removibles o sobre implantes, se restaura la forma de cada diente y el equilibrio de la mordida, considerando siempre el conjunto de la boca y no una pieza aislada. El objetivo de la rehabilitación oral es que puedas volver a masticar con comodidad y sonreír con seguridad, con un resultado natural y estable en el tiempo.',
    icon: 'refresh',
  },
  {
    id: 'endodoncia',
    title: 'Endodoncia',
    description: 'La Endodoncia es la especialidad de la odontología dedicada al tratamiento del interior del diente, donde se encuentra la pulpa dental, el tejido que contiene los nervios y vasos sanguíneos. Cuando una caries profunda, una fractura o un golpe inflaman o infectan la pulpa aparece el dolor, y se hace necesario el tratamiento de conducto, que consiste en retirar el tejido dañado, desinfectar y sellar los conductos del diente. El objetivo de la endodoncia es eliminar el dolor y la infección conservando el diente natural, evitando su extracción y permitiendo restaurarlo para que siga cumpliendo su función.',
    icon: 'microscope',
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia',
    description: 'La Ortodoncia es la especialidad de la odontología dedicada a corregir la posición de los dientes y la forma en que encajan al morder, mediante fuerzas suaves y controladas que los llevan de manera gradual a su lugar ideal. Existen distintas alternativas según cada caso, como los brackets fijos, los aparatos removibles y los alineadores transparentes, prácticamente invisibles. El objetivo de la ortodoncia va más allá de lo estético: una buena alineación facilita la higiene, distribuye mejor las fuerzas al masticar y ayuda a mantener sanos los dientes y las encías a lo largo del tiempo.',
    icon: 'aligners',
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

export const GOOGLE_RATING = 5.0;

export const TEAM = [
  {
    name: 'Dra. Nicole Loeff Mirelmann',
    shortName: 'Dra. Nicole',
    role: 'Directora Clínica',
    specialty: 'Periodoncia, Implantología y Estética Dental Avanzada',
    bio: 'Cirujana Dentista, Universidad de Chile, titulada con distinción máxima el año 2001. Magíster en Periodoncia e Implantología, Universidad Andrés Bello, titulada con distinción máxima el año 2007. Especialista en Estética Dental.',
    image: '/images/team/nicole.jpg',
  },
  {
    name: 'Dra. Karina Moreno Reyes',
    shortName: 'Dra. Karina',
    role: 'Ortodoncista',
    specialty: 'Ortodoncia y Ortopedia Maxilar',
    bio: 'Cirujano Dentista, Magíster en Ortodoncia y Ortopedia Maxilar. Titulada en Odontología General, Universidad Santo Tomás de Aquino, Colombia (2002). Especialidad en Ortodoncia y Ortopedia Maxilar, Universidad Militar de Colombia (2010); títulos validados en el Ministerio de Salud de Chile (2014). Se desempeña en ortodoncia metálica, ortopedia para niños y ortodoncia invisible (SPARK, INVISALIGN).',
    image: '/images/team/moreno.jpg',
  },
  {
    name: 'Dra. María del Pilar Román San Pedro',
    shortName: 'Dra. Pilar',
    role: 'Endodoncista',
    specialty: 'Endodoncia',
    bio: 'Cirujano Dentista, Universidad de Chile (1989). Especialista en Endodoncia, Universidad Mayor (2010). 18 años en el Servicio de Sanidad Dental de Carabineros de Chile, acogida a retiro con el grado de Coronel (2021). Desde 2010 ejerce en el Hospital Luis Calvo Mackenna. Miembro de la Sociedad de Endodoncia de Chile.',
    image: '/images/team/pilar.jpg',
  },
  {
    name: 'Dr. Álvaro Martínez Conget',
    shortName: 'Dr. Álvaro',
    role: 'Implantología y Rehabilitación Oral',
    specialty: 'Cirugía de Implantes y Rehabilitación',
    bio: 'Cirujano Dentista, Universidad de Chile (1999). Perfeccionamiento en Cirugía Oral en el HUAP, ex Posta Central (2001), y en Cirugía de Implantes y Rehabilitación, Universidad Finis Terrae (2004). Más de 27 años de atención odontológica y 22 años de experiencia en implantología y cirugía bucal, asegurando el alto estándar de atención que caracteriza a la clínica de la Dra. Nicole Loeff.',
    image: '/images/team/alvaro.jpg',
  },
  {
    name: 'Silvia Loyola',
    shortName: 'Silvia',
    role: 'Asistente',
    specialty: 'Asistente',
    bio: '',
    image: '/images/team/silvia.jpg',
  },
  {
    name: 'Catalina Pino',
    shortName: 'Catalina',
    role: 'Asistente',
    specialty: 'Asistente',
    bio: '',
    image: '/images/team/cata.jpg',
  },
  {
    name: 'Javiera González',
    shortName: 'Javiera',
    role: 'Asistente',
    specialty: 'Asistente',
    bio: '',
    image: '/images/team/javi.jpg',
  },
] as const;

export const CLINIC_IMAGES = [
  { src: '/images/clinic/box-ventana.jpg', alt: 'Box de atención con ventanal y vista panorámica' },
  { src: '/images/clinic/box-naranja.jpg', alt: 'Box de atención dental equipado con tecnología moderna' },
  { src: '/images/clinic/hall-espera.jpg', alt: 'Sala de espera moderna y acogedora de la clínica' },
  { src: '/images/clinic/recepcion-nueva.jpg', alt: 'Recepción de la Clínica Dental Dra. Nicole Loeff' },
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
    title: 'Diseño de Sonrisa con Carillas',
    description: 'Cierre de espacios y armonización de la sonrisa con carillas estéticas, para un resultado uniforme y natural.',
    image: '/images/cases/caso-7.jpeg',
  },
  {
    id: 8,
    title: 'Cierre de Diastema con Resina',
    description: 'Cierre del espacio entre los dientes centrales con resina compuesta de alta estética, en una sola sesión.',
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
  {
    id: 20,
    title: 'Restauración de Dientes Inferiores',
    description: 'Recuperación de la forma y el color de los dientes inferiores desgastados, con un resultado parejo y natural.',
    image: '/images/cases/caso-20.jpg',
  },
  {
    id: 21,
    title: 'Blanqueamiento y Restauraciones Estéticas',
    description: 'Aclaramiento del color y armonización de los bordes dentarios para una sonrisa más luminosa y uniforme.',
    image: '/images/cases/caso-21.jpg',
  },
  {
    id: 22,
    title: 'Cierre de Espacios con Carillas',
    description: 'Cierre del espacio entre los dientes anteriores y armonización de la sonrisa con carillas estéticas.',
    image: '/images/cases/caso-22.jpg',
  },
  {
    id: 23,
    title: 'Rehabilitación Estética en una Sesión',
    description: 'Dientes inferiores desgastados devueltos a su forma y color en una sola sesión de trabajo.',
    image: '/images/cases/caso-23.jpg',
  },
  {
    id: 24,
    title: 'Reconstrucción de Bordes Fracturados',
    description: 'Reconstrucción de bordes desgastados y fracturados en dientes inferiores, recuperando su forma original.',
    image: '/images/cases/caso-24.jpg',
  },
  {
    id: 25,
    title: 'Diseño de Sonrisa Integral',
    description: 'Transformación completa de la sonrisa, devolviendo proporción, alineación y color natural a los dientes.',
    image: '/images/cases/caso-25.jpg',
  },
] as const;

export const CLINIC_PHOTOS = [
  { src: '/images/clinic/salon-verde.jpg', alt: 'Box de atención dental equipado' },
  { src: '/images/clinic/recepcion.jpg', alt: 'Recepción de la clínica' },
  { src: '/images/clinic/esterilizacion.jpg', alt: 'Área de esterilización' },
  { src: '/images/clinic/dra-nicole-casos.jpg', alt: 'Dra. Nicole Loeff con casos de éxito' },
  { src: '/images/clinic/salon-naranja.jpg', alt: 'Sala de tratamientos moderna' },
  { src: '/images/clinic/dra-paciente.jpg', alt: 'Atención dental profesional' },
  { src: '/images/cases/dentista-trabajando.jpg', alt: 'Procedimiento de blanqueamiento dental' },
] as const;
