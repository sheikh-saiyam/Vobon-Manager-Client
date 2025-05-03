const DashboardLoader = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Skeleton */}
      <div className="min-w-2/12 xl:w-3/12 max-w-[300px] md:max-w-[360px] min-h-screen   bg-primary p-4 flex flex-col gap-y-6">
        {/* Logo Skeleton */}
        <div className="bg-white h-28 w-full rounded skeleton" />

        {/* Title Skeleton */}
        <div className="h-8 w-40 bg-white rounded mx-auto skeleton" />

        {/* Nav Skeleton */}
        <div className="flex flex-col gap-4 mt-6">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-10 bg-white w-full rounded skeleton" />
          ))}
        </div>

        {/* Bottom Nav Skeleton */}
        <div className="mt-auto flex flex-col gap-3">
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="h-10 bg-white w-full rounded skeleton" />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 p-6"></div>
    </div>
  );
};

export default DashboardLoader;
