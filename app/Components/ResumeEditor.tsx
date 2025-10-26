"use client";

import { ChangeEvent, useState } from "react";
import { ResumeData, Project, Experience } from "../types";
import { initialData } from "../ResumeData";
import resumeStore from "../store/ResumeStore";

const fieldClass =
  "w-full rounded-xl border border-neutral-700 bg-[#111118]/80 px-3 py-2 text-sm text-neutral-100 shadow-sm transition focus:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-700/60";

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400";
const sectionHeaderClass = "text-sm font-semibold text-neutral-200";
const sectionContainerClass =
  "space-y-3 rounded-2xl border border-neutral-700/80  p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]";

export default function ResumeEditor() {
  const data = resumeStore((s) => s.resumeData);
  const updateResumeData = resumeStore((s) => s.updateResumeData);
  const addProject = resumeStore((s) => s.addProject);
  const addExperience = resumeStore((s) => s.addExperience);
  const [selectedSection, setSelectedSection] = useState<string>(
    initialData.sections ? initialData.sections[0].key : 'contact'
  );
  const handleChange = (
    section: keyof ResumeData,
    key: string,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newSection = { ...(data[section] as Record<string, unknown>) };
    newSection[key] = event.target.value;
    const newData: ResumeData = { ...data, [section]: newSection } as ResumeData;
    updateResumeData(newData);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string,
  ) => {
    const updated = [...data.experience];
    const item = updated[index];
    if (field === 'bullets') return;
    updated[index] = { ...item, [field]: value };
    const newData: ResumeData = { ...data, experience: updated };
    updateResumeData(newData);
  };

  const handleExperienceBulletChange = (
    section: "experience" | "projects",
    entryIndex: number,
    bulletIndex: number,
    value: string,
  ) => {
    if (section === 'experience') {
      const updated = [...data.experience];
      const entry = updated[entryIndex];
      const updatedBullets = [...entry.bullets];
      updatedBullets[bulletIndex] = value;
      updated[entryIndex] = { ...entry, bullets: updatedBullets };
      const newData: ResumeData = { ...data, experience: updated };
      updateResumeData(newData);
      return;
    }

    const updated = [...data.projects];
    const entry = updated[entryIndex];
    const updatedBullets = [...entry.bullets];
    updatedBullets[bulletIndex] = value;
    updated[entryIndex] = { ...entry, bullets: updatedBullets };
    const newData: ResumeData = { ...data, projects: updated };
    updateResumeData(newData);
  };

  const handleProjectChange = (
    index: number,
    field: keyof Project,
    value: string,
  ) => {
    const updated = [...data.projects];
    const item = updated[index];
    if (field === 'bullets') return;
    updated[index] = { ...item, [field]: value };
    const newData: ResumeData = { ...data, projects: updated };
    updateResumeData(newData);
  };

  return (
    <aside className="flex h-full w-full flex-col overflow-hidden rounded-[26px]">
      <div className="space-y-1 px-2">
        <h2 className="text-lg font-semibold text-neutral-100">Editor</h2>
       <div className="flex flex-row gap-2 overflow-x-auto">
         {data.sections?.map((s) => {
           const active = selectedSection === s.key;
           return (
             <button
               key={s.key}
               type="button"
               onClick={() => setSelectedSection(s.key)}
               className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm transition focus:outline-none ${
                 active
                   ? 'bg-[#1e1e29] border border-neutral-500 text-neutral-100'
                   : 'bg-transparent border border-neutral-700 text-neutral-400 hover:bg-[#0f0f14]'
               }`}
             >
               {s.label}
             </button>
           );
         })}
       </div>
      </div>

      <div className="mt-5 flex-1 space-y-5 overflow-y-auto pr-2">
  <section className={sectionContainerClass} style={{ display: selectedSection === 'contact' ? 'block' : 'none' }}>
          <h3 className={sectionHeaderClass}>Contact</h3>
          <div className="grid grid-cols-1 gap-3">
            <label className="space-y-1">
              <span className={labelClass}>Full Name</span>
              <input
                className={fieldClass}
                value={data.name}
                onChange={(event) =>
                  updateResumeData({ ...data, name: event.target.value })
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Email</span>
              <input
                className={fieldClass}
                value={data.email}
                onChange={(event) =>
                  updateResumeData({ ...data, email: event.target.value })
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Phone</span>
              <input
                className={fieldClass}
                value={data.phone}
                onChange={(event) =>
                  updateResumeData({ ...data, phone: event.target.value })
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Portfolio</span>
              <input
                className={fieldClass}
                value={data.website}
                onChange={(event) =>
                  updateResumeData({ ...data, website: event.target.value })
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>GitHub</span>
              <input
                className={fieldClass}
                value={data.github}
                onChange={(event) =>
                  updateResumeData({ ...data, github: event.target.value })
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>LinkedIn</span>
              <input
                className={fieldClass}
                value={data.linkedin}
                onChange={(event) =>
                  updateResumeData({ ...data, linkedin: event.target.value })
                }
              />
            </label>
          </div>
        </section>

  <section className={sectionContainerClass} style={{ display: selectedSection === 'education' ? 'block' : 'none' }}>
          <h3 className={sectionHeaderClass}>Education</h3>
          <div className="grid grid-cols-1 gap-3">
            <label className="space-y-1">
              <span className={labelClass}>School</span>
              <input
                className={fieldClass}
                value={data.education.school}
                onChange={(event) =>
                  handleChange("education", "school", event)
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>College / Program</span>
              <input
                className={fieldClass}
                value={data.education.college}
                onChange={(event) =>
                  handleChange("education", "college", event)
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Degree</span>
              <input
                className={fieldClass}
                value={data.education.degree}
                onChange={(event) =>
                  handleChange("education", "degree", event)
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Location</span>
              <input
                className={fieldClass}
                value={data.education.location}
                onChange={(event) =>
                  handleChange("education", "location", event)
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Graduation</span>
              <input
                className={fieldClass}
                value={data.education.graduation}
                onChange={(event) =>
                  handleChange("education", "graduation", event)
                }
              />
            </label>
          </div>
        </section>

  <section className={sectionContainerClass} style={{ display: selectedSection === 'skills' ? 'block' : 'none' }}>
          <h3 className={sectionHeaderClass}>Skills</h3>
          <div className="grid grid-cols-1 gap-3">
            <label className="space-y-1">
              <span className={labelClass}>Languages</span>
              <textarea
                className={fieldClass}
                rows={2}
                value={data.skills.languages}
                onChange={(event) =>
                  handleChange("skills", "languages", event)
                }
              />
            </label>

            <label className="space-y-1">
              <span className={labelClass}>Technologies</span>
              <textarea
                className={fieldClass}
                rows={2}
                value={data.skills.technologies}
                onChange={(event) =>
                  handleChange("skills", "technologies", event)
                }
              />
            </label>
          </div>
        </section>

  <section className={sectionContainerClass} style={{ display: selectedSection === 'experience' ? 'block' : 'none' }}>
          <div className="w-full flex flex-row justify-between">
            <h3 className={sectionHeaderClass}>Experience</h3>
            <button
              type="button"
              title="Add Experience"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span>Add Experience</span>
            </button>
          </div>
          <div className="space-y-6">
            {data.experience.map((job, index) => (
              <div key={job.company} className="space-y-3 rounded-xl border border-neutral-700 bg-[#17171f] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="space-y-1">
                    <span className={labelClass}>Company</span>
                    <input
                      className={fieldClass}
                      value={job.company}
                      onChange={(event) =>
                        handleExperienceChange(
                          index,
                          "company",
                          event.target.value,
                        )
                      }
                    />
                  </label>

                  <label className="space-y-1">
                    <span className={labelClass}>Role</span>
                    <input
                      className={fieldClass}
                      value={job.role}
                      onChange={(event) =>
                        handleExperienceChange(
                          index,
                          "role",
                          event.target.value,
                        )
                      }
                    />
                  </label>

                  <label className="space-y-1 sm:col-span-2">
                    <span className={labelClass}>Dates</span>
                    <input
                      className={fieldClass}
                      value={job.dates}
                      onChange={(event) =>
                        handleExperienceChange(
                          index,
                          "dates",
                          event.target.value,
                        )
                      }
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <span className={labelClass}>Highlights</span>
                  {job.bullets.map((bullet, bulletIndex) => (
                    <textarea
                      key={`${job.company}-${bulletIndex}`}
                      className={fieldClass}
                      rows={3}
                      value={bullet}
                      onChange={(event) =>
                        handleExperienceBulletChange(
                          "experience",
                          index,
                          bulletIndex,
                          event.target.value,
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

  <section className={sectionContainerClass} style={{ display: selectedSection === 'projects' ? 'block' : 'none' }}>
          <div className="w-full justify-between flex flex-row">
            <h3 className={sectionHeaderClass}>Projects</h3>
            <button
              type="button"
              title="Add Project"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
              <span>Add Project</span>
            </button>
          </div>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={project.title} className="space-y-3 rounded-xl border border-neutral-700 bg-[#17171f] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <div className="grid grid-cols-1 gap-3">
                  <label className="space-y-1">
                    <span className={labelClass}>Project Title</span>
                    <input
                      className={fieldClass}
                      value={project.title}
                      onChange={(event) =>
                        handleProjectChange(
                          index,
                          "title",
                          event.target.value,
                        )
                      }
                    />
                  </label>

                  <label className="space-y-1">
                    <span className={labelClass}>Tech Stack</span>
                    <input
                      className={fieldClass}
                      value={project.techStack}
                      onChange={(event) =>
                        handleProjectChange(
                          index,
                          "techStack",
                          event.target.value,
                        )
                      }
                    />
                  </label>

                  <label className="space-y-1">
                    <span className={labelClass}>Repository / Link</span>
                    <input
                      className={fieldClass}
                      value={project.link}
                      onChange={(event) =>
                        handleProjectChange(
                          index,
                          "link",
                          event.target.value,
                        )
                      }
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <span className={labelClass}>Highlights</span>
                  {project.bullets.map((bullet, bulletIndex) => (
                    <textarea
                      key={`${project.title}-${bulletIndex}`}
                      className={fieldClass}
                      rows={3}
                      value={bullet}
                      onChange={(event) =>
                        handleExperienceBulletChange(
                          "projects",
                          index,
                          bulletIndex,
                          event.target.value,
                        )
                      }
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="button"
            className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 transition hover:border-neutral-500 hover:text-neutral-100"
          >
            Discard
          </button>
          <button
            type="button"
            className="rounded-full border border-neutral-700 bg-[#1e1e29] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-100 shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition hover:border-neutral-400 hover:bg-[#262633]"
          >
            Save Draft
          </button>
        </div>
      </div>
    </aside>
  );
}
