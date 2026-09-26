"use client";

import { useContext, useState } from "react";
import { LibraryContextAPI } from "../context/LibraryContextProvider";
import ListedPlanSkeleton from "./ListedPlanSkeleton";

const ListedBooksSkeleton = () => {
  const [activeTab, setActiveTab] = useState<"todaysPlan" | "saved">(
    "todaysPlan",
  );
  const context = useContext(LibraryContextAPI);
  if (!context) return <p>Context problem...</p>;
  const { handleSort, sortMethod } = context;
  return (
    <div>
      <h2 className="text-2xl font-oswald lg:text-4xl md:text-4xl font-bold">
        MY PLAN
      </h2>
      <p className="text-[#8A92A0] text-[17px] mb-6 mt-3">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="border-2 border-[#232732] rounded-xl p-4 lg:p-6 md:p-6 grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-4 bg-[#13161d] ">
        <div>
          <h4 className="text-[#8A92A0] text-lg mb-2">Exercises</h4>
          <div className="skeleton h-12 w-16 lg:h-16 lg:w-24 rounded"></div>
        </div>
        <div className="lg:border-l-2 md:border-l-2 lg:pl-6 md:pl-6 lg:border-l-[#232732] md:border-l-[#232732]">
          <h4 className="text-[#8A92A0] text-lg mb-2">Minutes</h4>
          <div className="skeleton h-12 w-16 lg:h-16 lg:w-24 rounded"></div>
        </div>
        <div className="lg:border-l-2 md:border-l-2 lg:pl-6 md:pl-6 lg:border-l-[#232732] md:border-l-[#232732]">
          <h4 className="text-[#8A92A0] text-lg mb-2 ">Calories</h4>
          <div className="skeleton h-12 w-16 lg:h-16 lg:w-24 rounded"></div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex flex-col gap-4 lg:flex-row md:flex-row items-center  justify-between">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-[#1f242d] border border-[#2b303d] shadow-lg">
            <button
              onClick={() => setActiveTab("todaysPlan")}
              className={`px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
                activeTab === "todaysPlan"
                  ? "bg-[#2b303d] text-white shadow-md font-bold"
                  : "text-[#8A92A0]"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2.5 rounded-xl  transition-all duration-300 cursor-pointer ${
                activeTab === "saved"
                  ? "bg-[#2b303d] text-white shadow-md font-bold"
                  : "text-[#8A92A0]"
              }`}
            >
              Saved
            </button>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-white font-medium">Sort By</p>

            <select
              onChange={(e) =>
                handleSort(e.target.value as "duration" | "calories" | "rating")
              }
              defaultValue={sortMethod}
              className="select bg-[#111827] border border-[#374151] text-white rounded-xl w-40 focus:outline-none focus:border-[#CCFF00]"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 my-10">
        <ListedPlanSkeleton />
        <ListedPlanSkeleton />
        <ListedPlanSkeleton />
      </div>
    </div>
  );
};

export default ListedBooksSkeleton;
