import { FileUp, FileText } from "lucide-react";
function ResumeDropzone() {
  return (
    <>
      <div className="mt-8 h-auto w-1/2">
        <div className="flex">
          <FileText className="text-indigo-600" />
          <p className="text-xl mb-4 pl-3 font-bold">Upload Resume</p>
        </div>
        <div className=" bg-white border border-slate-100 shadow-sm w-full h-screen rounded-2xl p-8 flex flex-col ">
          <div className="flex flex-col items-center justify-center text-center mb-2 border-2 border-dashed border-slate-300 bg-slate-50 p-12 flex-1 rounded-2xl">
            <div className="flex w-12 h-12 rounded-xl items-center justify-center text-center bg-indigo-100 m-3">
              <FileUp className="text-indigo-600" />
            </div>
            <span className="font-bold text-lg text-slate-500">
              Drag and Drop resume here
            </span>
            <span className="text-slate-500 text-sm mt-1">
              PDF, DOCX up to 10MB
            </span>
            <button className=" mt-3 border border-slate-200 font-semibold py-2 px-4 text-indigo-600 rounded-2xl hover:bg-slate-100 transition-colors shadow-sm  duration-200 active:scale-[0.98]">
              Browse Files
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className=" h-px bg-gray-200 w-1/4 flex-1" />
            <span className="m-3 font-bold text-xs text-slate-400">
              OR PASTE TEXT
            </span>
            <div className=" h-px bg-gray-200 w-1/4 flex-1" />
          </div>

          <textarea
            placeholder="Paste your resume ..."
            className=" resize-none m-3 font-normal text-s text-slate-400 border border-slate-100 rounded-2xl bg-slate-50 flex-1 p-4"
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default ResumeDropzone;
