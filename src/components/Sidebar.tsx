import { useState } from "react";
import menuicon from "../assets/menu-fill.svg";

import closelarge from "../assets/closelarge.svg";
export const Sidebar = () => {
  const [sidebar, setSidebar] = useState<number>(0);

  return sidebar ? (
    <div className="fixed w-full  h-full sm:hidden">
      <div className="  h-full  w-1/2 bg-white absolute  ">
        <div className=" h-full border flex flex-col">
          <button
            className="flex ml-auto h-7 "
            onClick={() => {
              setSidebar(0);
            }}
          >
            <img
              className="h-6 mr-2 mt-2 w-full  object-fit"
              src={closelarge}
              alt="menuicon"
            />
          </button>
          <ul className=" mt-3 flex flex-row full items-center justify-center ">
            <button className="bg-blue-600 rounded	 w-28 h-7 px-2 text-white">
              Course
            </button>
          </ul>
          <ul className="w-full  h-full flex flex-col  items-center">
            <li className="mt-4">
              <a href="">Refer & Earn</a>
            </li>
            <li className="mt-4">
              <a href="">Resources</a>
            </li>
            <li className="mt-4">
              <a href="">About Us</a>
            </li>

            <button className=" bg-gray-300 rounded  mt-4 text-black	w-20 ">
              Login
            </button>

            <button className=" rounded	bg-blue-600  mt-4 px-2 text-white">
              Try for free
            </button>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <button
      onClick={() => {
        setSidebar(1);
      }}
      className="mt-2 ml-2 sm:hidden"
    >
      <img className="h-4 w-4  object-fit" src={menuicon} alt="menuicon" />
    </button>
  );
};
