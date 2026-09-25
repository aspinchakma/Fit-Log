"use client";
import { useContext } from "react";
import { FaRegBookmark, FaRegCalendarPlus } from "react-icons/fa";
import { Library, LibraryContextAPI } from "../context/LibraryContextProvider";

const LibraryDetailsButton = ({ library }: { library: Library }) => {
  const context = useContext(LibraryContextAPI);
  if (!context) {
    return <p>loading...</p>;
  }
  const { handleAddPlans, handleAddToSaved } = context;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
      <button
        onClick={() => handleAddPlans(library)}
        className="text-[14px] font-semibold flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#374151] cursor-pointer hover:bg-[#CCFF00] hover:text-black transition duration-700 w-full sm:w-fit justify-center"
      >
        <FaRegCalendarPlus />
        <span> Add to today&apos;s plan</span>
      </button>
      <button
        onClick={() => handleAddToSaved(library)}
        className="text-[14px] font-semibold flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#374151] cursor-pointer hover:bg-[#CCFF00] hover:text-black transition duration-700 w-full sm:w-fit justify-center"
      >
        <FaRegBookmark />
        <span> Save for later</span>
      </button>
    </div>
  );
};

export default LibraryDetailsButton;
