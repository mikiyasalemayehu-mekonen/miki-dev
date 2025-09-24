
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS","C++"],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: [ "Django", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
  },
  {
    name: "Tools & Technologies",
    icon: Cpu,
    skills: ["Git", "Agile/Scrum"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Figma", "Wireframing", "Prototyping"],
  },
];
