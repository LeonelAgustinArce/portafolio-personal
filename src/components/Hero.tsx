import Avatar from "./Avatar";
import SkillChip from "./SkillChip";
import { techStackHighlights } from "../data/skillsData";

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="fade-in">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--muted-foreground)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: "#4ADE80", boxShadow: "0 0 6px #4ADE80" }}
              />
              Abierto a oportunidades
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-3 leading-tight tracking-tight" style={{ color: "var(--foreground)" }}>
              Leonel Agustín Arce
            </h1>

            <h2
              className="text-xl lg:text-2xl font-medium mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
            >
              Desarrollador Full Stack Jr. · Backend + APIs
            </h2>

            <p className="text-base leading-relaxed mb-2 max-w-xl" style={{ color: "var(--muted-foreground)" }}>
              Soy un estudiante avanzado de programación con enfoque en backend, APIs y
              soluciones web escalables. Desarrollo aplicaciones Full Stack con JavaScript,
              TypeScript, Java y Python, y me interesa crear productos útiles, bien
              estructurados y fáciles de mantener.
            </p>

            <p className="text-sm mb-8 max-w-xl" style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}>
              📍 Buenos Aires, Argentina
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#proyectos"
                className="btn-primary flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                style={{ minHeight: "44px" }}
              >
                Ver proyectos
                <IconArrowRight />
              </a>
              <a
                href="#contacto"
                className="btn-outline flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                style={{ minHeight: "44px" }}
              >
                Contáctame
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/LeonelAgustinArce"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <IconGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/leonel-agustin-arce-a7090b2a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <IconLinkedin />
              </a>
              <a
                href="mailto:leonelagustin.arce@estudiantes.unahur.edu.ar"
                className="social-icon-btn"
                aria-label="Enviar email"
              >
                <IconMail />
              </a>
              <span
                className="text-xs hidden sm:block"
                style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                leonelagustin.arce@estudiantes.unahur.edu.ar
              </span>
            </div>
          </div>

          {/* Right – avatar */}
          <div className="fade-in flex justify-center lg:justify-end" style={{ transitionDelay: "0.15s" }}>
            <div className="relative flex items-center justify-center p-5 rounded-[2rem]" style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))",
              border: "1px solid var(--border)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}>
              <div className="absolute inset-4 rounded-[1.5rem]" style={{
                background: "radial-gradient(circle at center, rgba(115,125,255,0.10), transparent 68%)",
                filter: "blur(6px)",
              }} />
              <div className="relative z-10">
                <Avatar size={280} />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl text-xs font-medium z-20"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                UNAHUR · TUP
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack row */}
        <div
          className="fade-in mt-16 pt-10"
          style={{ borderTop: "1px solid var(--border)", transitionDelay: "0.25s" }}
        >
          <p
            className="text-xs font-medium mb-4 tracking-widest uppercase"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Stack principal
          </p>
          <div className="flex flex-wrap gap-2">
            {techStackHighlights.map((t) => (
              <SkillChip key={t} label={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
