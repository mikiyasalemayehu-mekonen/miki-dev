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
    id: 2,
    title: "Menumate",
    image: "/imgs/menumate.png",
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
    id: 3,
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
    id: 4,
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
