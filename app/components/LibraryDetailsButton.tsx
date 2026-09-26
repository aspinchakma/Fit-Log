"use client";

import { useContext } from "react";
import { FaCheck, FaRegBookmark, FaRegCalendarPlus } from "react-icons/fa";

import { Library, LibraryContextAPI } from "../context/LibraryContextProvider";

const LibraryDetailsButton = ({ library }: { library: Library }) => {
  const context = useContext(LibraryContextAPI);

  if (!context) {
    return <p>Loading...</p>;
  }

  const { handleAddPlans, handleAddToSaved, sortedPlans, sortedSaved } =
    context;

  const isAlreadyAdded = sortedPlans.some((plan) => plan.id === library.id);
  const isAlreadySaved = sortedSaved.some((plan) => plan.id === library.id);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
      <button
        type="button"
        onClick={() => handleAddPlans(library)}
        className={`
          flex w-full sm:w-auto items-center justify-center gap-2
          rounded-xl border-2 px-6 py-3
          text-sm font-semibold
          transition-all duration-300
          ${
            isAlreadyAdded
              ? "border-[#CCFF00] bg-[#CCFF00] text-black cursor-not-allowed"
              : "border-[#374151] text-white cursor-pointer hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
          }
        `}
      >
        {isAlreadyAdded ? <FaCheck /> : <FaRegCalendarPlus />}

        <span>
          {isAlreadyAdded ? "Already in today's plan" : "Add to today's plan"}
        </span>
      </button>

      <button
        type="button"
        onClick={() => handleAddToSaved(library)}
        className={`
    flex w-full sm:w-auto items-center justify-center gap-2
    rounded-xl border-2 px-6 py-3
    text-sm font-semibold
    transition-all duration-300
    ${
      isAlreadySaved
        ? "border-[#CCFF00] bg-[#CCFF00] text-black cursor-not-allowed"
        : "border-[#374151] text-white cursor-pointer hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
    }
  `}
      >
        {isAlreadySaved ? <FaCheck /> : <FaRegBookmark />}

        <span>{isAlreadySaved ? "Already saved" : "Save for later"}</span>
      </button>
    </div>
  );
};

export default LibraryDetailsButton;
