"use client";

import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Library, LibraryContextAPI } from "../context/LibraryContextProvider";

const SavedCardDeleteButton = ({ plan }: { plan: Library }) => {
  const context = useContext(LibraryContextAPI);
  if (!context) return <p>Context problem</p>;
  const { handleDelete } = context;
  return (
    <button
      onClick={() => handleDelete("saved", plan)}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B7280] transition-all duration-300 hover:bg-[#1F2937] hover:text-red-400 cursor-pointer"
    >
      <FaTimes size={18} />
    </button>
  );
};

export default SavedCardDeleteButton;
