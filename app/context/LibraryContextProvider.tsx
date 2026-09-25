"use client";

import React, { createContext, useState } from "react";
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
  handleAddPlans: (plans: Library) => void;
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
  const [plans, setPlans] = useState<Library[]>([]);
  const handleAddPlans = (plan: Library): void => {
    console.log(plan);
  };
  return (
    <LibraryContextAPI.Provider value={{ name, libraries, handleAddPlans }}>
      {children}
    </LibraryContextAPI.Provider>
  );
};

export default LibraryContextProvider;
