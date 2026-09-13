import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import type { Project } from "../types";

type Filter = "Todos" | Project["category"];
const FILTERS: Filter[] = ["Todos", "Frontend", "Backend", "Full Stack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");

  const filtered =
    activeFilter === "Todos"
      ? Array.from(new Map(projectsData.map((project) => [project.title, project])).values())
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="py-20 lg:py-28" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: "1200px" }}>
        <div className="fade-in mb-10">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            02 / Proyectos
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight" style={{ color: "var(--foreground)" }}>
            Proyectos seleccionados
          </h2>
          <p className="text-base max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            Algunos ejemplos de trabajo donde apliqué lógica de negocio, experiencia de usuario,
            consumo de APIs y buenas prácticas de desarrollo en aplicaciones web.
          </p>
        </div>

        {/* Filters */}
        <div className="fade-in flex flex-wrap gap-2 mb-10" style={{ transitionDelay: "0.05s" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`filter-btn px-4 py-2 rounded-lg border text-xs font-medium ${activeFilter === f ? "active" : ""}`}
              style={{
                borderColor: activeFilter === f ? "var(--primary)" : "var(--border)",
                color: activeFilter === f ? "var(--primary-foreground)" : "var(--muted-foreground)",
                background: activeFilter === f ? "var(--primary)" : "transparent",
                minHeight: "44px",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{ transitionDelay: "0.1s" }}
        >
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center py-12 text-sm" style={{ color: "var(--muted-foreground)" }}>
              No hay proyectos en esta categoría aún.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
