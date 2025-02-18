import {
  FaWifi,
  FaSwimmingPool,
  FaCar,
  FaDumbbell,
  FaShieldAlt,
  FaBuilding,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaWifi size={70} />,
    title: "Free Wi-Fi",
    description:
      "Enjoy high-speed internet access throughout all apartments and common areas for seamless connectivity anytime.",
  },
  {
    icon: <FaSwimmingPool size={70} />,
    title: "Swimming Pool",
    description:
      "Relax and unwind in our well-maintained swimming pool available for all residents to enjoy daily with comfort and ease.",
  },
  {
    icon: <FaCar size={70} />,
    title: "Parking Area",
    description:
      "Secure and spacious parking area with round-the-clock monitoring to ensure the complete safety of your vehicles.",
  },

  {
    icon: <FaDumbbell size={70} />,
    title: "Gymnasium",
    description:
      "Stay fit with our modern gym equipped with the latest machines for a complete and fulfilling workout experience.",
  },
  {
    icon: <FaShieldAlt size={70} />,
    title: "24/7 Security",
    description:
      "Our building is safeguarded by advanced CCTV surveillance and dedicated security staff ensuring safety at all times.",
  },
  {
    icon: <FaBuilding size={70} />,
    title: "Community Hall",
    description:
      "Host your memorable events, meetings, and gatherings in our spacious community hall equipped with modern facilities",
  },
];

const Facilities = () => {
  return (
    <div>
      {/* Section Header */}
      <h3 className="text-lg text-primary dark:font-bold">
        --- Our Facilities ---
      </h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
        Discover The Top-Notch Facilities We Provides
      </h1>
      <div className="mt-6">
        <div className="grid md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1b1b1b] dark:border-none p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-500 flex flex-col items-center border"
            >
              <div className="mb-2 text-[#444] dark:text-white">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700  dark:text-white mb-2">
                {facility.title}
              </h3>
              <p className="text-gray-500 dark:text-white text-sm text-center">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
