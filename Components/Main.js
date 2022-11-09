import React from "react";

export const Main = () => {
  return (
    <>
      <div className="Main bg-blue-50 p-20">
        <div className="text-center">
          <h1 className="text-3xl py-10 font-bold">
            Bertemu Para <span className="text-green">pendiri</span>
          </h1>
          <div className="flex items-center px-3 justify-center h-full w-full gap-x-10 ">
            <div className="bg-origin-border p-4 px-5 bg-white shadow-md rounded-lg">
              <img src="human01.png" className="rounded-lg"></img>
              <h1 className="text-green flex bg-white ">Founder & CEO</h1>
              <h2 className="text-black font-semibold flex">Awaludin Marwan</h2>
            </div>
            <div className="bg-origin-border p-4 px-3 bg-white shadow-md rounded-lg">
              <img src="human01.png" className="rounded-lg"></img>
              <h1 className="text-green flex">Co-Founder & COO</h1>
              <h2 className="text-black font-semibold flex">
                Az Zahra F. Sunandi
              </h2>
            </div>
            <div className="bg-origin-border p-4 px-3 bg-white shadow-md rounded-lg">
              <img src="human01.png" className="rounded-lg"></img>
              <h1 className="text-green flex  ">Co-Founder</h1>
              <h2 className="text-black font-semibold flex">
                Wahyu Agung Pramudito
              </h2>
            </div>
            <div className="bg-origin-border p-4 px-3 bg-white shadow-md rounded-lg">
              <img src="human01.png" className="rounded-lg"></img>
              <h1 className="text-green flex  ">Co-Founder</h1>
              <h2 className="text-black font-semibold flex">
                Andi Tri Haryono
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
