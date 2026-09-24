"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "../assets/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
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
        <ul className="flex items-center">
          <li
            className={`${pathname === "/" ? "bg-[#1a2312]" : ""}   px-4 py-1.5 rounded-full`}
          >
            <Link
              className={`${pathname === "/" ? "text-[#C2F800] font-semibold " : "font-medium text-[#9CA3AF]"}`}
              href="/"
            >
              Workouts
            </Link>
          </li>
          <li
            className={`${pathname === "/my-plan" ? "bg-[#1a2312]" : ""}   px-4 py-1.5 rounded-full`}
          >
            <Link
              className={`${pathname === "/my-plan" ? "  text-[#C2F800] font-semibold  " : " font-medium text-[#9CA3AF]  "}`}
              href="/my-plan"
            >
              My Plan
            </Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-[#D1D5DB] font-medium"
            >
              <span>Plan</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-sm font-bold text-black">
                0
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="flex items-center gap-2 text-[#D1D5DB] font-medium"
            >
              <span>Saved</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2D313B">
                0
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
