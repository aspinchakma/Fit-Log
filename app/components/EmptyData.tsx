import Link from "next/link";

const EmptyData = () => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-[#374151] bg-[#111827] px-5 py-16 text-center">
      <h2 className="text-2xl font-bold tracking-wide text-white lg:text-4xl font-oswald">
        NOTHING HERE YET
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-[#9CA3AF] sm:text-base">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href={`/`}
        className="mt-5 rounded-full bg-[#CCFF00] px-5 py-2 text-sm font-bold text-black transition-all duration-500 border-2 border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00] "
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyData;
