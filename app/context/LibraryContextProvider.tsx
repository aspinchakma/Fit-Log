"use client";

import React, { createContext } from "react";
export interface Library {
  id: number;
  image: string;
  instructions: string[];
  muscleGroups: string[];
  name: string;
  rating: number;
  reps: string;
  sets: number;
  caloriesBurned: number;
  description: string;
  difficulty: string;
  duration: number;
  equipment: string;
}

interface ContextProps {
  name: string;
  libraries: Library[];
}
export const LibraryContextAPI = createContext<ContextProps | undefined>(
  undefined,
);
const name = "Aspin Chakma";

const LibraryContextProvider = ({
  children,
  libraries,
}: {
  children: React.ReactNode;
  libraries: Library[];
}) => {
  return (
    <LibraryContextAPI.Provider value={{ name, libraries }}>
      {children}
    </LibraryContextAPI.Provider>
  );
};

export default LibraryContextProvider;
