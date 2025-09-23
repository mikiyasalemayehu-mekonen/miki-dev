
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
    title: "5th Place - AASTU Smart Logistics Hackathon",
    type: "competition", 
    year: "2024",
    description: "Won fifth place for developing an innovative solution during the 24-hour hackathon.",
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
