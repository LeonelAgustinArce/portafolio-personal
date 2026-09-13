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

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto px-6 lg:px-8 py-10" style={{ maxWidth: "1200px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span
              className="font-bold text-base block mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--foreground)" }}
            >
              <span style={{ color: "var(--accent)" }}>{"<"}</span>
              Leonel Arce
              <span style={{ color: "var(--accent)" }}>{"/>"}</span>
            </span>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              Desarrollador Full Stack Jr. con enfoque en backend, APIs y soluciones web.
              Actualmente buscando oportunidades para crecer y aportar en equipos reales.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Navegación
            </p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm hover:text-current transition-colors"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Redes
            </p>
            <div className="flex gap-2">
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
                aria-label="Email"
              >
                <IconMail />
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            © 2026 Leonel Agustín Arce. Disponible para proyectos y oportunidades.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            Construido con React + TypeScript + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
