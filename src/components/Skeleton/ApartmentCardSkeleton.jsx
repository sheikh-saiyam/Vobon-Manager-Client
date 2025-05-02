
const ApartmentCardSkeleton = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-md rounded rounded-t-none overflow-hidden grid place-items-stretch dark:bg-[#1b1b1b] animate-pulse">
      <div className="w-full h-[250px] bg-gray-300 dark:bg-[#333]"></div>

      <div className="p-4 space-y-4">
        <div className="h-10 w-1/2 bg-gray-300 dark:bg-[#333] rounded"></div>

        <div className="space-y-2">
          <div className="h-8 w-3/4 bg-gray-300 dark:bg-[#333] rounded"></div>
          <div className="flex gap-x-4 flex-wrap">
            <div className="h-6 w-40 bg-gray-300 dark:bg-[#333] rounded"></div>
            <div className="h-6 w-6 bg-gray-300 dark:bg-[#333] rounded"></div>
            <div className="h-6 w-40 bg-gray-300 dark:bg-[#333] rounded"></div>
          </div>
        </div>

        <div className="h-12 w-2/3 bg-gray-300 dark:bg-[#333] rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ApartmentCardSkeleton;
