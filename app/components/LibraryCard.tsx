import Image from "next/image";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { Library } from "../context/LibraryContextProvider";
const LibraryCard = ({ library }: { library: Library }) => {
  const {
    image,
    rating,
    caloriesBurned,
    duration,
    muscleGroups,
    equipment,
    name,
    id,
  } = library;

  return (
    <Link
      href={`/libraries/${id}`}
      className="border-2 border-[#20242e] rounded-xl overflow-hidden transition duration-700 hover:-translate-y-2 cursor-pointer"
    >
      <Image
        width={444}
        height={44}
        className="w-full max-h-72 object-cover"
        src={image}
        alt={`${name} images`}
      />
      <div className="p-6  bg-[#15171d]">
        <ul className="flex items-center gap-3">
          {muscleGroups.map((muscleName, idx) => (
            <li
              className="text-[14px] font-bold bg-[#C2F800] px-4 py-1 rounded-full text-black"
              key={idx}
            >
              {muscleName}
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-3xl font-oswald my-4">{name}</h3>
        <p className="text-[#9CA3AF]">{equipment}</p>
        <div className="text-[#9CA3AF] flex items-center justify-start gap-5 border-t-2 border-t-[#20242e] mt-5 pt-5">
          <p className="flex items-center gap-1 text-[16px]">
            {" "}
            <FiClock />
            {duration}
            <span>min</span>
          </p>
          <p className="flex items-center gap-1 text-[16px]">
            <BsFire />
            {caloriesBurned}
            <span>kcal</span>
          </p>
          <p className="flex items-center gap-1 text-[16px]">
            <FaRegStar />
            {rating}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default LibraryCard;
