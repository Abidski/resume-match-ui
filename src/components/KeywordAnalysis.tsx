import { CircleCheck, ChartArea } from "lucide-react";
const KeywordAnalysis = ({ data }: any) => {
  return (
    <>
      <div className="border-solid border-slate-100  rounded-2xl shadow-sm p-8  bg-white">
        <div className="flex gap-2">
          <ChartArea className=" text-indigo-600 text-xl" />
          <span className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-3  mb-8">
            Keyword Analysis
          </span>
        </div>
        <span className=" mb-4 font-bold  text-xs text-slate-500 uppercase tracking-widest">
          Match
        </span>
        <div className="flex items-center gap-2 mt-4 mb-8">
          {data.matching.map((info: string) => (
            <span className=" flex  items-center gap-2 px-3 py-2  bg-indigo-50 border-2 border-solid border-indigo-100 text-slate-900 text-sm font-medium rounded-lg ">
              <CircleCheck className="fill-indigo-600  text-white" />
              {info}
            </span>
          ))}
        </div>
        <span className=" mb-4 font-bold  text-xs text-slate-500 uppercase tracking-widest">
          Missing
        </span>
        <div className="flex items-center gap-2 mt-4">
          {data.missing.map((info: string) => (
            <span className=" flex  items-center gap-2 px-3 py-2  bg-rose-50  border-2  border-solid border-rose-100 text-slate-900 text-sm font-medium rounded-lg ">
              <CircleCheck className="fill-rose-500  text-white" />
              {info}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeywordAnalysis;
