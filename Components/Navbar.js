import React from "react";
export const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="flex items-center justify-center h-full w-full gap-x-20">
          <div className="">
            <a>
              <img src="logo.svg" className="h-5 w-24" />
            </a>
          </div>
          <div className="text-grey ">
            <ul className="flex items-center gap-x-10 ">
              <li className="hidden md:list-item">
                <link href="#" />
                <a className="">Home</a>
              </li>
              <li className="hidden md:list-item">
                <link href="#" />
                <a>FAQ</a>
              </li>
              <li className="hidden md:list-item">
                <link href="#" />
                <a>Tentang kami</a>
              </li>
              <li className="hidden md:list-item">
                <link href="#" />
                <a>Blog</a>
              </li>
              <li className="hidden sm:list-item">
                <link href="#" />
                <a>Heylaw EDU</a>
              </li>
              <div className="gap-x-20">
                <li>
                  <link href="#" />
                  <button className="px-5 py-2 rounded-md bg-green text-white">
                    Heylaw edu
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
