import Image from "next/image";

import { BsFire } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

import Link from "next/link";
import { Library } from "../context/LibraryContextProvider";
import SavedCardDeleteButton from "./SavedCardDeleteButton";

const SavedCard = ({ plan }: { plan: Library }) => {
  const { image, rating, caloriesBurned, duration, equipment, name, id } = plan;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#1F2937] bg-[#111827] p-4 transition-all duration-300 hover:border-[#374151] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <div className="shrink-0 overflow-hidden rounded-xl">
          <Image
            width={444}
            height={444}
            className="h-24 w-24 object-cover transition-transform duration-300 hover:scale-105 sm:h-28 sm:w-28"
            src={image}
            alt={`${name} image`}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-white sm:text-lg">
            {name}
          </h3>

          <p className="mt-1 truncate text-sm text-[#9CA3AF]">{equipment}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[#CCFF00] sm:mt-5 sm:gap-5">
            <p className="flex items-center gap-1.5 text-xs sm:text-sm">
              <FiClock size={15} />
              {duration}
              <span className="text-[#9CA3AF]">min</span>
            </p>

            <p className="flex items-center gap-1.5 text-xs sm:text-sm">
              <BsFire size={15} />
              {caloriesBurned}
              <span className="text-[#9CA3AF]">kcal</span>
            </p>

            <p className="flex items-center gap-1.5 text-xs sm:text-sm">
              <FaRegStar size={14} />
              {rating}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0 sm:gap-3">
        <Link
          href={`libraries/${id}`}
          className="rounded-full border border-[#374151] px-3 py-2 text-xs font-medium text-[#D1D5DB] transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00] sm:flex-none sm:px-4 sm:text-sm cursor-pointer"
        >
          View Details
        </Link>

        <SavedCardDeleteButton plan={plan} />
      </div>
    </div>
  );
};

export default SavedCard;
