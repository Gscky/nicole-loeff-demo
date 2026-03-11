import { ScrollReveal } from '../components/ScrollReveal';
import { TEAM } from '../lib/constants';

export function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-dark mb-4">
              Profesionales de excelencia
            </h2>
            <div className="mx-auto accent-divider mb-6" />
            <p className="mx-auto max-w-2xl font-body text-base text-gray-500 leading-relaxed">
              Un equipo de especialistas altamente calificados, comprometidos con tu bienestar y tu sonrisa.
            </p>
          </ScrollReveal>
        </div>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.12}>
              <div className="text-center group">
                {/* Photo */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover object-top border-4 border-emerald-50 transition-all duration-300 group-hover:border-emerald-500 group-hover:shadow-lg group-hover:shadow-emerald-500/20"
                  />
                </div>

                {/* Info */}
                <h3 className="font-display text-lg font-semibold text-gray-dark mb-1">
                  {member.name}
                </h3>
                <p className="font-body text-sm font-medium text-copper-400 mb-1">
                  {member.role}
                </p>
                <p className="font-body text-xs text-emerald-500 uppercase tracking-wider mb-3">
                  {member.specialty}
                </p>
                <p className="font-body text-xs text-gray-500 leading-relaxed max-w-[220px] mx-auto">
                  {member.bio}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
