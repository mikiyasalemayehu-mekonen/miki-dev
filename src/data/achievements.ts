
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [

  {
    id: 1,
    title: "1st Place - SWENETIX Hiring Hackathon Winner",
    type: "competition",
    year: "2026",
    description: "Won first place for developing an authentic code checker during the 24-hour hackathon.",
    icon: Trophy,
  },

  {
    id: 2,
    title: "Python Certification",
    type: "certification",
    year: "2023",
    description: "Completed comprehensive Python programming certification.",
    icon: Award,
  },
  {
    id: 3,
    title: "SQL Certification",
    type: "certification",
    year: "2022",
    description: "Earned certification in SQL database management and querying.",
    icon: Award,
  },
  {
    id: 6,
    title: "Prompt Engineering Certification",
    type: "certification",
    year: "2023",
    description: "Completed specialized training in AI prompt engineering techniques.",
    icon: Award,
  },
];
