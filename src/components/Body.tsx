function Body() {
  return (
    <>
      <main className="m-8">
        <div>
          <span className="text-4xl font-bold block">New Analysis</span>
          <span className=" block text-lg font-normal text-[#475569] leading-relaxed mt-2">
            Upload your resume and and job description to see if they match!
          </span>
        </div>

        <div className="flex gap-6">
          <div className="mt-8 h-auto w-1/2">
            <p className="text-xl mb-4 pl-3">Upload Resume</p>
            <div className=" border-2 w-full h-screen rounded-xl p-8 flex flex-col ">
              <div className="border border-dashed flex-1"></div>

              <div className="flex items-center gap-3">
                <div className=" h-px bg-gray-200 w-1/4 flex-1" />
                <span className="m-1">or paste text</span>
                <div className=" h-px bg-gray-200 w-1/4 flex-1" />
              </div>

              <div className="border flex-1"></div>
            </div>
          </div>

          <div className="mt-8 h-auto w-1/2">
            <p className="text-xl mb-4 pl-3">Job Description</p>
            <div className=" border-2 w-full h-screen rounded-xl p-8">
              <div className="border h-1/2"></div>
              <div className="border h-1/2 "></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Body;
