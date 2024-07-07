import BannerImg2 from "../assets/BannerImg2.png";
import { RefferalModal } from "./RefferalModal";
export const Banner = () => {
  // const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex   w-full justify-center mt-8  mb-6  ">
      <div className="  flex flex-col-reverse  xl:flex-row h-2/3 w-2/3   bg-skyblue rounded-2xl shadow-[0px_4px_65px_1px_#00072B36]">
        <div className="xl:w-1/3 w-full">
          <div className="   ml-10 h-48 mt-20 xl:ml-4">
            <p className=" font-bold text-3xl sm:text-5xl ">
              Lets Learn And Earn
            </p>
            <p className=" text-wrap mt-8 sm:text-xl">Get a chance to win</p>
            <div className="flex flex-row border align-bottom">
              <p className="  text-xl"> up-to</p>
              <p className="  text-2xl ml-2 text-wrap sm:text-3xl font-bold text-bottoncolor">
                Rs 15000
              </p>
            </div>
          </div>
          <button>
            <RefferalModal />
          </button>
        </div>
        <div className=" flex xl:w-2/3  justify-center">
          <img
            className="h-full w-11/12  object-fit"
            src={BannerImg2}
            alt="BannerImg"
          />
        </div>
      </div>
    </div>
  );
};
