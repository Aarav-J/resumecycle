
import { ResumeData } from "./types";
export const initialData: ResumeData = {
  name: "Aarav Jain",
  email: "jain925@purdue.edu",
  phone: "848-313-5500",
  website: "https://aaravj.xyz",
  github: "https://github.com/Aarav-J",
  linkedin: "https://www.linkedin.com/in/aaravjain10",
  education: {
    school: "Purdue University",
    college: "Purdue Engineering",
    degree: "Candidate for B.S. in Computer Engineering",
    location: "West Lafayette, IN",
    graduation: "Expected May 2028",
  },
  skills: {
    languages: "Python, HTML/CSS/JavaScript, C/C++, Java, SQL",
    technologies:
      "React, TypeScript, React Native, Docker, AWS, Git, NextJS, Langchain, NumPy, FastAPI, IsaacSim",
  },
  experience: [
    {
      company: "Algoverse",
      role: "Machine Learning Researcher",
      dates: "Aug. 2024 – May 2025",
      bullets: [
        "Developed and deployed a novel evaluation framework using Python and statistical analysis to quantify sycophantic behavior in multi-turn LLM conversations, identifying a 47% accuracy decline over extended interactions",
        "Engineered an end-to-end testing pipeline leveraging OpenAI, Llama, and Claude APIs; integrated TruthfulQA and MMLU datasets from Huggingface to test 5k+ conversation samples, measuring accuracy and sycophancy",
        "Co-authored a research paper documenting the “Truth Decay” methodology, experimental pipeline, findings, and best-practice recommendations; Published at the NAACL 2025 Student Research Workshop (SRW)",
      ],
    },
    {
      company: "CodeConnect",
      role: "Co-Founder, Event and Leadership Manager",
      dates: "Aug. 2023 – Dec. 2024",
      bullets: [
        "Co-founded a coding tutoring nonprofit; authored beginner-to-intermediate curricula in Python, HTML/CSS, and JavaScript through 15+ hands-on projects and solution sets aligned to core CS concepts and real-world web development",
        "Organized and led 10+ public library events (workshops and clubs) serving 70+ students; delivered weekly 1-on-1 mentorship, pair programming, and project-based learning to reinforce fundamentals and teach new coding skills.",
        "Built the website in React and Typescript with a mobile-first, accessible UI; included mentorship and program pages, event schedules, and self-serve registration flows with node-mailer to streamline outreach, sign-ups, and student onboarding",
      ],
    },
    {
      company: "Purdue IDEAS Research Lab",
      role: "Undergraduate Researcher",
      dates: "Oct. 2025 – Present",
      bullets: [
        "Developing an autonomous UAV-UGV natural language collaboration system using LLMs, VLMS, and computer vision to enable navigation and goal-oriented behavior in unstructured environments, leveraging terrain for strategic movement. ",
        "Implementing intelligent control algorithms using reinforcement learning to improve UAV-UGV communication for cooperative path planning to determine the optimal UGV navigation under hostile or uncertain terrain condition.",
      ],
    },
  ],
  projects: [
    {
      title: "Marvel Oracle",
      link: "https://github.com/Aarav-J/marvel_rag",
      techStack: "Python, TypeScript, NextJS, Pinecone, Langchain",
      bullets: [
        "Implemented a chatbot with accurate information, context-aware responses, persistent chat history, and multi-chat sessions",
        "Embedded 9k Marvel Wiki articles into a Pinecone vector index via a BeautifulSoup4 pipeline using automated parsing",
        "Architected a Retrieval Augmented Generation (RAG) platform using Langchain and Pinecone with dense search, metadata filtering, and top-k tuning for real-time chat with 30% increased answer relevance compared to regular LLMs",
        "Developed and deployed a NextJS application with a FastAPI backend to deliver an interactive Marvel chatbot experience.",
      ],
    },
    {
      title: "Bridge",
      link: "https://github.com/Aarav-J/bridge",
      techStack:
        "Next.js, React, TypeScript, Socket.IO, Express, WebRTC, Supabase",
      bullets: [
        "Designed and implemented a structured turn-based video debate system, matching users across opposite ends of the political spectrum using a quiz-based profiling algorithm and real-time topic selection, to enforce civility in debate.",
        "Built the backend using Socket.IO/WebRTC for real-time communication and cross-spectrum matchmaking.",
        "Developed the front-end architecture using Next.JS, React, and Typescript to create a platform for onboarding and debates",
      ],
    },
    {
      title: "RouteNote",
      link: "https://github.com/Aarav-J/routenote",
      techStack: "Python, YOLO, NextJS, TypeScript, OpenCV, FastAPI",
      bullets: [
        "Trained a YOLOV11 model in Python to detect climbing holds on wall images, outputting precise bounding boxes.",
        "Annotated 100+ climbing wall images for hold detection, creating a labeled dataset that improved route classifier accuracy.",
        "Built a YOLO-based color classifier that filters holds by HSV color and confidence scores enabling precise route detection",
        "Developed a Next.JS + Firebase frontend integrated with the route detection API for user notetaking on routes and holds.",
      ],
    },
  ],
  sections: [
    { key: 'contact', label: 'Contact' },
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'projects', label: 'Projects' },
  ],
};