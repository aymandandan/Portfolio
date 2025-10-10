// update interface
export interface Update {
  id: number;
  title: string;
  date: string;
  category: string;
  readTime: number;
  excerpt: string;
  content: string;
}

export const UpdatesData: Update[] = [
  {
    id: 1,
    title: "Launched New Portfolio Website",
    date: "2023-10-05",
    category: "Project",
    readTime: 2,
    excerpt:
      "Redesigned and launched my personal portfolio website using Next.js and Tailwind CSS, focusing on performance and accessibility.",
    content:
      "I'm excited to share my newly redesigned portfolio website! Built with Next.js 13 and Tailwind CSS, this version focuses on performance, accessibility, and a clean user experience. The site features dark mode, smooth animations, and is fully responsive across all devices. I've also implemented image optimization and code splitting to ensure fast load times.",
  },
  {
    id: 2,
    title: "Completed Advanced React Course",
    date: "2023-09-28",
    category: "Learning",
    readTime: 3,
    excerpt:
      "Finished an advanced React course covering hooks, context API, and performance optimization techniques.",
    content:
      "Just completed an intensive React course that deepened my understanding of React's core concepts. The course covered advanced topics including custom hooks, the Context API, performance optimization with useMemo and useCallback, and server-side rendering with Next.js. I've already started implementing these techniques in my projects to create more efficient and maintainable code.",
  },
  {
    id: 3,
    title: "Open Source Contribution",
    date: "2023-09-15",
    category: "Open Source",
    readTime: 4,
    excerpt:
      "Contributed to an open-source project, improving accessibility and adding new features to the component library.",
    content:
      "Made my first significant open-source contribution to a popular React component library. I worked on improving keyboard navigation, enhancing ARIA attributes for better screen reader support, and fixing several accessibility issues. This experience was incredibly valuable for understanding the collaborative nature of open-source development and the importance of accessibility in web applications.",
  },
  {
    id: 4,
    title: "Tech Conference Speaker",
    date: "2023-08-22",
    category: "Speaking",
    readTime: 3,
    excerpt:
      "Spoke at the annual Web Dev Summit about modern web development practices and performance optimization.",
    content:
      "Had an amazing experience speaking at the Web Dev Summit 2023! My talk, 'Building Blazing Fast Web Apps with Modern JavaScript,' covered performance optimization techniques, code splitting, and the latest web APIs. The Q&A session was particularly engaging, with great discussions about the future of web development and emerging technologies.",
  },
  {
    id: 5,
    title: "E-commerce Project Launch",
    date: "2023-08-10",
    category: "Project",
    readTime: 4,
    excerpt:
      "Successfully launched a full-stack e-commerce platform with React, Node.js, and MongoDB.",
    content:
      "I'm thrilled to announce the launch of a major e-commerce project I've been working on! The platform features a responsive React frontend, a robust Node.js/Express backend, and MongoDB for data storage. Key features include user authentication, product catalog, shopping cart, order management, and payment processing integration. The project was a great learning experience in handling complex state management and ensuring a smooth user experience.",
  },
  {
    id: 6,
    title: "TypeScript Migration Complete",
    date: "2023-07-25",
    category: "Development",
    readTime: 3,
    excerpt:
      "Completed migration of a large JavaScript codebase to TypeScript, improving type safety and developer experience.",
    content:
      "After several months of work, I've successfully completed the migration of our main project from JavaScript to TypeScript! The process involved setting up the TypeScript configuration, gradually migrating files, and adding proper type definitions. The benefits have been immediately apparent, with fewer runtime errors and much better developer experience thanks to improved IDE support and code navigation.",
  },
  {
    id: 7,
    title: "UI/UX Design Workshop",
    date: "2023-07-10",
    category: "Workshop",
    readTime: 2,
    excerpt:
      "Conducted a workshop on modern UI/UX design principles and best practices for developers.",
    content:
      "Led an interactive workshop on UI/UX design principles for developers. We covered topics like color theory, typography, spacing, and accessibility. The hands-on session included redesigning a poorly designed interface, which helped participants understand the impact of good design on user experience. The feedback was overwhelmingly positive, and I'm looking forward to hosting more workshops in the future!",
  },
  {
    id: 8,
    title: "Performance Optimization Case Study",
    date: "2023-06-28",
    category: "Article",
    readTime: 5,
    excerpt:
      "Published a case study on improving web application performance by 60% through various optimization techniques.",
    content:
      "I recently published a detailed case study about a performance optimization project I worked on. The article dives into the techniques used to improve the application's performance by 60%, including code splitting, lazy loading, image optimization, and efficient state management. I also shared the tools and metrics used to measure performance improvements. The response has been fantastic, with many developers reaching out to discuss the implementation details and share their own experiences.",
  },
];
