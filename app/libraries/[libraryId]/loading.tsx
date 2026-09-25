const loading = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="border-2 border-[#20242e] rounded-xl overflow-hidden bg-[#15171d]">
          <div className="skeleton w-full h-[300px] md:h-[450px] rounded-none bg-[#232732]" />
        </div>
        <div>
          <div className="skeleton h-12 w-3/4 bg-[#232732] mb-4" />

          <div className="space-y-3 mb-6">
            <div className="skeleton h-4 w-full bg-[#232732]" />
            <div className="skeleton h-4 w-full bg-[#232732]" />
            <div className="skeleton h-4 w-5/6 bg-[#232732]" />
          </div>

          <div className="flex gap-3 mb-7">
            <div className="skeleton h-8 w-24 rounded-full bg-[#232732]" />
            <div className="skeleton h-8 w-20 rounded-full bg-[#232732]" />
            <div className="skeleton h-8 w-28 rounded-full bg-[#232732]" />
          </div>

          <div className="rounded-xl border-2 border-[#20242e] overflow-hidden bg-[#15171d]">
            <div className="space-y-0">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-4 py-4 border-b border-[#20242e]"
                >
                  <div className="skeleton h-4 w-24 bg-[#232732]" />
                  <div className="skeleton h-4 w-20 bg-[#232732]" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="skeleton h-8 w-48 bg-[#232732] mb-5" />

            <div className="space-y-3">
              <div className="skeleton h-4 w-full bg-[#232732]" />
              <div className="skeleton h-4 w-11/12 bg-[#232732]" />
              <div className="skeleton h-4 w-10/12 bg-[#232732]" />
              <div className="skeleton h-4 w-full bg-[#232732]" />
            </div>
          </div>

          <div className="mt-8 flex gap-3 items-center">
            <div className="skeleton h-12 w-40 rounded-xl bg-[#232732]" />
            <div className="skeleton h-12 w-40 rounded-xl bg-[#232732]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
