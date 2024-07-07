import logo from "../assets/logo.png";
import dropdownarrow from "../assets/arrow-drop-down-line.svg";
export const Navbar = () => {
  return (
    // <nav className=" ">
    <div className=" hidden w-full px-4 py-3 sm:flex justify-center h-10">
      <div className=" w-full flex  xl:w-3/4  h-8 ">
        <ul className=" flex flex-row w-1/3 xl:w-1/2  items-center">
          <img src={logo} alt="" className="w-20 mr-4 mt-2" />
          <div className="flex hover:bg-blue-700 bg-blue-600 rounded	text-sm h-full px-2 text-white justify-center">
            <button>Courses</button>
            <img
              src={dropdownarrow}
              alt=""
              className=" mt-1 w-6 hover:cursor-pointer"
            />
          </div>
        </ul>
        <ul className="w-full flex justify-around  xl:w-1/2 items-center  ">
          <li>
            <a href="">Refer & Earn</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>

          <button className=" bg-loginbotton rounded text-black	h-full w-20 hover:bg-gray-200 ">
            Login
          </button>

          <button className=" rounded	bg-blue-600 h-full px-2 text-white text-sm hover:bg-blue-700">
            Try for free
          </button>
        </ul>
      </div>
    </div>
    // </nav>
  );
};
