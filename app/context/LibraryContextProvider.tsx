"use client";

import React, { createContext, useEffect, useState } from "react";
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
  libraries: Library[];
  handleAddPlans: (plan: Library) => void;
  plans: Library[];
  handleAddToSaved: (plan: Library) => void;
  totalSaved: Library[];
  handleDelete: (type: string, plan: Library) => void;
  handleSort: (sort: "duration" | "calories" | "rating") => void;
  sortedSaved: Library[];
  sortedPlans: Library[];
  sortMethod: "duration" | "calories" | "rating";
  completedPlans: number[];
  handleComplete: (id: number) => void;
  loading: boolean;
}
export const LibraryContextAPI = createContext<ContextProps | undefined>(
  undefined,
);

const LibraryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [libraries, setLibraries] = useState<Library[]>([]);
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<Library[]>([]);
  const [totalSaved, setTotalSaved] = useState<Library[]>([]);
  const [sortMethod, setSortMethod] = useState<
    "duration" | "calories" | "rating"
  >("duration");
  const [completedPlans, setCompletedPlans] = useState<number[]>([]);

  // data loading
  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        // this line for testing
        // await new Promise((resolve) => setTimeout(resolve, 50000));
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

        if (!res.ok) {
          throw new Error("Failed to fetch libraries");
        }

        const data: Library[] = await res.json();

        setLibraries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLibraries();
  }, []);

  // handle add plans
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

  // handle add to saved
  const handleAddToSaved = (plan: Library): void => {
    const check = totalSaved.filter((pln) => pln.id === plan.id);
    if (!check.length) {
      setTotalSaved([...totalSaved, plan]);
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
  const handleDelete = (type: string, plan: Library): void => {
    if (type === "saved") {
      const final = totalSaved.filter((pln) => pln.id !== plan.id);
      setTotalSaved(final);
      toast.success(`Successfully Deleted, ${plan.name}`, {
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
    } else if (type === "plans") {
      const final = plans.filter((pln) => pln.id !== plan.id);

      setPlans(final);

      setCompletedPlans((prev) => prev.filter((id) => id !== plan.id));
      toast.success(`Successfully Deleted, ${plan.name}`, {
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
    } else if (type === "done") {
      const final = plans.filter((pln) => pln.id !== plan.id);
      setPlans(final);
      // Task completed successfully! message
      toast.success(`Task completed successfully!`, {
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

  // short
  const handleSort = (sort: "duration" | "calories" | "rating") => {
    setSortMethod(sort);
  };

  const sortPlansAndSaved = (plans: Library[]) => {
    const sortPlansOrSaved = [...plans];
    if (sortMethod === "duration") {
      sortPlansOrSaved.sort((a, b) => b.duration - a.duration);
    } else if (sortMethod === "calories") {
      sortPlansOrSaved.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortMethod === "rating") {
      sortPlansOrSaved.sort((a, b) => b.rating - a.rating);
    }

    return sortPlansOrSaved;
  };

  const handleComplete = (id: number) => {
    setCompletedPlans((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });

    toast.success("Task completed successfully!", {
      position: "bottom-right",
      autoClose: 5000,
      theme: "light",
      transition: Bounce,
    });
  };

  const sortedPlans = sortPlansAndSaved(plans);
  const sortedSaved = sortPlansAndSaved(totalSaved);
  return (
    <LibraryContextAPI.Provider
      value={{
        libraries,
        handleAddPlans,
        plans,
        handleAddToSaved,
        totalSaved,
        handleDelete,
        handleSort,
        sortedPlans,
        sortedSaved,
        sortMethod,
        completedPlans,
        handleComplete,
        loading,
      }}
    >
      {children}
    </LibraryContextAPI.Provider>
  );
};

export default LibraryContextProvider;
