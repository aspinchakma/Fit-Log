import Image from "next/image";
import LogoImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="border-b border-b-[#1c1f26] py-6">
      <div className="w-[95%] md:w-[85%] lg:w-[85%] mx-auto flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <Image
            className="h-11 w-auto"
            height={50}
            width={140}
            alt="fit log logo"
            src={LogoImage}
          />

          <h2 className="text-2xl font-bold font-oswald">FITLOG</h2>
        </div>
        <ul className="flex gap-4 items-center">
          <li className="bg-[#1a2312] px-4 py-1.5 rounded-full">
            <a className="text-[#C2F800] font-semibold" href="">
              Workouts
            </a>
          </li>
          <li>
            <a className="font-medium text-[#9CA3AF]" href="">
              My Plan
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-[#D1D5DB] font-medium"
            >
              <span>Plan</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-sm font-bold text-black">
                0
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-2 text-[#D1D5DB] font-medium"
            >
              <span>Saved</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2D313B">
                0
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
