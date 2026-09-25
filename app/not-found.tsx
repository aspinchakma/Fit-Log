import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="min-h-96 flex items-center justify-center px-6 ">
      <div className="w-full max-w-xl border-2 border-[#20242e] rounded-xl overflow-hidden bg-[#15171d] text-center">
        <div className="p-10 md:p-14">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#C2F800] flex items-center justify-center">
            <span className="text-4xl font-bold text-black">!</span>
          </div>

          <h3 className="font-bold text-4xl font-oswald text-white mb-3">
            Nothing Found
          </h3>

          <p className="text-[#9CA3AF] text-base md:text-lg max-w-md mx-auto">
            We couldn&apos;t find what you&apos;re looking for. Try searching
            again or explore something else.
          </p>

          <div className="mt-7">
            <div className="inline-block">
              <Link
                href={`/`}
                className=" bg-[#C2F800] text-black font-bold px-6 py-2 rounded-full flex gap-1 items-center"
              >
                <IoHomeSharp />
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
