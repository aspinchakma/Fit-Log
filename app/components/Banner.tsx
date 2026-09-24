import Image from "next/image";
import BannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div>
        <h1>TRAIN WITH INTENT. LOG EVERY SET.</h1>
        <p>
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button>BROWSE WORKOUTS</button>
      </div>
      <div className="border-2">
        <Image
          src={BannerImg}
          alt="Banner image"
          className="h-auto w-1/2 object-cover border-2 mx-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
