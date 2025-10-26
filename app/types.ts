
export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type Project = {
  title: string;
  link: string;
  techStack: string;
  bullets: string[];
};

export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  education: {
    school: string;
    college: string;
    degree: string;
    location: string;
    graduation: string;
  };
  skills: {
    languages: string;
    technologies: string;
  };
  experience: Experience[];
  projects: Project[];
  sections?: { key: string; label: string }[];
};