const DashboardLoader = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Skeleton */}
      <div className="min-w-2/12 xl:w-3/12 max-w-[300px] md:max-w-[360px] min-h-screen   bg-primary p-4 flex flex-col gap-y-6">
        {/* Logo Skeleton */}
        <div className="bg-white h-28 w-full rounded skeleton" />

        {/* Title Skeleton */}
        <div className="h-8 w-40 bg-white rounded mx-auto skeleton" />

        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-10 bg-white rounded w-full animate-pulse" />
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 p-6"></div>
    </div>
  );
};

export default DashboardLoader;
