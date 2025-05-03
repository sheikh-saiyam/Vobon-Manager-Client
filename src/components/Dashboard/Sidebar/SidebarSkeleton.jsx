const SidebarLinksLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-10 bg-white rounded w-full animate-pulse" />
      ))}
    </div>
  );
};

export default SidebarLinksLoader;
