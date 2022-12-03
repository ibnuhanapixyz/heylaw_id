import React from "react";

export const Main = () => {
  return (
    <>
      <div className="bg-putih pt-16 pb-16 md:pb-44 mt-16">
        <div className="container mx-auto">
          <div className="md:text-3xl text-2xl text-center font-bold">
            Bertemu para <span className="text-green"> Pendiri</span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">
            <div className="shadow-md rounded-lg bg-white p-3 cursor-pointer">
              <img
                src="image6.svg"
                className="w-full object-cover rounded"
              ></img>
              <div className="mt-4 text-green">Founder & CEO</div>
              <div className="text-lg font-bold line-clamp-2 h-14">
                Awaludin Marwan
              </div>
            </div>
            <div className="shadow-md rounded-lg bg-white p-3 cursor-pointer">
              <img
                src="image9.svg"
                className="w-full object-cover rounded"
              ></img>
              <div className="mt-4 text-green">Co-Founder & COO</div>
              <div className="text-lg font-bold line-clamp-2 h-14">
                Az Zahra F. Sunandi
              </div>
            </div>
            <div className="shadow-md rounded-lg bg-white p-3 cursor-pointer">
              <img
                src="image8.svg"
                className="w-full object-cover rounded"
              ></img>
              <div className="mt-4 text-green">Co-Founder</div>
              <div className="text-lg font-bold line-clamp-2 h-14">
                Wahyu Agung Pramudito
              </div>
            </div>
            <div className="shadow-md rounded-lg bg-white p-3 cursor-pointer">
              <img
                src="image7.svg"
                className="w-full object-cover rounded"
              ></img>
              <div className="mt-4 text-green">Founder & CEO</div>
              <div className="text-lg font-bold line-clamp-2 h-14">
                Andi Tri Haryono
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
