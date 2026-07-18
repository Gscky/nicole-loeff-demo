import { useState, useEffect, useRef, useCallback } from "react";

/* Paleta del sitio Dra. Nicole Loeff */
const C = {
  cream: "#F5F3EC",
  white: "#FFFFFF",
  ink: "#2A2A28",
  muted: "#6E6E68",
  terra: "#C97E3E",
  green: "#6E8E5C",
  line: "#E6E3DA",
};
const serif = "'Playfair Display', Georgia, serif";
const sans = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";

type Service = {
  name: string;
  short: string;          // texto corto (tarjeta)
  full: string;           // descripción completa (overlay)
  image?: string;         // ruta de foto real; si falta, usa placeholder
  color?: string;         // color del placeholder
};

/* placeholder mientras no haya foto real: gradiente limpio, SIN texto
   (el nombre se muestra en el pie de la tarjeta, no encima de la imagen) */
function ph(color = "#C97E3E") {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='720'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='0.6' y2='1'>
      <stop offset='0' stop-color='${color}' stop-opacity='0.92'/>
      <stop offset='1' stop-color='${color}' stop-opacity='0.62'/></linearGradient></defs>
    <rect width='600' height='720' fill='url(#g)'/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
const imgOf = (s: Service) => s.image || ph(s.color);

/*
  Datos REALES del sitio: tomados de SPECIALTIES en src/lib/constants.ts.
  `name` y `full` = textos existentes; `short` redactado breve a partir del full.
  Fotos como placeholder por ahora (sin `image`) — Nicole las entregará después.
*/
const DEFAULT_SERVICES: Service[] = [
  { name: "Periodoncia", color: "#6E8E5C", image: "/images/especialidades/periodoncia.jpg", short: "Encías sanas: la base de una boca sana.",
    full: "La Periodoncia es la especialidad de la odontología dedicada a la prevención, diagnóstico y tratamiento de las enfermedades que afectan las encías y los tejidos de soporte de los dientes, como el hueso y el ligamento periodontal. Las enfermedades más frecuentes son la gingivitis, que corresponde a la inflamación de las encías, y la periodontitis, una infección que, si no se trata a tiempo, puede provocar la pérdida del hueso que sostiene los dientes y comprometer su estabilidad. El objetivo de la periodoncia es mantener las encías y los tejidos de soporte sanos, permitiendo conservar los dientes naturales firmes y saludables durante toda la vida." },
  { name: "Estética Dental", color: "#B07A3E", image: "/images/especialidades/estetica-dental.jpg", short: "Diseño de sonrisa, carillas estéticas naturales, cierres de espacios y blanqueamientos dentales.",
    full: "La Estética Dental es la especialidad de la odontología que busca realzar la belleza natural de tu sonrisa, logrando resultados armónicos, saludables y acordes a cada persona. A través de tratamientos como el blanqueamiento dental, carillas y restauraciones estéticas, es posible mejorar el color, la forma y la apariencia de los dientes, devolviendo confianza para sonreír con naturalidad, siempre cuidando la salud y la función de tu sonrisa." },
  { name: "Odontopediatría", color: "#C9925A", image: "/images/especialidades/odontopediatria.jpg", short: "Cuidado dental cercano para niños y bebés.",
    full: "Cuidado dental especializado para niños y recién nacidos. Diagnóstico, selladores, tratamiento de caries, manejo de traumatismos y educación en higiene oral." },
  { name: "Implantología", color: "#6E8E5C", image: "/images/especialidades/implantologia.jpg", short: "Reemplazo permanente de dientes perdidos con implantes.",
    full: "Implantes de titanio biocompatibles que reemplazan las raíces naturales de los dientes perdidos, brindando una solución permanente con resultados estéticos superiores." },
  { name: "Oclusión y Trastornos Temporomandibulares", color: "#A6794B", image: "/images/especialidades/bruxismo.jpg", short: "Férulas y cuidado de tu oclusión y articulación.",
    full: "Diagnóstico y tratamiento del bruxismo y los trastornos de la articulación temporomandibular. Férulas de descarga nocturna y corrección oclusal para proteger tu estructura dental." },
  { name: "Rehabilitación Oral", color: "#C97E3E", image: "/images/especialidades/rehabilitacion-oral.jpg", short: "Recuperamos función y estética con prótesis modernas.",
    full: "Restauramos la función, estética y armonía de tu sonrisa mediante prótesis dentales fijas, removibles y sobre implantes con las técnicas más modernas." },
  { name: "Endodoncia", color: "#8C6A4A", image: "/images/especialidades/endodoncia.jpg", short: "Tratamiento de conducto que salva tu diente natural.",
    full: "Tratamiento de conducto radicular que salva dientes naturales eliminando la pulpa infectada. Procedimiento con anestesia local, seguro y con 90% de éxito." },
  { name: "Ortodoncia", color: "#A6794B", image: "/images/especialidades/ortodoncia.jpg", short: "Alineación y mordida con técnicas fijas o invisibles.",
    full: "Movimientos suaves y precisos que corrigen la posición dental, mejorando la oclusión y alineación para una sonrisa perfecta. Opciones fijas, removibles y funcionales." },
];

export default function EspecialidadesCarousel({
  services = DEFAULT_SERVICES,
  title = "Conoce nuestras especialidades",
  eyebrow = "Lo que hacemos",
}: {
  services?: Service[];
  title?: string;
  eyebrow?: string;
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const n = services.length;

  useEffect(() => {
    const calc = () => setCompact(window.innerWidth < 1024); // mobile+tablet: 1 tarjeta; coverflow solo en desktop (≥1024)
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const go = useCallback((dir: number) => {
    setOpen(false);
    setActive((a) => (a + dir + n) % n);
  }, [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (open) { if (e.key === "Escape") setOpen(false); return; }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  useEffect(() => {
    if (open) {
      lastFocus.current = document.activeElement as HTMLElement;
      closeBtnRef.current?.focus();
    } else {
      lastFocus.current?.focus?.();
    }
  }, [open]);

  const offsetOf = (i: number) => {
    let off = i - active;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    return off;
  };

  const spread = compact ? 210 : 150;
  const maxVisible = compact ? 1 : 2;

  const cardStyle = (off: number): React.CSSProperties => {
    const abs = Math.abs(off);
    const hidden = abs > maxVisible;
    return {
      position: "absolute", top: "50%", left: "50%",
      // mobile: ancho responsivo para que no se salga del viewport; desktop: 264 fijo
      width: compact ? "min(264px, 82vw)" : 264, height: 348,
      transform: `translate(-50%,-50%) translateX(${off * spread}px) scale(${off === 0 ? 1 : abs === 1 ? 0.82 : 0.66}) perspective(900px) rotateY(${off * -8}deg)`,
      opacity: hidden ? 0 : off === 0 ? 1 : abs === 1 ? 0.55 : 0.28,
      zIndex: 10 - abs,
      pointerEvents: hidden ? "none" : "auto",
      transition: "transform .55s cubic-bezier(.4,0,.2,1), opacity .55s",
      filter: off === 0 ? "none" : "saturate(.85)",
    };
  };

  // inRow=true → flecha en flujo (fila mobile debajo de la card); false → absoluta (desktop)
  const arrow = (dir: "l" | "r", inRow = false) => (
    <button onClick={() => go(dir === "l" ? -1 : 1)}
      aria-label={dir === "l" ? "Especialidad anterior" : "Especialidad siguiente"}
      style={{ ...(inRow
        ? { position: "relative" as const }
        : { position: "absolute" as const, top: "50%", transform: "translateY(-50%)", [dir === "l" ? "left" : "right"]: 4 }),
        zIndex: 30,
        width: 52, height: 52, borderRadius: "50%", border: `1px solid ${C.line}`,
        background: C.white, color: C.ink, cursor: "pointer", fontSize: 22,
        display: "grid", placeItems: "center", boxShadow: "0 8px 20px -10px rgba(0,0,0,.35)" }}>
      {dir === "l" ? "‹" : "›"}
    </button>
  );

  const cur = services[active];

  return (
    <section style={{ background: C.cream, padding: "clamp(48px,6vw,72px) 0 clamp(96px,11vw,140px)",
      // isolation: confina los z-index de las tarjetas absolutas (10-40) DENTRO de esta
      // sección para que el carrusel no se pinte por encima de "Estética"; el padding-bottom
      // ampliado da colchón real antes de que empiece la sección siguiente.
      isolation: "isolate" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <span style={{ fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: ".2em",
          textTransform: "uppercase", color: C.terra }}>{eyebrow}</span>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(30px,4.2vw,48px)", color: C.ink,
          margin: "12px 0 0", fontWeight: 600 }}>{title}</h2>
        <div style={{ width: 46, height: 3, background: C.terra, borderRadius: 2, margin: "16px auto 0" }} />

        {/* STAGE */}
        <div style={{ position: "relative", height: 430, marginTop: 36 }}>
          {/* desktop: flechas absolutas a los lados; en mobile van debajo (ver fila más abajo) */}
          {!compact && arrow("l")}
          {!compact && arrow("r")}

          {services.map((s, i) => {
            const off = offsetOf(i);
            const isCenter = off === 0;
            if (compact && !isCenter) return null; // mobile: SOLO la central (sin vecinas que desborden)
            return (
              <div key={s.name} style={cardStyle(off)}
                onClick={() => !isCenter && (setOpen(false), setActive(i))}>
                <div style={{ width: "100%", height: "100%", borderRadius: 16, overflow: "hidden",
                  background: C.white, border: `1px solid ${C.line}`,
                  boxShadow: isCenter ? "0 24px 50px -22px rgba(0,0,0,.4)" : "0 12px 30px -18px rgba(0,0,0,.35)",
                  display: "flex", flexDirection: "column", cursor: isCenter ? "default" : "pointer" }}>
                  {/* imagen: flex:1 + minHeight:0 para que se encoja y deje ver el pie */}
                  <img src={imgOf(s)} alt={s.name}
                    loading={isCenter ? "eager" : "lazy"}
                    width={1100} height={825}
                    style={{ width: "100%", flex: 1, minHeight: 0, objectFit: "cover", display: "block" }} />
                  {/* pie: flexShrink:0 para que NO se comprima (botón siempre visible) */}
                  <div style={{ flexShrink: 0, padding: "14px 16px 16px" }}>
                    <h3 style={{ fontFamily: serif, fontSize: 19, color: C.ink, margin: 0, lineHeight: 1.2 }}>{s.name}</h3>
                    {isCenter && (
                      <>
                        <p style={{ fontFamily: sans, fontSize: 13, color: C.muted, margin: "6px 0 12px",
                          lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical", overflow: "hidden" }}>{s.short}</p>
                        <button onClick={() => setOpen(true)}
                          style={{ fontFamily: sans, fontSize: 13.5, fontWeight: 600, color: C.white,
                            background: C.terra, border: "none", padding: "9px 22px", borderRadius: 999,
                            cursor: "pointer" }}>Saber más</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* OVERLAY expandido sobre el carrusel */}
          {open && (
            <div role="dialog" aria-modal="true" aria-label={cur.name}
              onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
              style={{ position: "fixed", inset: 0, zIndex: 60, display: "grid", placeItems: "center",
                padding: 16,
                background: "rgba(245,243,236,.72)", backdropFilter: "blur(6px)", animation: "espFade .25s ease" }}>
              <div style={{ width: "min(720px,94%)", maxHeight: "86vh", background: C.white, borderRadius: 20,
                boxShadow: "0 30px 70px -30px rgba(0,0,0,.5)", border: `1px solid ${C.line}`,
                display: "grid", gridTemplateColumns: compact ? "1fr" : "minmax(0,.9fr) minmax(0,1.1fr)",
                gridTemplateRows: compact ? "auto auto" : "1fr",
                overflow: compact ? "auto" : "hidden",
                textAlign: "left", animation: "espPop .3s cubic-bezier(.2,0,.2,1)" }} className="esp-ov">
                <img src={imgOf(cur)} alt={cur.name}
                  style={{ width: "100%", height: compact ? 220 : "100%", objectFit: "cover",
                    minHeight: compact ? undefined : 240 }} />
                <div style={{ padding: "28px 28px 30px", position: "relative",
                  minHeight: compact ? undefined : 0, overflowY: compact ? "visible" : "auto" }}>
                  <button ref={closeBtnRef} onClick={() => setOpen(false)} aria-label="Cerrar"
                    style={{ position: "absolute", top: 14, right: 14, width: 34, height: 34,
                      borderRadius: "50%", border: `1px solid ${C.line}`, background: C.white,
                      cursor: "pointer", fontSize: 18, color: C.muted }}>×</button>
                  <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 700, letterSpacing: ".16em",
                    textTransform: "uppercase", color: C.terra }}>Especialidad</span>
                  <h3 style={{ fontFamily: serif, fontSize: 27, color: C.ink, margin: "8px 0 0" }}>{cur.name}</h3>
                  <div style={{ width: 40, height: 3, background: C.terra, borderRadius: 2, margin: "14px 0" }} />
                  <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.65, color: C.muted, margin: 0 }}>{cur.full}</p>
                  <a href="#contacto" style={{ display: "inline-block", marginTop: 22, fontFamily: sans,
                    fontSize: 14.5, fontWeight: 600, color: C.white, background: C.terra,
                    padding: "12px 26px", borderRadius: 999, textDecoration: "none" }}>Agendar hora</a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* mobile: flechas en fila debajo de la card (no la tapan) */}
        {compact && (
          <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 18 }}>
            {arrow("l", true)}
            {arrow("r", true)}
          </div>
        )}

        <p style={{ fontFamily: sans, fontSize: 13, color: C.muted, marginTop: 8 }}>
          {active + 1} / {n} · usa las flechas para explorar
        </p>
      </div>

      <style>{`
        @keyframes espFade{from{opacity:0}to{opacity:1}}
        @keyframes espPop{from{opacity:0;transform:scale(.94)}to{opacity:1;transform:scale(1)}}
        @media (max-width:767.98px){ .esp-ov{ grid-template-columns:1fr !important; } }
        @media (prefers-reduced-motion: reduce){ .esp-ov,[role=dialog]{ animation:none !important; } }
      `}</style>
    </section>
  );
}
