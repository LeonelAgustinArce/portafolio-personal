function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
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

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="fade-in max-w-3xl">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            03 / Contacto
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-5 tracking-tight" style={{ color: "var(--foreground)" }}>
            Busco colaborar, aprender y aportar
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--muted-foreground)" }}>
            Estoy abriendo mi camino como desarrollador y estoy buscando oportunidades para
            sumar experiencia, aprender de equipos reales y aportar en proyectos con sentido.
            Si tenés una propuesta, un proyecto o una conversación interesante, me encantaría
            conocerla.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="mailto:leonelagustin.arce@estudiantes.unahur.edu.ar"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "var(--card)", minHeight: "52px" }}
            >
              <IconMail />
              leonelagustin.arce@estudiantes.unahur.edu.ar
            </a>
            <a
              href="https://www.linkedin.com/in/leonel-agustin-arce-a7090b2a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "var(--card)", minHeight: "52px" }}
              aria-label="LinkedIn de Leonel Arce"
            >
              <IconLinkedin />
              linkedin.com/in/leonel-agustin-arce
            </a>
            <a
              href="https://github.com/LeonelAgustinArce"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)", background: "var(--card)", minHeight: "52px" }}
              aria-label="GitHub de Leonel Arce"
            >
              <IconGithub />
              github.com/LeonelAgustinArce
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
