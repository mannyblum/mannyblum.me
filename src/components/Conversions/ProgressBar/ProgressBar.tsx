const menu_options = [
  { id: 1, complete: true, value: "Travelers" },
  { id: 2, complete: true, value: "Seat selection" },
  { id: 3, complete: false, value: "Food & Drink" },
  { id: 4, complete: false, value: "Additional products" },
  { id: 5, complete: false, value: "Payment" },
];

export default function ProgressBar() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Progress Bar</h1>
      <div className="container w-10/12 mx-auto p-4 py-8 border-[3px] shadow-[5px_5px] border-black rounded-2xl bg-violet-100">
        <div className="progress-bar bg-white box-content p-[72px] rounded-4xl font-['Inter']">
          <ul className="list-none flex flex-row gap-x-2 justify-between mb-8 content-evenly">
            {menu_options.map((opt) => {
              return (
                <li className="flex flex-col mx-auto items-center justify-center first:ml-0 last:mr-0">
                  <span
                    className={`mb-3 flex items-center justify-center w-12 h-12 rounded-full ${!opt.complete ? "bg-white text-blue-950 ring-2 ring-inset ring-blue-950" : "bg-blue-950 text-white"}`}
                  >
                    {opt.id}
                  </span>
                  <span
                    className={`block ${opt.complete ? "font-semibold" : "font-normal"}`}
                  >
                    {opt.value}
                  </span>
                </li>
              );
            })}
            {/* <li className="flex flex-col mx-auto items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-blue-950 rounded-full text-white">
                1
              </span>
              <span className="block font-semibold">Travelers</span>
            </li>
            <li className="flex flex-col mx-auto items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-blue-950 rounded-full text-white">
                2
              </span>
              <span className="block font-semibold">Seat selection</span>
            </li>
            <li className="flex flex-col mx-auto items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-black ring-2 ring-inset ring-blue-950">
                3
              </span>
              <span className="block">Food &amp; Drink</span>
            </li>
            <li className="flex flex-col mx-auto items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-black ring-2 ring-inset ring-blue-950">
                4
              </span>
              <span className="block">Additional products</span>
            </li>
            <li className="flex flex-col mx-auto items-center justify-center">
              <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full text-black ring-2 ring-inset ring-blue-950">
                5
              </span>
              <span className="block">Payment</span>
            </li> */}
          </ul>
          <div className="progress-bar-container h-3 w-full bg-blue-100 rounded-full">
            <div className="progress-bar-current h-3 w-1/3 bg-blue-950 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
