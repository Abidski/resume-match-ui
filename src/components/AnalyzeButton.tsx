import { FileUp, FileText, BriefcaseBusiness } from "lucide-react";
import { useState } from "react";
import useAnalyze from "../hooks/useAnalyze";

interface AnalyzeButtonProps {
  jobDescription: string;
  resumeText: string;
  file: File | null;
}
function AnalyzeButton({
  jobDescription,
  resumeText,
  file,
}: AnalyzeButtonProps) {
  const mutation = useAnalyze();
  const canSubmit = (file || resumeText) && jobDescription;

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
    mutation.mutate(data);
  }

  return (
    <div className="items-center justify-center text-center mt-10 ">
      <button
        onClick={onClick}
        className="bg-indigo-600 text-white font-semibold tracking-wide w-1/6 h-12 hover:bg-indigo-700 rounded-xl shadow-sm mt-8 active:scale-[0.98]"
      >
        {mutation.isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Analyzing...
          </span>
        ) : canSubmit ? (
          "Analyze Now"
        ) : (
          "Fill in both fields"
        )}
      </button>
    </div>
  );
}

export default AnalyzeButton;
