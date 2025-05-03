const SidebarLinksLoader = () => {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-10 bg-white/40 rounded w-full animate-pulse"
        />
      ))}

      <hr className="my-6 border border-white" />

      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="h-10 bg-white/30 rounded w-full animate-pulse"
        />
      ))}
    </div>
  );
};

export default SidebarLinksLoader;
