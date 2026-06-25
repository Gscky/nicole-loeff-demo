import { useRef, useEffect } from "react";

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

  POR QUÉ CANVAS Y NO <video>:
  Scrubbear un <video> con video.currentTime va a TIRONES: el decoder no alcanza a
  renderizar cada seek a tiempo. Aquí usamos una SECUENCIA DE FRAMES (imágenes ya
  decodificadas) dibujadas en un <canvas>. Cada posición de scroll dibuja un frame
  al instante, sin latencia de seek → scroll perfectamente fluido.
  Mecánica de posición: igual que antes, position:sticky (no usa position:fixed,
  así que el transform de motion.main no lo rompe).

  Assets: public/videos/estetica-frames/frame_0001.jpg ... frame_0121.jpg
          public/videos/estetica-frame-poster.jpg (fallback)
*/
export default function EsteticaClinica({
  framesPath = "/videos/estetica-frames",
  frameCount = 121,
  poster = "/videos/estetica-frame-poster.jpg",
  // alto total de la sección como múltiplo del viewport (mayor = scrub más lento)
  scrollLength = 2.5,
}: {
  framesPath?: string;
  frameCount?: number;
  poster?: string;
  scrollLength?: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const images: HTMLImageElement[] = new Array(frameCount);
    let loadedCount = 0;
    let started = false;
    let raf = 0;
    let targetFrame = 0;   // frame objetivo según scroll
    let currentFrame = 0;  // frame actual (suavizado)
    let lastTime = 0;      // timestamp del rAF previo (para dt)
    let lastDrawn = -1;    // último índice realmente dibujado (evita redibujos redundantes)

    // Suavizado exponencial INDEPENDIENTE DEL FRAMERATE (consistente en 60/120Hz).
    // TAU = constante de tiempo en s: menor = más directo, mayor = más flotante.
    // Probé 0.08 (un pelín brusco), 0.12 (algo flotante) y 0.10 → el más natural. -> queda 0.10
    const TAU = 0.10;

    const url = (i: number) =>
      `${framesPath}/frame_${String(i + 1).padStart(4, "0")}.jpg`;

    // tamaño del canvas según su caja CSS y el devicePixelRatio (nitidez retina)
    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };

    const nearestLoaded = (idx: number) => {
      if (images[idx]?.complete) return images[idx];
      for (let d = 1; d < frameCount; d++) {
        if (images[idx - d]?.complete) return images[idx - d];
        if (images[idx + d]?.complete) return images[idx + d];
      }
      return null;
    };

    const draw = (idx: number) => {
      const img = nearestLoaded(idx);
      if (!img) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };

    const computeTarget = () => {
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = -section.getBoundingClientRect().top;
      const p = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      targetFrame = p * (frameCount - 1);
    };

    const tick = (now: number) => {
      if (!lastTime) lastTime = now;
      const dt = Math.min((now - lastTime) / 1000, 0.05); // dt en s; clamp anti-salto tras tab inactivo
      lastTime = now;
      // lerp exponencial framerate-independiente (k≈0.2 a 60fps con TAU≈0.075; acá TAU=0.10)
      const k = 1 - Math.exp(-dt / TAU);
      currentFrame += (targetFrame - currentFrame) * k;
      if (Math.abs(targetFrame - currentFrame) < 0.01) currentFrame = targetFrame; // snap: corta la oscilación
      const idx = Math.round(currentFrame);
      if (idx !== lastDrawn) { draw(idx); lastDrawn = idx; } // solo redibuja si cambió el frame
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => { sizeCanvas(); computeTarget(); lastDrawn = -1; draw(Math.round(currentFrame)); };

    // precarga de frames (arranca al acercarse a viewport)
    const startLoading = () => {
      if (started) return;
      started = true;
      sizeCanvas();
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loadedCount++;
          if (loadedCount === 1) {            // dibuja el primero apenas llega
            computeTarget();
            currentFrame = targetFrame;
            draw(Math.round(currentFrame));
            if (!reduce) { cancelAnimationFrame(raf); lastTime = 0; raf = requestAnimationFrame(tick); }
          }
        };
        img.src = url(i);
        images[i] = img;
      }
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { startLoading(); io.disconnect(); } }),
      { rootMargin: "200% 0px" } // empieza a cargar ~2 viewports antes
    );
    io.observe(section);

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", onResize);
    };
  }, [framesPath, frameCount, scrollLength]);

  const eyebrow: React.CSSProperties = {
    fontFamily: sans, fontSize: 12, fontWeight: 700, letterSpacing: ".2em",
    textTransform: "uppercase", color: C.terra,
  };
  const chips = ["Diseño de sonrisa", "Carillas estéticas", "Blanqueamiento", "Alineadores invisibles"];

  return (
    <section
      ref={sectionRef}
      style={{ background: C.white, width: "100%", height: `${scrollLength * 100}vh`,
        position: "relative" }}
    >
      <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex",
        alignItems: "center", background: C.white }} className="estetica-sticky">
        <div style={{ maxWidth: 1180, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
          gap: "clamp(32px,5vw,64px)", alignItems: "center",
          padding: "clamp(40px,6vw,72px) clamp(24px,5vw,48px)" }}
          className="estetica-grid">

          {/* IZQUIERDA — canvas con la secuencia de frames */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <canvas
              ref={canvasRef}
              style={{ width: "100%", maxWidth: 460, aspectRatio: "9 / 16",
                display: "block", background: `${C.white} url(${poster}) center/contain no-repeat`,
                pointerEvents: "none" }}
            />
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
              Desde alineadores invisibles hasta diseño de sonrisa con carillas, combinamos tecnología
              de vanguardia con la atención cercana y boutique que distingue a la clínica.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 28 }}>
              {chips.map((c) => (
                <span key={c} style={{ fontFamily: sans, fontSize: 13.5, fontWeight: 500, color: C.ink,
                  background: C.chipBg, border: "1px solid " + C.line, padding: "8px 15px",
                  borderRadius: 999 }}>{c}</span>
              ))}
            </div>

            <a href="#contacto" style={{ position: "relative", zIndex: 3, display: "inline-flex",
              alignItems: "center", gap: 8, fontFamily: sans, fontSize: 15.5, fontWeight: 600,
              color: C.white, background: C.terra, padding: "15px 30px", borderRadius: 999,
              textDecoration: "none", marginTop: 32,
              boxShadow: "0 10px 26px -12px rgba(201,126,62,.7)" }}>
              Agendar evaluación estética →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px){
          .estetica-grid{ grid-template-columns:1fr !important; }
          .estetica-grid > div:first-child canvas{ max-width:300px !important; }
        }
      `}</style>
    </section>
  );
}
