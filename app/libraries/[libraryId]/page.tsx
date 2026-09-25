import { Library } from "@/app/context/LibraryContextProvider";
import Image from "next/image";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ libraryId: string }> }) => {
  const { libraryId } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${libraryId}`,
  );

  if (!response.ok) {
    notFound();
  }

  const library: Library = await response.json();

  const {
    name,
    image,
    description,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    instructions,
  } = library;

  return (
    <div className="py-5 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="border-2 border-[#20242e] rounded-xl overflow-hidden bg-[#15171d]">
          <Image
            height={444}
            width={554}
            alt={`${name} image`}
            src={image}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="font-oswald font-bold text-4xl md:text-5xl leading-tight mb-4">
            {name}
          </h1>

          <p className="text-[#9CA3AF] leading-7 mb-6">{description}</p>

          <ul className="flex flex-wrap items-center gap-3 mb-7">
            {muscleGroups.map((muscleName, idx) => (
              <li
                className="text-sm font-bold bg-[#C2F800] px-4 py-1.5 rounded-full text-black"
                key={idx}
              >
                {muscleName}
              </li>
            ))}
          </ul>
          <div className="rounded-xl border-2 border-[#20242e] overflow-hidden bg-[#15171d]">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    EQUIPMENT
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    {equipment}
                  </td>
                </tr>

                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    DIFFICULTY
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    {difficulty}
                  </td>
                </tr>

                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    SETS
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    {sets}
                  </td>
                </tr>

                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    REPS
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    {reps}
                  </td>
                </tr>

                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    DURATION
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    <span className="inline-flex items-center gap-1">
                      {duration} min
                    </span>
                  </td>
                </tr>

                <tr className="border-b-2 border-[#20242e]">
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    CALORIES
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    <span className="inline-flex items-center gap-1">
                      {caloriesBurned} kcal
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-sm font-bold text-[#9CA3AF]">
                    RATING
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-right">
                    <span className="inline-flex items-center gap-1">
                      {rating}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <h2 className="font-oswald font-bold text-2xl md:text-3xl mb-5">
              INSTRUCTIONS
            </h2>

            <ol className="list-decimal pl-6 space-y-4 text-[#9CA3AF] leading-7">
              {instructions.map((instruction, idx) => (
                <li key={idx} className="pl-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
