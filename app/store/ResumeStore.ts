import {create} from "zustand"; 
import { Experience, Project, ResumeData } from "../types";
import { initialData } from "../ResumeData";


type ResumeStore = {
  resumeData: ResumeData;
  addProject: (project: Project) => void;
  addExperience: (experience: Experience) => void;
  updateResumeData: (newData: ResumeData) => void;
};

const resumeStore = create<ResumeStore>((set) => ({
  resumeData: initialData,
  addProject: (project: Project) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        projects: [...state.resumeData.projects, project],
      },
    })),
  addExperience: (experience: Experience) =>
    set((state) => ({
      resumeData: {
        ...state.resumeData,
        experience: [...state.resumeData.experience, experience],
      },
    })),
  updateResumeData: (newData: ResumeData) => set(() => ({ resumeData: newData })),
}));

export default resumeStore;