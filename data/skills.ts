// skill interface
export interface Skill {
    name: string;
    items: {
        name: string;
        level: number;
    }[];
}

// skill data
export const SkillsData: Skill[] = [
    {
        name: "Frontend Development",
        items: [
            { name: "HTML5 & CSS3", level: 95 },
            { name: "JavaScript (ES6+)", level: 88 },
            { name: "React.js", level: 85 },
            { name: "Vue.js", level: 80 },
            { name: "Responsive Design", level: 90 }
        ]
    },
    {
        name: "Backend Development",
        items: [
            { name: "Node.js", level: 85 },
            { name: "Python", level: 80 },
            { name: "Express", level: 82 },
            { name: "RESTful APIs", level: 85 },
            { name: "Database Design", level: 78 }
        ]
    }
];
