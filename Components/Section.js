import React from "react";

export const Section = () => {
  return (
    <div className="Section">
      <div className="flex items-center px-3 h-full w-full gap-x-10 p-20 ">
        <div className="pl-52 pt-36 ">
          <img src="content.png"></img>
        </div>
        <div className="pt-10">
          <p className="text-green font-bold text-3xl pb-5">
            Bertumbuh <span className="text-black"> Bersama Kami</span>
          </p>
          <p className="">Nikmati pengalam belajar hukum yang mudah dan</p>
          <p className="pb-3">menyenangkan hanya di Heylaw Edu</p>
          <button className="px-5 py-2 rounded-md bg-green text-white">
            Coba Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};
