const LibrarySkeleton = () => {
  return (
    <div className="mt-12" id="libraries">
      <h3 className="text-4xl font-bold font-oswald">THE LIBRARY</h3>

      <p className="text-[#9CA3AF] text-lg mb-8 mt-3">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <div className="skeleton h-56 w-full"></div>

            <div className="p-5 space-y-3">
              <div className="skeleton h-6 w-3/4"></div>

              <div className="skeleton h-4 w-full"></div>

              <div className="skeleton h-4 w-2/3"></div>

              <div className="skeleton h-10 w-32 mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibrarySkeleton;
