import { ScrollReveal } from '../components/ScrollReveal';
import { TEAM, CLINIC } from '../lib/constants';

export function EquipoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-emerald-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/images/clinic/dra-paciente.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-emerald-900/95" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nuestro Equipo
            </h1>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base sm:text-lg text-white/70 leading-relaxed">
              Profesionales de excelencia comprometidos con tu bienestar.
              Cada miembro aporta años de experiencia y especialización.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {TEAM.map((member, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={member.name}>
                  <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-center">
                    {/* Photo */}
                    <div className={`lg:col-span-2 ${isEven ? '' : 'lg:order-2'}`}>
                      <div className="relative group">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                          {/* Sin alto fijo ni recorte: la foto completa, con su proporción */}
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6">
                          <p className="font-display text-lg sm:text-xl font-semibold text-white">
                            {member.specialty}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className={`lg:col-span-3 ${isEven ? '' : 'lg:order-1'}`}>
                      <p className="font-body text-xs sm:text-sm font-medium text-copper-400 uppercase tracking-wider mb-2">
                        {member.role}
                      </p>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark mb-2">
                        {member.name}
                      </h2>
                      <p className="font-body text-xs sm:text-sm text-emerald-500 uppercase tracking-wider mb-4 sm:mb-6">
                        {member.specialty}
                      </p>
                      <div className="accent-divider mb-4 sm:mb-6" />
                      <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
                        {member.bio}
                      </p>
                      <a
                        href={CLINIC.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-copper-400 px-6 sm:px-8 py-2.5 sm:py-3 font-body text-sm font-semibold text-white transition-all duration-300 hover:bg-copper-500 hover:shadow-lg"
                      >
                        Agendar con {member.name.split(' ')[0]} {member.name.split(' ')[1]}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="py-16 sm:py-24 bg-gray-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-dark mb-4">
                Nuestra Clínica
              </h2>
              <div className="mx-auto accent-divider mb-6" />
              <p className="mx-auto max-w-2xl font-body text-sm sm:text-base text-gray-500 leading-relaxed">
                Espacios diseñados para tu comodidad, equipados con tecnología de punta.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { src: '/images/clinic/box-ventana.jpg', alt: 'Box de atención con ventanal y vista panorámica' },
              { src: '/images/clinic/box-naranja.jpg', alt: 'Box de atención dental equipado con tecnología moderna' },
              { src: '/images/clinic/hall-espera.jpg', alt: 'Sala de espera moderna y acogedora' },
              { src: '/images/clinic/recepcion-nueva.jpg', alt: 'Recepción de la clínica' },
            ].map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl sm:rounded-2xl shadow-md group">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-36 sm:h-48 lg:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
