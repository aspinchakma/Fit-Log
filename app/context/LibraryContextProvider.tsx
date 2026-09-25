"use client";

import React, { createContext, useState } from "react";
import { Bounce, toast } from "react-toastify";
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
  plans: Library[];
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
    const check = [...plans].filter((pln) => pln.id === Number(plan.id));
    if (!check.length) {
      setPlans([...plans, plan]);
      // show successfull message after adding
      toast.success(`Successfully Added, ${plan.name}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(`${plan.name} already Added.`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <LibraryContextAPI.Provider
      value={{ name, libraries, handleAddPlans, plans }}
    >
      {children}
    </LibraryContextAPI.Provider>
  );
};

export default LibraryContextProvider;
