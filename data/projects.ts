// project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

export const ProjectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/aymandandan/ecommerce-platform",
    demo: "https://ecommerce-demo.aymandandan.com",
    category: "web",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, smooth animations, and a clean, minimalist design.",
    image: "/images/projects/portfolio.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/aymandandan/portfolio",
    demo: "https://aymandandan.com",
    category: "web",
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
    image: "/images/projects/taskapp.jpg",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    github: "https://github.com/aymandandan/task-management-app",
    demo: "https://tasks.aymandandan.com",
    category: "web",
  },
  {
    id: "4",
    title: "UI/UX Design System",
    description:
      "A comprehensive design system with reusable components, design tokens, and documentation for consistent UI development.",
    image: "/images/projects/design-system.jpg",
    tags: ["Figma", "Storybook", "React", "Styled Components"],
    github: "https://github.com/aymandandan/design-system",
    demo: "https://design.aymandandan.com",
    category: "design",
  },
  {
    id: "5",
    title: "Mobile App Development",
    description:
      "A cross-platform mobile application built with React Native, featuring offline support, push notifications, and native performance.",
    image: "/images/projects/mobile-app.jpg",
    tags: ["React Native", "Expo", "Redux", "Firebase"],
    github: "https://github.com/aymandandan/mobile-app",
    demo: "https://expo.dev/@aymandandan/app",
    category: "mobile",
  },
  {
    id: "6",
    title: "Data Visualization Dashboard",
    description:
      "An interactive dashboard for data analysis and visualization with real-time data updates and custom reporting.",
    image: "/images/projects/dashboard.jpg",
    tags: ["D3.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/aymandandan/data-dashboard",
    demo: "https://dashboard.aymandandan.com",
    category: "web",
  },
];
