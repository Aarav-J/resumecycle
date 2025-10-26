"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);
import MyDocument from "./Components/MyDocument";
import ResumeEditor from "./Components/ResumeEditor";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#050505] px-4 py-6 text-neutral-100 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full min-h-screen max-w-full flex-col gap-6">
        <header className="flex items-center justify-between rounded-[32px] border border-neutral-700 bg-gradient-to-b from-[#0f0f12] to-[#09090b] px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
          <h1 className="text-lg font-semibold tracking-wide text-neutral-100">Resume Workspace</h1>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
            >
              Recompile
            </button>
            <button
              type="button"
              className="rounded-full border border-neutral-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300 transition hover:border-neutral-500 hover:text-neutral-100"
            >
              Share
            </button>
          </div>
        </header>

        <section className="w-full flex flex-1 flex-col gap-4 rounded-[40px] border border-neutral-800 bg-[#060608] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.5)] lg:flex-row lg:gap-6 lg:p-6">
          <div className="flex h-[calc(100vh-12rem)] w-full items-center justify-center rounded-[32px] border border-neutral-700 bg-[#09090c] p-4 shadow-inner shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:w-1/3">
            <div className="flex h-full w-full overflow-hidden rounded-[28px] border border-neutral-700 bg-black">
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <MyDocument />
              </PDFViewer>
            </div>
          </div>

          <div className="flex h-[calc(100vh-12rem)] w-full rounded-[32px] border border-neutral-700 bg-[#09090c] p-4 shadow-inner shadow-[0_0_0_1px_rgba(255,255,255,0.02)] lg:w-2/3">
            <ResumeEditor />
          </div>
        </section>
      </div>
    </main>
  );
}
