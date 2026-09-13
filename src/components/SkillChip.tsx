export default function SkillChip({ label }: { label: string }) {
  return (
    <span className="chip px-3 py-1 rounded-md inline-block">{label}</span>
  );
}
