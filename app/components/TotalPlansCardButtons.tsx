import Link from "next/link";
import { useContext } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Library, LibraryContextAPI } from "../context/LibraryContextProvider";

const TotalPlansCardButtons = ({ plan }: { plan: Library }) => {
  const context = useContext(LibraryContextAPI);
  if (!context) return <p>Context Problem</p>;
  const { handleDelete, completedPlans, handleComplete } = context;
  const isDone = completedPlans.includes(plan.id);
  return (
    <div className="flex w-full items-center gap-2 sm:w-auto sm:shrink-0 sm:gap-3">
      <Link
        href={`libraries/${plan?.id}`}
        className="flex-1 rounded-full border border-[#374151] px-3 py-2 text-xs font-medium text-[#D1D5DB] transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00] sm:flex-none sm:px-4 sm:text-sm cursor-pointer"
      >
        View Details
      </Link>

      <button
        type="button"
        onClick={() => handleComplete(plan.id)}
        disabled={isDone}
        className={`
    flex flex-1 items-center justify-center gap-2
    rounded-full border-2 px-6 py-2
    text-sm font-semibold
    transition-all duration-300
    ${
      isDone
        ? "border-[#CCFF00] bg-[#CCFF00] text-black cursor-not-allowed"
        : "border-[#374151] text-white cursor-pointer hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black"
    }
  `}
      >
        <span>
          {isDone ? (
            <span className="flex items-center gap-1">
              <FaCheck /> Completed
            </span>
          ) : (
            "Mark as Done"
          )}
        </span>
      </button>

      <button
        onClick={() => handleDelete("plans", plan)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#6B7280] transition-all duration-300 hover:bg-[#1F2937] hover:text-red-400 cursor-pointer"
      >
        <FaTimes size={18} />
      </button>
    </div>
  );
};

export default TotalPlansCardButtons;
