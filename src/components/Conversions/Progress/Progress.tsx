import progress_ss from "@assets/images/conversions/progress.png";

console.log("pro gress_ss", progress_ss);

export default function Progress() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Progress</h1>
      <div className="container w-10/12 mx-auto p-4 py-8 border-[3px] shadow-[5px_5px] border-black rounded-2xl bg-violet-100">
        <img src={progress_ss} alt="Progress" />
      </div>
      <div className="container w-10/12 mx-auto p-4 py-8 border-[3px] shadow-[5px_5px] border-black rounded-2xl bg-violet-100">
        <div className="progress bg-white p-[90px] mx-auto max-w-md box-content rounded-4xl font-['Inter']">
          <div className="grid grid-rows-[50px_1fr] gap-4">
            <h1 className="!font-['Merriweather'] font-black text-2xl">
              Your Progress
            </h1>
            <div className="grid grid-cols-[1fr_2fr]">
              <div className="">
                <div
                  className="font-black text-black ring-indigo-100 rounded-full bg-white ring-8 shadow-lg flex items-center justify-center"
                  style={{ height: "118px", width: "118px", fontSize: "28px" }}
                >
                  93%
                </div>
              </div>
              <div className="status">
                <div className="completion font-bold text-2xl">
                  32 of 42 complete
                </div>
                <div className="status">Finish course to get certificate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
