import { FaLocationDot } from "react-icons/fa6";
import MapImage from "../../assets/map.png";

const ApartmentLocation = () => {
  return (
    <div>
      <h3 className="text-lg text-primary dark:font-bold">
        --- Our Location ---
      </h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
        Find Your Dream Home
      </h1>

      <div className="flex flex-col lg:flex lg:flex-row-reverse gap-x-8 ">
        <div className="flex justify-center mt-8">
          <img
            src={MapImage}
            alt="Apartment Location Map"
            className="rounded-lg shadow-lg w-full min-h-[200px]"
          />
        </div>

        <div className="mt-8 flex flex-row flex-wrap gap-x-3 lg:flex lg:flex-col gap-y-6">
          <div>
            <div className="w-full text-gray-700">
              <h3 className="text-xl font-semibold text-primary mb-4">
                How to Get Here
              </h3>
              <h1 className="mb-3 flex gap-2 dark:text-white">
                <FaLocationDot className="mt-[4.5px]" /> Sector 7, Uttara,
                Dhaka-1230, Bangladesh
              </h1>
              <ul className="list-disc pl-5 space-y-2 dark:text-white">
                <li>Located just 5 minutes from the main highway.</li>
                <li>Near the popular Mascot Plaza & Sector 7 Park Area.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              Nearby Attractions
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-white">
              <li>Sector 7 Park - 10 minutes walk</li>
              <li>Sector 13 Park - 10 minutes drive</li>
              <li>Mascot Plaza Shopping Mall - 10 minutes walk</li>
              <li>Zam Zam Tower Mall - 10 minutes Drive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentLocation;
