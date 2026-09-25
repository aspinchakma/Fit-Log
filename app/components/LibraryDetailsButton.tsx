import { FaRegBookmark, FaRegCalendarPlus } from "react-icons/fa";

const LibraryDetailsButton = () => {
  return (
    <div className="flex items-center gap-3 mt-4">
      <button className="text-[14px] font-semibold flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#374151] cursor-pointer hover:bg-[#CCFF00] hover:text-black transition duration-700">
        <FaRegCalendarPlus />
        <span> Add to today&apos;s plan</span>
      </button>
      <button className="text-[14px] font-semibold flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#374151] cursor-pointer hover:bg-[#CCFF00] hover:text-black transition duration-700">
        <FaRegBookmark />
        <span> Save for later</span>
      </button>
    </div>
  );
};

export default LibraryDetailsButton;
