import SkillChip from "./SkillChip";
import { skillsData } from "../data/skillsData";

export default function Skills() {
  return (
    <div>
      {skillsData.map(({ category, items }) => (
        <div key={category} className="mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--muted-foreground)", fontFamily: "'JetBrains Mono', monospace" }}
          >
            {category}
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((s) => (
              <SkillChip key={s} label={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
