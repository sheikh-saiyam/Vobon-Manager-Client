import { useQuery } from "@tanstack/react-query";
import Loader from "./../components/Loader/Loader";
import axios from "axios";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";

const Apartments = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);

  const api_url = import.meta.env.VITE_API_URL;

  // get all apartments data --->
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments", currentPage],
    queryFn: async () => {
      const { data } = await axios(`${api_url}/apartments?page=${currentPage}`);
      return data.apartments;
    },
    keepPreviousData: true,
    onSuccess: (apartments) => {
      setTotalPages(apartments.totalPages);
    },
  });

  // Function for change page --->
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="py-14 w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* main container */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-12">
        {apartments.map((apartment, idx) => (
          <div
            key={idx}
            className="w-full mx-auto bg-white shadow-md rounded rounded-t-none overflow-hidden grid place-items-stretch"
          >
            <img
              src={apartment.apartmentImage}
              alt="Apartment Image"
              className="w-full h-[250px] object-cover"
            />
            <div className="p-4">
              <div>
                <h1 className="text-5xl tracking-widest font-bold text-text flex items-center">
                  ${apartment.rent}{" "}
                  <span className="text-xl tracking-wide mt-3 font-medium">
                    /Rent
                  </span>
                </h1>
              </div>
              <div className="mt-3">
                <h2 className="text-3xl font-semibold text-text">
                  Apartment: {apartment.apartmentNumber}
                </h2>
                <div className="flex mt-4 gap-x-4 flex-wrap">
                  <h2 className="text-xl font-medium text-text">
                    Floor Number: {apartment.floorNumber}
                  </h2>
                  <h2 className="text-lg font-medium text-text">||</h2>
                  <h2 className="text-lg font-medium text-text">
                    Block Name: {apartment.blockName}
                  </h2>
                </div>
              </div>
              <button className="mt-4 btn rounded bg-accent text-white text-lg font-semibold w-2/3 hover:bg-primary duration-300">
                <FaHandshakeSimple size={25} />
                Agreement
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* main container */}

      {/* Pagination controller */}
      <div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {/* prev button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn bg-white text-primary border-2 border-primary rounded"
          >
            <MdOutlineSkipPrevious size={40} />
          </button>

          {/* Display page numbers & page change button */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`btn px-6 rounded text-lg ${
                currentPage === index + 1
                  ? "bg-accent border-2 border-accent text-white"
                  : "bg-white text-accent border-2 border-accent hover:bg-accent hover:text-white hover:border-accent duration-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {/* Display page numbers & page change button */}

          {/* next button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn bg-white text-primary border-2 border-primary rounded  hover:bg-primary hover:text-white hover:border-primary duration-300"
          >
            <MdOutlineSkipNext size={40} />
          </button>
        </div>
      </div>
      {/* Pagination controller */}
    </div>
  );
};

export default Apartments;
