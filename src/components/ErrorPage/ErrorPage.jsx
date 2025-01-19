import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="w-full bg-center bg-cover bg-no-repeat h-screen"
      style={{
        backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/027/789/854/non_2x/modern-luxury-apartment-with-bright-blue-light-free-photo.jpg)`,
      }}
    >
      <div className="bg-black/85 w-full h-full flex flex-col items-center justify-center px-6 md:px-8 lg:p-10">
        <img
          className="h-1/3 w-2/3 md:w-1/3"
          src="https://zentrum.qodeinteractive.com/wp-content/uploads/2024/07/error-page-img-2.png"
          alt=""
        />
        <div className="mt-8 md:mt-10 lg:mt-12 text-center text-white">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[300] italic">
            Page Not Found
          </h1>
          <h3 className="mt-6 text-xl sm:text-2xl md:text-3xl font-[200] italic">
            It seems like the page you’re looking for doesn’t exist.{" "}
            <br className="hidden md:inline" /> Don’t worry, we’ll help you get
            back on track!
          </h3>
        </div>{" "}
        <Link
          to={"/"}
          className="mt-8 p-3 sm:px-12 sm:py-4 text-sm font-semibold text-white capitalize transition-colors duration-300 transform bg-opacity-20 backdrop-blur-md bg-white rounded-md lg:w-auto hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
