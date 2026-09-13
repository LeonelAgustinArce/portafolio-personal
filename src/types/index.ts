export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: "Frontend" | "Backend" | "Full Stack";
  description: string;
  features: string[];
  tags: string[];
  repo: string;
  demo?: string;
  image: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status: string;
}
