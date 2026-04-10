import DropZone from "./DropZone";
import JobDescription from "./JobDescription";
import Todo from "./Todo";
import AnalyzeButton from "./AnalyzeButton";
import { useState } from "react";
import ScoreCircle from "./ScoreCircle";
import KeywordAnalysis from "./KeywordAnalysis";
import useAnalyze from "../hooks/useAnalyze";
import { type AnalyzeResult } from "../types";

type View = "upload" | "result";
function Body() {
  const [view, setView] = useState<View>("upload");
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const mutation = useAnalyze();
  const canSubmit = Boolean((file || resumeText) && jobDescription);

  function onClick() {
    if (!canSubmit) {
      return;
    }
    const data = new FormData();
    if (file) {
      data.append("resume_file", file);
    }
    data.append("resume_text", resumeText);
    data.append("job_description", jobDescription);

    mutation.mutate(data, {
      onSuccess: () => setView("result"), // ← switches view when done
    });
  }

  return (
    <>
      <main className=" flex flex-col overflow-hidden p-8 pt-6 bg-slate-50">
        <Tabs view={view} setView={setView} />
        {view == "upload" ? (
          <>
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
                mutation={mutation}
                canSubmit={canSubmit}
                onClick={onClick}
              />
            </div>
          </>
        ) : (
          <>
            {mutation.isSuccess ? (
              <AnalysisComplete data={mutation.data} />
            ) : (
              <>Please upload resume and job description</>
            )}
          </>
        )}
      </main>
    </>
  );
}

function AnalysisComplete({ data }: any) {
  console.log(data);
  return (
    <>
      <div className="flex flex-col flex-1">
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
        <ScoreCircle score={data.score} />
        <div className="flex justify-center align-middle items-center">
          <span className=" font-manrope font-medium leading-relaxed text-slate-600 text-center max-w-xl mx-auto mt-2 mb-12 text-xs">
            {data.summary}
          </span>
        </div>
        <div className="flex flex-1 gap-4 justify-center align-middle  items-center">
          <KeywordAnalysis data={data} />
          <Todo data={data} />
        </div>
      </div>
    </>
  );
}
function Description() {
  return (
    <div className="mt-8">
      <span className="text-4xl font-bold block">New Analysis</span>
      <span className=" block text-lg font-normal text-[#475569] leading-relaxed mt-2">
        Upload your resume and job description to see if they match!
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
