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

  console.log(context?.libraries);
  return (
    <div>
      <h3>This is Libraries Section</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {libraries.map((library) => (
          <LibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default Libraries;
