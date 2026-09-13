import type { Project } from "../types";
import SkillChip from "./SkillChip";

function IconExternalLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card block rounded-xl border overflow-hidden"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
      aria-label={`Ver proyecto: ${project.title}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: "var(--muted)" }}>
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span
          className="absolute top-3 right-3 text-xs px-2 py-1 rounded"
          style={{
            background: "rgba(0,0,0,0.6)",
            color: "#E5E5E5",
            fontFamily: "'JetBrains Mono', monospace",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3
          className="font-semibold text-base mb-0.5"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--card-foreground)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs mb-3" style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}>
          {project.subtitle}
        </p>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <SkillChip key={t} label={t} />
          ))}
        </div>
        <div className="flex gap-3">
          {project.demo && (
            <button
              className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
              onClick={(e) => { e.preventDefault(); window.open(project.demo, "_blank", "noopener"); }}
              style={{ minHeight: "36px" }}
            >
              <IconExternalLink />
              Ver demo
            </button>
          )}
          <button
            className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
            onClick={(e) => { e.preventDefault(); window.open(project.repo, "_blank", "noopener"); }}
            style={{ minHeight: "36px" }}
          >
            <IconCode />
            Ver código
          </button>
        </div>
      </div>
    </a>
  );
}
