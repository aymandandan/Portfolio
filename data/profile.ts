import { Project, ProjectsData } from "./projects";
import { Service, ServicesData } from "./services";
import { Update, UpdatesData } from "./updates";
import { Skill, SkillsData } from "./skills";
import { Education, EducationData } from "./education";
import { Experience, ExperienceData } from "./experience";
import { Contact, ContactData } from "./contact";

// profile interface
interface Profile {
  name: string;
  title: string;
  description: string;
  role: string;
  bio: string;
  email: string;
  avatar: string;
  availability: string;
  about: {
    intro: string;
    story: string;
    cvUrl: string;
  };
  services: Service[];
  projects: Project[];
  updates: Update[];
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  contact: Contact;
}

// profile data
export const profileData: Profile = {
  name: "Ayman Dandan",
  title: "Software Engineer",
  description: "Ayman Dandan | Software Engineer",
  role: "Software Engineer & Web Developer",
  bio: "I build exceptional digital experiences with clean, efficient code and thoughtful design.",
  email: "ayman@example.com",
  avatar: "/images/Profile.jpg",
  availability: "Freelance & Full-time",
  about: {
    intro:
      "I'm a passionate software engineer with a strong focus on creating beautiful, functional, and user-centered digital experiences. With over 5 years of experience in the industry, I've had the privilege of working with various technologies and delivering high-quality solutions to clients worldwide.",
    story:
      "My journey in technology began when I built my first website at the age of 15, and I've been hooked ever since. I believe in clean, efficient code and thoughtful design that not only looks great but also delivers real value to users.",
    cvUrl: "/resume.pdf",
  },
  services: ServicesData,
  projects: ProjectsData,
  updates: UpdatesData,
  education: EducationData,
  experience: ExperienceData,
  skills: SkillsData,
  contact: ContactData,
};

export const dynamicPath = `${process.env.NODE_ENV === 'production' ? '/Portfolio' : ''}`;
