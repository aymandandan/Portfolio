// education interface
export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string[];
}

// education data
export const EducationData: Education[] = [
    {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Technology",
        period: "2014 - 2018",
        description: [
            "Specialized in Web Development and User Experience Design"
        ]
    }
];
