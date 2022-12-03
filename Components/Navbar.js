import React from "react";
import Link from "react";
export const Navbar = () => {
  return (
    <>
      <div className="lg:h-20 md:h-24 sm:h-[86px] h-16 shadow bg-white w-full text-grey fixed">
        <div className="container mx-auto flex h-full text-center item-center">
          <div className="flex items-center w-full">
            <div className="flex items-center justify-center h-full w-full gap-x-32">
              <a href="/">
                <div className="md:h-7 h-6 relative">
                  <img src="logo.svg" className="h-full  pl-46"></img>
                </div>
              </a>
              <div className="items-center hidden text-xs font-semibold sm:flex xl:gap-8 xl:text-base md:text-sm">
                <a href="/">
                  <div className=" gap-x-64">Home</div>
                </a>
                <a href="/">
                  <div>FAQ</div>
                </a>
                <a href="/">
                  <div>Tentang Kami</div>
                </a>
                <a href="/">
                  <div>Blog</div>
                </a>
                <a href="/">
                  <div>Heylaw Edu</div>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="pr-64">
                <button
                  type="button"
                  className="md:h-10 h-9 px-5 py-2 rounded-md bg-green text-white font-bold text-center"
                >
                  heylawEdu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
