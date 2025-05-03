const StatCard = ({ icon: Icon, value, label, gradientFrom, gradientTo }) => {
  return (
    <div
      className={`place-items-stretch grid h-auto w-full justify-center items-center rounded gap-4 px-3 py-6`}
      style={{
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <div className="flex flex-col justify-start">
        <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
          <Icon size={50} />
          <span className="mt-1">{value}</span>
        </h1>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mt-2 text-white">
          {label}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;
