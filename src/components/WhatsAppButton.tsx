import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook, X } from 'lucide-react';
import { CLINIC } from '../lib/constants';

/*
  Botones flotantes. WhatsApp manda: se queda grande y solo.
  Instagram y Facebook ocupaban dos círculos del mismo tamaño y competían con él,
  así que ahora viven dentro de una píldora "Síguenos" que se despliega al tocarla.
  El botón de reseña de Google queda visible y a un clic: si se esconde dentro del
  desplegable nadie deja reseñas.
*/

/* Logotipo de Google en sus colores, para que el botón se reconozca al instante. */
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

/* Etiqueta que aparece al costado del botón al pasar el mouse. */
function Etiqueta({ children }: { children: string }) {
  return (
    <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-gray-dark/85 px-3 py-1.5 font-body text-xs font-medium text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
      {children}
    </span>
  );
}

export function WhatsAppButton() {
  const [abierto, setAbierto] = useState(false);

  const redes = [
    {
      nombre: 'Instagram',
      href: CLINIC.instagram,
      icono: <Instagram size={20} strokeWidth={2} />,
      clase: 'text-white',
      estilo: {
        background:
          'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
      },
    },
    {
      nombre: 'Facebook',
      href: CLINIC.facebook,
      icono: <Facebook size={20} fill="currentColor" strokeWidth={0} />,
      clase: 'bg-[#1877F2] text-white',
      estilo: undefined,
    },
  ];

  return (
    <>
      {/* Redes sociales: píldora "Síguenos" que despliega los iconos hacia arriba */}
      <div className="social-fab fixed bottom-[9.75rem] right-5 sm:bottom-[11rem] sm:right-6 z-50 flex flex-col items-end gap-2.5">
        <AnimatePresence>
          {abierto &&
            redes.map((red, i) => (
              <motion.a
                key={red.nombre}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 14, scale: 0.7 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 14, scale: 0.7 }}
                transition={{ delay: i * 0.05, type: 'spring', stiffness: 320, damping: 22 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-full shadow-lg ${red.clase}`}
                style={red.estilo}
                aria-label={`${red.nombre} de la clínica`}
              >
                <Etiqueta>{red.nombre}</Etiqueta>
                {red.icono}
              </motion.a>
            ))}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.15, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-expanded={abierto}
          aria-label={abierto ? 'Cerrar redes sociales' : 'Síguenos en redes sociales'}
          className="relative flex h-11 items-center gap-2 rounded-full border border-emerald-900/10 bg-white px-4 font-body text-[13px] font-semibold text-emerald-900 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_26px_rgba(0,0,0,0.18)]"
        >
          {abierto ? (
            <X size={17} strokeWidth={2.4} />
          ) : (
            <>
              <Instagram size={16} strokeWidth={2.2} className="text-[#d6249f]" />
              <Facebook size={16} fill="currentColor" strokeWidth={0} className="-ml-1 text-[#1877F2]" />
            </>
          )}
          <span>{abierto ? 'Cerrar' : 'Síguenos'}</span>
        </motion.button>
      </div>

      {/* ReseÃ±a en Google â visible siempre, a un solo clic */}
      <motion.a
        href={CLINIC.googleReviewLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.3, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="social-fab group fixed bottom-[5.5rem] right-5 sm:bottom-[6.25rem] sm:right-6 z-50 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-emerald-900/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_6px_30px_rgba(0,0,0,0.2)]"
        aria-label="Dejar una reseña en Google"
      >
        <Etiqueta>Deja tu reseña</Etiqueta>
        <GoogleG size={26} />
        <span className="absolute right-0 top-0 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-copper-400 text-[10px] font-bold leading-none text-white">
          ★
        </span>
      </motion.a>

      {/* WhatsApp — agenda tu hora */}
      <motion.a
        href={CLINIC.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="social-fab fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.5)] transition-shadow"
        aria-label="Agendar hora por WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      </motion.a>
    </>
  );
}
