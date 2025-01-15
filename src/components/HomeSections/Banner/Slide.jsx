import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat h-[400px] md:h-[450px] lg:h-[500px] xl:h-[535px]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex px-8 items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="whitespace-pre-line text-3xl font-semibold text-white lg:text-5xl sm:mb-3 tracking-widest">
            {text}
          </h1>
          <br />
          <Link
            to="/apartments"
            className="w-full p-3 sm:px-5 sm:py-4 text-sm font-semibold text-white capitalize transition-colors duration-300 transform bg-opacity-20 backdrop-blur-md bg-white rounded-md lg:w-auto hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            View Apartments
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
