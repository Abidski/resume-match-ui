import { FileUp, FileText, BriefcaseBusiness } from "lucide-react";
import DropZone from "./DropZone";
import JobDescription from "./JobDescription";
import AnalyzeButton from "./AnalyzeButton";
import { useState } from "react";
import useAnalyze from "../hooks/useAnalyze";

function Body() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const canSubmit = (resumeText || file) && jobDescription;

  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden p-8 bg-slate-50">
        <Description />

        <div className="flex flex-1 flex-col min-h-0 gap-6 ">
          <div className=" flex-1 flex gap-6 min-h-0">
            <DropZone
              setResume={setFile}
              setResumeText={setResumeText}
              resumeText={resumeText}
            />
            <JobDescription
              jobDescription={jobDescription}
              setJobDescription={setJobDescription}
            />
          </div>
          <AnalyzeButton
            jobDescription={jobDescription}
            resumeText={resumeText}
            file={file}
          />
        </div>
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

export default Body;
