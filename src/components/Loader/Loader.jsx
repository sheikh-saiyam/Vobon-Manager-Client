import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();
  return (
    <div>
      <div
        className={`flex py-60 justify-center items-center ${
          location.pathname === "/" ||
          (location.pathname === "/apartments" && "dark:bg-black")
        }`}
      >
        <span className="loading loading-bars loading-lg text-primary"></span>
      </div>
    </div>
  );
};

export default Loader;
