import { FaBuilding, FaCog, FaLeaf, FaRegStar } from "react-icons/fa";
import AboutImage from "../../assets/AboutPic.png";

const AboutTheBuilding = () => {
  return (
    <div>
      <h3 className="text-lg text-primary">--- About the Building ---</h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold">
        Discover the Story Behind This Architectural Marvel
      </h1>
      {/* main container */}
      <div className="flex flex-col-reverse gap-6 xl:flex xl:flex-row-reverse justify-between items-center mt-8">
        {/* text container */}
        <div className="w-full xl:w-7/12">
          <p className="text-text tracking-wider text-center text-lg">
            Welcome to <span className="font-semibold">Vobon Manager</span>{" "}
            Building, a modern marvel of architectural design that stands as a
            beacon of innovation and elegance. This structure blends timeless
            sophistication with cutting-edge technology, offering a seamless
            fusion of aesthetics. All corner of this building reflects a
            commitment to sustainability and the future of urban living.
          </p>
          {/* about container */}
          <div className="mt-6 grid grid-cols-4 md:grid-cols-5 gap-6 h-full">
            {/* Designed for Excellence */}
            <div className="bg-red-100/5 border-secondary border shadow shadow-secondary col-span-2 md:col-span-3 p-4 rounded-lg grid place-content-stretch">
              <div className="flex items-center gap-2">
                <div className="text-4xl mb-4">
                  <FaRegStar className="text-yellow-500" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                  Designed for Excellence
                </h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base">
                Crafted with eco-friendly features and energy-efficient systems,
                ensuring optimal performance.
              </p>
            </div>
            {/* An Architectural Gem */}
            <div className="bg-red-100/5 border-secondary border shadow shadow-secondary col-span-2 md:col-span-2 p-4 rounded-lg grid place-content-stretch">
              <div className="flex items-center gap-2">
                <div className="text-4xl mb-4">
                  <FaBuilding className="text-blue-500" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                  An Architectural Gem
                </h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base">
                A modern design with sleek lines, maximizing natural light and
                offering panoramic views.
              </p>
            </div>
            {/* State-of-the-Art Facilities */}
            <div className="bg-red-100/5 border-secondary border shadow shadow-secondary col-span-2 md:col-span-2 p-4 rounded-lg grid place-content-stretch">
              <div className="flex items-center gap-2">
                <div className="text-4xl mb-4">
                  <FaCog className="text-gray-500" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                  State-of-the-Art Facilities
                </h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base">
                Advanced technologies and flexible spaces, promoting creativity
                and productivity.
              </p>
            </div>
            {/* Sustainability at its Core */}
            <div className="bg-red-100/5 border-secondary border shadow shadow-secondary col-span-2 md:col-span-3 p-4 rounded-lg grid place-content-stretch">
              <div className="flex items-center gap-2">
                <div className="text-4xl mb-4">
                  <FaLeaf className="text-green-500" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-2">
                  Sustainability at its Core
                </h3>
              </div>
              <p className="text-gray-500 text-sm md:text-base">
                Green rooftops and water-saving technologies, minimizing
                environmental impact.
              </p>
            </div>
          </div>
          {/* about container */}
        </div>
        {/* image container */}
        <div className="w-full xl:w-5/12">
          <img className="w-full max-h-[600px]" src={AboutImage} alt="" />
        </div>
      </div>
      {/* main container */}
    </div>
  );
};

export default AboutTheBuilding;
