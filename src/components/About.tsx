import Skills from "./Skills";
import Education from "./Education";

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="fade-in grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              01 / Sobre mí
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight" style={{ color: "var(--foreground)" }}>
              Desarrollador en formación con enfoque en backend y soluciones web.
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
              Soy estudiante avanzado de la Tecnicatura Universitaria en Programación en la
              UNAHUR y me estoy formando para insertarme en el mundo laboral como desarrollador
              Full Stack. A lo largo de la carrera desarrollé conocimientos sólidos en
              JavaScript, TypeScript, Java, Python y en la creación de aplicaciones web con
              una lógica clara y una estructura mantenible.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
              Me interesa especialmente el desarrollo backend, el diseño de APIs y la creación
              de soluciones funcionales que resuelvan problemas reales. También me siento cómodo
              trabajando en frontend cuando es necesario, y me motiva aprender en equipo,
              aportar buenas prácticas, mejorar la calidad del código y seguir creciendo como
              profesional.
            </p>
            <a
              href="/LeonelAgustinArce-Cv.pdf"
              download
              className="btn-outline inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
              style={{ minHeight: "44px" }}
            >
              <IconDownload />
              Descargar CV
            </a>
          </div>

          {/* Right – skills */}
          <div>
            <Skills />
          </div>
        </div>

        {/* Education timeline */}
        <div className="fade-in mt-16" style={{ transitionDelay: "0.1s" }}>
          <Education />
        </div>
      </div>
    </section>
  );
}
