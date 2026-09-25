"use client";
import { useContext } from "react";
import { LibraryContextAPI } from "../context/LibraryContextProvider";
import LibraryCard from "./LibraryCard";

const Libraries = () => {
  const context = useContext(LibraryContextAPI);
  if (!context) {
    return <p>Data Loading............</p>;
  }
  const { libraries } = context;
  return (
    <div className="mt-12">
      <h3 className="text-4xl font-bold font-oswald">THE LIBRARY</h3>
      <p className="text-[#9CA3AF] text-lg mb-8 mt-3">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default Libraries;
