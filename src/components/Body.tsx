import { FileUp, FileText, BriefcaseBusiness, TrendingUp } from "lucide-react";
import DropZone from "./DropZone";
import JobDescription from "./JobDescription";
import AnalyzeButton from "./AnalyzeButton";
import { useState } from "react";
import ScoreCircle from "./ScoreCircle";
import KeywordAnalysis from "./KeywordAnalysis";
import useAnalyze from "../hooks/useAnalyze";

type View = "upload" | "result";
function Body() {
  const [view, setView] = useState<View>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const canSubmit = (resumeText || file) && jobDescription;
  const mutation = useAnalyze();

  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden p-8 bg-slate-50">
        {view == "upload" ? (
          <>
            <Tabs view={view} setView={setView} />
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
          </>
        ) : (
          <>
            <Tabs view={view} setView={setView} />
            <div className=" flex items-center justify-center">
              <span className=" tracking-wide font-manrope flex items-center justify-center  text-xs bg-indigo-100 px-3 py-1 rounded-full m-8 font-bold text-indigo-600 uppercase">
                analysis complete
              </span>
            </div>
            <div className=" flex items-center justify-center">
              <span className=" font-manrope flex items-center justify-center  text-4xl font-bold ">
                Results
              </span>
            </div>
            <ScoreCircle score={50} />
            <div className="flex flex-col flex-1">
              <KeywordAnalysis />
            </div>
          </>
        )}
      </main>
    </>
  );
}

function Description() {
  return (
    <div className="mt-8">
      <span className="text-4xl font-bold block">New Analysis</span>
      <span className=" block text-lg font-normal text-[#475569] leading-relaxed mt-2">
        Upload your resume and and job description to see if they match!
      </span>
    </div>
  );
}

function Tabs({
  view,
  setView,
}: {
  view: View;
  setView: (view: View) => void;
}) {
  return (
    <>
      <div className="flex items-center border-b-2 border-slate-100 gap-8">
        <button
          className={`font-manrope text-sm font-semibold tracking-tight pb-4 -mb-px transition-all duration-200 ${view == "upload" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-400 border-b-2 border-transparent hover:text-slate-600"} hover:font-bold`}
          onClick={() => {
            setView("upload");
          }}
        >
          1. Upload
        </button>
        <button
          className={`font-manrope text-sm font-semibold tracking-tight pb-4 -mb-px transition-all duration-200 ${view == "result" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-400 border-b-2 border-transparent hover:text-slate-600"} hover:font-bold`}
          onClick={() => {
            setView("result");
          }}
        >
          2. Result
        </button>
      </div>
    </>
  );
}

export default Body;
