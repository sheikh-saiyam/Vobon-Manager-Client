import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const ExploreApartments = () => {
  const api_url = import.meta.env.VITE_API_URL;

  // Get random apartments ----->
  const { data: apartments = [] } = useQuery({
    queryKey: ["explore-apartments"],
    queryFn: async () => {
      const { data } = await axios(`${api_url}/explore-apartments`);
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-lg text-primary">--- Explore Our Apartments ---</h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold">
        Apartments Tailored to Your Needs
      </h1>

      {/* main container */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apartments.map((apartment, idx) => (
          <Link to={"/apartments"} key={idx}>
            <div className="w-full mx-auto bg-white shadow overflow-hidden grid place-items-stretch hover:scale-105 duration-150">
              <img
                src={apartment.apartmentImage}
                alt="Apartment Image"
                className="w-full h-[180px] md:h-[250px] object-cover"
              />
              <div className="p-4">
                <div>
                  <h1 className="text-4xl md:text-5xl tracking-widest font-bold text-text flex items-center">
                    ${apartment.rent}{" "}
                    <span className="text-lg lg:text-xl tracking-wide mt-3 font-medium">
                      /Rent
                    </span>
                  </h1>
                </div>
                <div className="mt-3">
                  <h2 className="text-xl md:text-2xl font-semibold text-text">
                    Apartment: {apartment.apartmentNumber}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* main container */}
    </div>
  );
};

export default ExploreApartments;
