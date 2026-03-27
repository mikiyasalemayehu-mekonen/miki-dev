export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "RecipeBox",
    description:
      "Cook something amazing today. Discover, create, and organize your favorite recipes in one beautifully crafted place with smart ingredient filtering, custom tags, and simple sharing tools.",
    image: "/public/imgs/recipebox.png",
    tags: ["React", "TypeScript", "Django", "Tailwind CSS", "Python"],
    links: {
      github: "https://github.com/mikiyasalemayehu-mekonen/RecipeBox",
      live: "https://recipe-box-pi-pink.vercel.app/",
    },
  },
  {
    id: 2,
    title: "LMS Course Platform",
    description:
      "A comprehensive, full-stack Learning Management System built from scratch with admin dashboard for course management, customer dashboard for progress tracking, custom video player, Stripe payments, and advanced security features.",
    image: "/imgs/lms.png",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Better-Auth",
      "Arcjet",
    ],
    links: {
      github: "https://github.com/mikiyasalemayehu-mekonen/school-lms",
      live: "https://school-lms-ten.vercel.app/",
    },
  },
  {
    id: 3,
    title: "A2SV Application Platform",
    description:
      "A web-based system designed to replace the manual A2SV application process, streamlining workflows for Applicants, Reviewers, Managers, and Admins.",
    image: "/imgs/a2sv.png",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/joorayanne/G10-Starter-Project",
      live: "https://g10-starter-project-git-master-nana-ds-projects.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Menumate",
    description:
      "A digital restaurant menu and order management system, allowing customers to browse, order, and track their meals seamlessly.",
    image: "/imgs/menumate.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    links: {
      github:
        "https://github.com/mikiyasalemayehu-mekonen/G6-MenuMate/tree/main",
      live: "https://dineqmenumate.vercel.app/",
    },
  },
  {
    id: 5,
    title: "GameHub",
    description:
      "A modern gaming discovery platform where users can explore and filter games, built with React and TypeScript.",
    image: "/imgs/gamehub.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    links: {
      github: "https://github.com/mikiyasalemayehu-mekonen/game-hub",
      live: "https://game-hub-beta-jet.vercel.app/",
    },
  },
  {
    id: 6,
    title: "FitNest",
    description:
      "A fitness tracking app built with Flutter and Firebase, featuring workout plans, progress tracking, and personalized health insights.",
    image: "/imgs/fitnest.png",
    tags: ["Flutter", "Firebase", "Authentication"],
    links: {
      github: "https://github.com/mikiyasalemayehu-mekonen/FitNest",
      live: "",
    },
  },
];
