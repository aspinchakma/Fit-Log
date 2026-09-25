"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from "../assets/logo.png";
import { LibraryContextAPI } from "../context/LibraryContextProvider";

const Navbar = () => {
  const pathname = usePathname();
  const context = useContext(LibraryContextAPI);
  if (!context) return <p>Context Problem...</p>;

  const { plans, totalSaved } = context;

  return (
    <nav className="navbar border-b border-[#1c1f26] bg-[#0f1115] py-4">
      <div className="w-full md:w-[85%] mx-auto  flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" text-white lg:hidden mr-2 md:hidden"
            >
              <GiHamburgerMenu size={26} />
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-[#16191f] p-2 shadow "
            >
              <li>
                <Link
                  href="/"
                  className={
                    pathname === "/"
                      ? "text-[#C2F800] font-semibold"
                      : "text-[#9CA3AF]"
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className={
                    pathname === "/my-plan"
                      ? "text-[#C2F800] font-semibold"
                      : "text-[#9CA3AF]"
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LogoImage}
              alt="FitLog logo"
              width={140}
              height={50}
              className="h-10 md:h-11 lg:h-11 w-auto"
            />

            <h2 className="text-2xl font-bold font-oswald">FITLOG</h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            <li className={pathname === "/" ? "rounded-full bg-[#1a2312]" : ""}>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "font-semibold text-[#C2F800]"
                    : "font-medium text-[#9CA3AF]"
                }
              >
                Workouts
              </Link>
            </li>

            <li
              className={
                pathname === "/my-plan" ? "rounded-full bg-[#1a2312]" : ""
              }
            >
              <Link
                href="/my-plan"
                className={
                  pathname === "/my-plan"
                    ? "font-semibold text-[#C2F800]"
                    : "font-medium text-[#9CA3AF]"
                }
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="flex items-center gap-3">
            <li>
              <Link
                href="/my-plan"
                className="flex items-center gap-2 font-medium text-[#D1D5DB]"
              >
                <span className="sm:block">Plan</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C2F800] text-sm font-bold text-black">
                  {plans.length}
                </span>
              </Link>
            </li>

            <li>
              <Link
                href="/my-plan"
                className="flex items-center gap-2 font-medium text-[#D1D5DB]"
              >
                <span className=" sm:block">Saved</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2D313B] text-sm">
                  {totalSaved.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
