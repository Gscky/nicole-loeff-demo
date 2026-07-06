import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";

/* Paleta del sitio Dra. Nicole Loeff */
const C = {
  white: "#FFFFFF",
  ink: "#2A2A28",
  muted: "#6E6E68",
  terra: "#C97E3E",
  green: "#6E8E5C",
  line: "#E6E3DA",
  chipBg: "#F5F3EC",
};
const serif = "'Playfair Display', Georgia, serif";
const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

/*
  SECCIÓN "ESTÉTICA CLÍNICA DENTAL" — fondo blanco, animación scrubbeada al scroll.

  MAZO DE TARJETAS (deck): fotos REALES de casos de estética apiladas estilo
  polaroid. Al scrollear, la tarjeta frontal se "despega" (sale con rotación
  hacia la izquierda) y la siguiente toma su lugar. Todo va amarrado al scroll
  vía framer-motion (useScroll + useSpring): sin re-renders por frame, los
  MotionValues actualizan los transforms directamente. Mecánica de posición:
  igual que antes, sticky de 100vh dentro de una sección de scrollLength·100vh.
*/
const CASES = [
  { src: "/images/cases/caso-9.jpeg", title: "Rehabilitación Completa" },
  { src: "/images/cases/caso-19.jpeg", title: "Blanqueamiento Integral" },
  { src: "/images/cases/caso-5.jpg", title: "Diseño de Sonrisa" },
  { src: "/images/cases/caso-4.jpg", title: "Carillas Estéticas" },
  { src: "/images/cases/caso-17.jpeg", title: "Diseño Personalizado" },
  { src: "/images/cases/caso-18.jpeg", title: "Corrección de Apiñamiento" },
];

/* Rutas de los casos usados en el mazo: BeforeAfter (home) las excluye
   para no repetir las mismas fotos dentro de la misma página. */
export const ESTETICA_CASE_SRCS: string[] = CASES.map((c) => c.src);

/* Una tarjeta del mazo. `idx` = posición continua del scroll (0..count-1);
   rel = i - idx: 0 = al frente, >0 = apilada detrás, <0 = ya despegada. */
function DeckCard({
  item,
  i,
  count,
  idx,
}: {
  item: (typeof CASES)[number];
  i: number;
  count: number;
  idx: MotionValue<number>;
}) {
  const rel = useTransform(idx, (v) => i - v);
  // despegue: sale hacia la izquierda girando; apilada: baja y se achica con la profundidad
  const x = useTransform(rel, (r) => (r < 0 ? `${r * 130}%` : "0%"));
  const rotate = useTransform(rel, (r) =>
    r < 0 ? r * 14 : (i % 2 ? 2.6 : -2.4) * Math.min(r, 1.6)
  );
  const y = useTransform(rel, (r) => (r > 0 ? Math.min(r, 3) * 18 : 0));
  const scale = useTransform(rel, (r) => (r > 0 ? 1 - Math.min(r, 3) * 0.055 : 1));
  // las muy profundas se desvanecen para no ensuciar el fondo
  const opacity = useTransform(rel, (r) =>
    r > 2.3 ? Math.max(0, 1 - (r - 2.3) / 0.7) : 1
  );

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity, zIndex: count - i,
        position: "absolute", inset: 0, willChange: "transform" }}
    >
      {/* marco estilo polaroid: borde blanco + pie con el nombre del caso */}
      <div style={{ position: "absolute", inset: 0, background: C.white,
        borderRadius: 22, padding: 10, display: "flex", flexDirection: "column",
        boxShadow: "0 22px 48px -20px rgba(42,42,40,.4), 0 4px 14px -6px rgba(42,42,40,.18)",
        border: "1px solid " + C.line }}>
        <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
          <img
            src={item.src}
            alt={`${item.title} — antes y después`}
            loading="lazy"
            draggable={false}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", borderRadius: 14 }}
          />
          <span style={{ position: "absolute", top: 12, left: 12, fontFamily: sans,
            fontSize: 11.5, fontWeight: 600, letterSpacing: ".04em", color: C.white,
            background: "rgba(42,42,40,.62)", backdropFilter: "blur(4px)",
            padding: "5px 12px", borderRadius: 999 }}>
            Antes · Después
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 6px 4px" }}>
          <span style={{ fontFamily: serif, fontSize: 15.5, fontStyle: "italic", color: C.ink }}>
            {item.title}
          </span>
          <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, color: C.muted,
            letterSpacing: ".08em" }}>
            {String(i + 1).padStart(2, "0")}/{String(count).padStart(2, "0")}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function EsteticaClinica({
  // alto total de la sección como múltiplo del viewport (mayor = scrub más lento)
  scrollLength = 2.5,
}: {
  scrollLength?: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const count = CASES.length;

  // progreso de scroll de la sección completa → posición continua en el mazo
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.6 });
  const idx = useTransform(smooth, [0, 1], [0, count - 1]);
  const barWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  // índice activo redondeado (solo re-renderiza al cambiar de tarjeta)
  const [active, setActive] = useState(0);
  useMotionValueEvent(idx, "change", (v) => {
    const r = Math.min(count - 1, Math.max(0, Math.round(v)));
    if (r !== active) setActive(r);
  });

  const eyebrow: React.CSSProperties = {
    fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: ".2em",
    textTransform: "uppercase", color: C.terra,
  };
  // Blanqueamiento primero y destacado (pedido de Nicole: "súper a la vista")
  const chips = ["Blanqueamiento dental", "Diseño de sonrisa", "Carillas estéticas", "Alineadores invisibles"];

  return (
    <section
      ref={sectionRef}
      className="estetica-section"
      style={{ background: C.white, width: "100%", height: `${scrollLength * 100}vh`,
        position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex",
        alignItems: "center", background: C.white }} className="estetica-sticky">
        <div style={{ maxWidth: 1280, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "clamp(32px,5vw,64px)", alignItems: "center",
          padding: "clamp(40px,6vw,72px) clamp(24px,5vw,48px)" }}
          className="estetica-grid">

          {/* IZQUIERDA — mazo de casos reales que se despegan con el scroll */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <div style={{ position: "relative", width: "min(100%, 440px, calc((100vh - 12rem) * 4 / 5))",
              aspectRatio: "4 / 5" }}>
              {CASES.map((item, i) => (
                <DeckCard key={item.src} item={item} i={i} count={count} idx={idx} />
              ))}
            </div>
            {/* barra de progreso del mazo + hint */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div style={{ width: 140, height: 3, background: C.line, borderRadius: 2,
                overflow: "hidden" }}>
                <motion.div style={{ width: barWidth, height: "100%", background: C.terra,
                  borderRadius: 2 }} />
              </div>
              <span style={{ fontFamily: sans, fontSize: 12, color: C.muted, letterSpacing: ".06em" }}>
                Sigue bajando para ver más casos · {String(active + 1).padStart(2, "0")} de {String(count).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* DERECHA — descripción */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <span style={eyebrow}>Servicio boutique · Especialidad de la Dra. Loeff</span>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.06,
              color: C.ink, margin: "14px 0 0", fontWeight: 600 }}>
              Estética<br />Clínica Dental
            </h2>
            <div style={{ width: 46, height: 3, background: C.terra, borderRadius: 2, margin: "20px 0 0" }} />

            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.65, color: C.muted, margin: "24px 0 0" }}>
              Diseñamos sonrisas con un enfoque artístico y personalizado. Cada tratamiento estético
              se planifica milimétricamente para lograr resultados naturales, armónicos y duraderos.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16.5, lineHeight: 1.65, color: C.muted, margin: "16px 0 0" }}>
              Tratamientos de estética dental de alta tecnología realizados por la Dra. Nicole Loeff:
              desde blanqueamiento profesional hasta diseño de sonrisa con carillas, con la atención
              cercana y boutique que distingue a la clínica.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
              {chips.map((c, i) => (
                <span key={c} style={{ fontFamily: sans, fontSize: 13.5, fontWeight: i === 0 ? 700 : 500,
                  color: i === 0 ? C.white : C.ink,
                  background: i === 0 ? C.terra : C.chipBg,
                  border: "1px solid " + (i === 0 ? C.terra : C.line), padding: "8px 15px",
                  borderRadius: 999 }}>{c}</span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 32 }}>
              <Link to="/casos" style={{ position: "relative", zIndex: 3, display: "inline-flex",
                alignItems: "center", gap: 8, fontFamily: sans, fontSize: 15.5, fontWeight: 600,
                color: C.white, background: C.terra, padding: "15px 30px", borderRadius: 999,
                textDecoration: "none",
                boxShadow: "0 10px 26px -12px rgba(201,126,62,.7)" }}>
                Algunos de nuestros casos
              </Link>
              <a href="#contacto" style={{ position: "relative", zIndex: 3, display: "inline-flex",
                alignItems: "center", gap: 8, fontFamily: sans, fontSize: 15.5, fontWeight: 600,
                color: C.terra, background: "transparent", border: "1.5px solid " + C.terra,
                padding: "13.5px 28px", borderRadius: 999, textDecoration: "none" }}>
                Agendar evaluación estética →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Breakpoint unificado a 1024 (lg de Tailwind): MOBILE+TABLET (≤1023.98) el
           contenido fluye (sin pin de 100vh) para que NADA se recorte; el mazo sigue
           scrubbeando con el scroll (useScroll cubre la sección completa). Desktop
           (≥1024) mantiene el sticky 100vh y el layout de 2 columnas. */
        @media (max-width: 1023.98px){
          .estetica-section{ height:auto !important; }
          .estetica-sticky{ position:static !important; height:auto !important; }
          .estetica-grid{ grid-template-columns:1fr !important; }
        }
      `}</style>
    </section>
  );
}
