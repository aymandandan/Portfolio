// experience interface
export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
}

// experience data
export const ExperienceData: Experience[] = [
    {
        role: "Software Engineer",
        company: "Tech Innovations Inc.",
        period: "2020 - Present",
        description: [
            "Developed and maintained responsive web applications using React and Node.js",
            "Collaborated with cross-functional teams to deliver high-quality software solutions",
            "Implemented new features and optimized existing code for better performance"
        ]
    },
    {
        role: "Frontend Developer",
        company: "Digital Creations",
        period: "2018 - 2020",
        description: [
            "Built interactive user interfaces using modern JavaScript frameworks",
            "Worked closely with designers to implement pixel-perfect UIs",
            "Improved application performance through code optimization"
        ]
    }
];
