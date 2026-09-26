const ListedPlanSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-[#1F2937] bg-[#111827] p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Image */}
      <div className="flex min-w-0 items-center gap-4">
        <div className="shrink-0 overflow-hidden rounded-xl">
          <div className="skeleton h-24 w-24 sm:h-28 sm:w-28"></div>
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="skeleton h-5 w-40 sm:h-6"></div>

          <div className="skeleton mt-2 h-4 w-28"></div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 sm:mt-5 sm:gap-5">
            <div className="skeleton h-4 w-14"></div>
            <div className="skeleton h-4 w-16"></div>
            <div className="skeleton h-4 w-10"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <div className="skeleton h-9 w-20 rounded-lg"></div>
        <div className="skeleton h-9 w-20 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ListedPlanSkeleton;
