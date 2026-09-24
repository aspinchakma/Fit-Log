import Image from "next/image";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center bg-[#15171d] lg:px-10 lg:py-16 rounded-2xl md:px-10 md:py-16 p-10">
      <div>
        <h3 className="text-[#C2F800] font-bold text-[14px] mb-6">
          WORKOUT LIBRARY
        </h3>
        <h1 className="text-3xl text-center lg:text-left md:text-6xl lg:text-6xl font-oswald font-extrabold md:text-left">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[#9CA3AF] text-lg lg:text-xl md:text-xl my-6 text-center lg:text-left md:text-left">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <div className="text-center lg:text-left md:text-left">
          <button className="text-black bg-[#C2F800] border px-5 py-3 border-[#C2F800] rounded-lg hover:bg-transparent hover:text-[#C2F800] transition duration-700 text-[14px] font-bold cursor-pointer">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>
      <div>
        <Image
          src={BannerImg}
          alt="Banner image"
          className="h-auto w-full md:w-2/3  lg:w-2/3 object-cover border-2 mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
