import { useState } from "react";

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

function IconSend() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--background)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    caretColor: "var(--accent)",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--accent)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "var(--border)";
  };

  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="fade-in grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
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

          {/* Right – form */}
          <div
            className="p-8 rounded-2xl"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {sent ? (
              <div className="text-center py-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--muted)", border: "1px solid var(--border)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-base mb-1" style={{ color: "var(--foreground)" }}>
                  ¡Mensaje enviado!
                </p>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  Te respondo a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Cuéntame sobre el proyecto o la oportunidad..."
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold"
                  style={{ minHeight: "48px" }}
                >
                  <IconSend />
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
