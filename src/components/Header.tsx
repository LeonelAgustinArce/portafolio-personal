import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio", id: "inicio" },
  { href: "#sobre-mi", label: "Sobre mí", id: "sobre-mi" },
  { href: "#proyectos", label: "Proyectos", id: "proyectos" },
  { href: "#contacto", label: "Contacto", id: "contacto" },
];

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

interface Props {
  theme: "dark" | "light";
  onToggleTheme: () => void;
  activeSection: string;
}

export default function Header({ theme, onToggleTheme, activeSection }: Props) {
  const isDark = theme === "dark";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: isDark ? "rgba(26,26,26,0.92)" : "rgba(245,245,245,0.92)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            className="font-bold text-base tracking-tight"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--foreground)" }}
            aria-label="Leonel Arce | Developer — inicio"
          >
            <span style={{ color: "var(--accent)" }}>{"<"}</span>
            Leonel Arce
            <span style={{ color: "var(--accent)" }}>{"/>"}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={`nav-link text-sm font-medium ${activeSection === l.id ? "active" : ""}`}
                style={{ color: activeSection === l.id ? "var(--foreground)" : "var(--muted-foreground)" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/LeonelAgustinArce"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub de Leonel Arce"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/leonel-agustin-arce-a7090b2a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn de Leonel Arce"
            >
              <IconLinkedin />
            </a>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
