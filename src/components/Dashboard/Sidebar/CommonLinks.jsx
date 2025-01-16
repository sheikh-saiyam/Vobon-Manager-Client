import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const CommonLinks = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Link
        to={"/"}
        className="bg-white text-primary font-semibold hover:text-white hover:bg-primary duration-300 border-2 border-white text-lg py-1 px-4 flex items-center gap-2"
      >
        <IoArrowBack />
        Back To Home
      </Link>
    </div>
  );
};

export default CommonLinks;
