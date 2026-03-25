import { FileUp, FileText, BriefcaseBusiness } from "lucide-react";
import ResumeDropzone from "./ResumeDropzone";
import JobDescriptionzone from "./JobDescriptionzone";
function Body() {
  return (
    <>
      <main className="p-8 bg-slate-50">
        <Description />

        <div className="flex gap-6 min-h-150 ">
          <ResumeDropzone />
          <JobDescriptionzone />
        </div>

        <AnalyzeButton />
      </main>
    </>
  );
}

function Description() {
  return (
    <div>
      <span className="text-4xl font-bold block">New Analysis</span>
      <span className=" block text-lg font-normal text-[#475569] leading-relaxed mt-2">
        Upload your resume and and job description to see if they match!
      </span>
    </div>
  );
}

function AnalyzeButton() {
  return (
    <div className="items-center justify-center text-center mt-10 ">
      <button className="bg-indigo-600 text-white font-semibold tracking-wide w-1/6 h-12 hover:bg-indigo-700 rounded-xl shadow-sm mt-8 active:scale-[0.98]">
        Analyze Now
      </button>
    </div>
  );
}

export default Body;
