import React from "react";

export const Footer = () => {
  return (
    <div class="flex justify-between p-16 bg-putih px-32">
      <div>
        <img src="logo.svg" className="w-15 h-12 pb-3"></img>
        <p className="text-2xl font-bold text-grey">
          PT. Prawira Bahagia Selalu
        </p>
        <p className="text-grey text-base pb-1">Jasa Layanan</p>
        <p className="text-grey text-xs">
          Jl. Raya Pondok Cabe Blok B5 No. 6 Kav. 77
        </p>
        <p className="text-grey text-xs pb-10">Tangerang selatan</p>
        <p className="text-grey text-xs pb-1">
          Telepon/SMS/WA : 0813 8002 2929
        </p>
        <p className="text-grey text-xs">Email : Info@heylaw.id</p>
      </div>
      <div>
        <p className="text-grey text-xl pb-7 font-bold">Tentang Kami</p>
        <p className="text-grey text-xl pb-7 font-bold">FAQ</p>
        <p className="text-grey text-xl pb-7 font-bold">Kontak Kami</p>
        <p className="text-grey text-xl pb-7 font-bold">Syarat & Ketentuan</p>
      </div>
      <div className="">
        <p className="text-grey text-xl pb-3 font-bold"> Get App</p>
        <img src="google_play.png" className="w-32 h-15 pb-5"></img>
        <p className="text-grey text-xl pb-3 font-bold">Ikuti Kami</p>
        <div className="flex">
          <div className="p-1">
            <img src="ig.svg" className="w-5 h-5"></img>
          </div>
          <div className="p-1">
            <img src="fb.svg" className="w-5 h-5"></img>
          </div>
          <div className="p-1">
            <img src="tw.svg" className="w-5 h-5"></img>
          </div>
          <div className="p-1">
            <img src="yt.svg" className="w-5 h-5"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
