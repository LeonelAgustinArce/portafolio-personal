import { educationData } from "../data/educationData";

export default function Education() {
  return (
    <div>
      <p
        className="text-xs tracking-widest uppercase mb-8"
        style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
      >
        Educación
      </p>
      <div className="flex flex-col">
        {educationData.map((item, i) => (
          <div key={i} className="flex gap-6 pb-10">
            <div className="flex flex-col items-center" style={{ minWidth: "20px" }}>
              <div className="timeline-dot" />
              {i < educationData.length - 1 && (
                <div className="flex-1 w-px mt-2" style={{ background: "var(--border)", minHeight: "40px" }} />
              )}
            </div>
            <div>
              <span
                className="text-xs font-medium mb-1 block"
                style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {item.period}
              </span>
              <h4 className="font-semibold text-base mb-0.5" style={{ color: "var(--foreground)" }}>
                {item.degree}
              </h4>
              <p className="text-sm mb-1" style={{ color: "var(--accent)" }}>
                {item.institution}
              </p>
              <span
                className="inline-flex items-center px-2 py-0.5 rounded text-xs"
                style={{
                  background: "var(--muted)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
