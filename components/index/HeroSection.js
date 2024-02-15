import Image from "next/image";
import Link from "next/link";
import { BiPlayCircle } from "react-icons/bi";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { setVideoClose, setVideoOpen } from "../../lib/reducers/innerPageSlice";
import { LuTrees } from "react-icons/lu";

const HeroSection = () => {
  const dispatch = useDispatch();
  const isVideo = useSelector((state) => state.innerPage.videoValue);
  return <>
    {/* {isVideo ? (
      <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-screen z-30 p-4 bg-black bg-opacity-90">
        <ReactPlayer
          url=" "
          controls="true"
          wrapper="div"
          className="max-w-full"
        />
        <button
          className="btn border-white text-white hover:bg-white hover:text-black text-xl z-50 sm:mt-8"
          onClick={() => {
            dispatch(setVideoClose());
          }}
        >
          Back
        </button>
      </div>
    ) : (
      ""
    )} */}
    <div className="grid lg:grid-cols-2 lg:mt-8 mt-2 mb-[105px] lg:mb-[0px] gap-6 lg:min-h-[700px] min-h-[70vh] items-center">
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 my-3 justify-center items-center lg:items-start lg:pr-[20%]">
        <div className="relative">
          <h1 className=" font-bold text-4xl lg:5xl lg:text-6xl text-primary text-center lg:text-left">
            <div className="inline-block relative">
              Your New River
            </div>{" "}
            <div className="inline-block relative">
              Landscaping Experts
            </div>
          </h1>
        </div>
        <p className="text-center lg:text-left text-md text-[#4C5249]">
        Quality, Affordable Lawn care service right here in SWVA!
        Get the Lawn care you need at a price you can afford. No Matter what kind of yard work or lawn service you need, we can help. 
        </p>
        <div className="flex flex-col xl:flex-row space-y-0 w-full lg:items-start items-center gap-4">
          <Link scroll={false} href="/about" className="btn text-primary bg-neutral w-full xl:w-1/2 text-center py-2">
              About Us
          </Link>
          <Link scroll={false} href="/contact" className="btn text-neutral bg-primary w-full xl:w-1/2 xl:leading-4 text-center py-2">
              Get a FREE Estimate!
          </Link>
          {/* <button
            className="btn flex justify-center items-center w-full xl:w-1/2 py-2"
            onClick={() => {
              dispatch(setVideoOpen());
            }}
          >
            <BiPlayCircle size={20} className="mr-1" />
            Watch Video
          </button> */}
        </div>
      </div>
      <div className="relative h-[35vh] lg:h-[45vh] col-span-2 lg:col-span-1">
        <div className="relative h-full w-full overflow-hidden rounded-2xl">
          <Image
            alt=""
            src="/Landscape-bg.jpg"
            className="z-10"
            placeholder="blur"
            blurDataURL="/main_grid_bg.jpg"
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} 
          />
        </div>
        {/* Decorations */}
        <div className="absolute h-3/4 w-3/4 border-4 rounded-2xl border-primary left-[-30px] bottom-[-30px]"></div>
        <div className="absolute h-[90%] w-[100%] rounded-2xl bg-primary bg-opacity-10 left-[-20px] bottom-[-20px]"></div>
        <div className="absolute h-[90%] w-[90%] rounded-2xl bg-primary bg-opacity-30 right-[-20px] top-[-20px]"></div>
        <div className="absolute left-[-15px] bottom-[-15px] z-10">
        </div>
        <div className="absolute left-[-25px] bottom-[0px] z-10">
          <LuTrees className="text-6xl text-primary_light absolute -mt-10"/>
        </div>
      </div>  
      <div className="pointer-events-none">
          <Image
            src="/grass-bg-1.png"
            alt=""
            className="opacity-30 -mt-16 -z-30"
            layout="fill"
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }} 
          />
      </div>
    </div>
  </>;
};

export default HeroSection;
