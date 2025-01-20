import { useQuery } from "@tanstack/react-query";
import Loader from "./../components/Loader/Loader";
import axios from "axios";
import {
  MdBlockFlipped,
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
} from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { FaHandshakeSimple } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Apartments = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [minRent, setMinRent] = useState(null);
  const [maxRent, setMaxRent] = useState(null);

  const { user } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const api_url = import.meta.env.VITE_API_URL;

  // get all apartments data --->
  const { data: apartments = [], isLoading } = useQuery({
    queryKey: ["apartments", currentPage, minRent, maxRent],
    queryFn: async () => {
      const { data } = await axios(
        `${api_url}/apartments?page=${currentPage}&min=${minRent}&max=${maxRent}`
      );
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

  // Function for save new Agreement in db --->
  const handleAgreement = (apartment) => {
    if (user) {
      // get all agreementDetails ---->
      const agreement_details = {
        user_details: {
          email: user.email,
          name: user?.displayName,
        },
        apartment_id: apartment._id,
        apartmentNumber: apartment.apartmentNumber,
        floorNumber: apartment.floorNumber,
        blockName: apartment.blockName,
        rent: apartment.rent,
        agreement_status: "pending",
        agreement_request_date: new Date(),
      };

      // show confirmation modal --->
      Swal.fire({
        title: "Make Agreement Request",
        text: `Do you want to send a request to
         the owner for accessing the agreement?`,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, send request!",
        confirmButtonColor: "#4794ed",
        cancelButtonText: "No, cancel",
      }).then(async (result) => {
        try {
          if (result.isConfirmed) {
            // post agreement in db --->
            const { data } = await axiosSecure.post(
              "/make-agreement-request",
              agreement_details
            );
            // show user success toast --->
            if (data.insertedId) {
              // console.log(data);
              Swal.fire({
                title: "Request Sent",
                text: "Your request has been sent to the owner. You will have access to the agreement once it is accepted.",
                icon: "success",
              });
            } else {
              // console.log(data);
              // if already had an agreement show toast --->
              Swal.fire({
                title: `${data?.title}`,
                text: `${data?.message}`,
                icon: "warning",
              });
            }
          }
        } catch (error) {
          Swal.fire({
            title: "Error Caught",
            text: `${error?.message}`,
            icon: "error",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Login Required",
        html: "You need to log in to proceed <br/> with the agreement.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login",
        confirmButtonColor: "#4794ed",
        cancelButtonText: "OK",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          // Navigate to the login page
          navigate("/login");
        }
      });
    }
  };

  // Function for search by rent price --->
  const handleSearchByRent = (e) => {
    e.preventDefault();
    const form = e.target;
    const minPrice = form.min.value;
    const maxPrice = form.max.value;
    // min & max price validation --->
    if (minPrice > maxPrice) {
      Swal.fire("Minimum rent cannot be greater than maximum rent.");
      return;
    }
    if (minPrice < 150) {
      Swal.fire("Minimum rent must be greater than 150.");
      return;
    }
    if (maxPrice > 550) {
      Swal.fire("Maximum rent must be less than 550.");
      return;
    }
    setMinRent(minPrice);
    setMaxRent(maxPrice);
  };

  console.log(minRent, maxRent);
  return (
    <div className="py-14 w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
      {/* Search field container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <form
          onSubmit={handleSearchByRent}
          className="flex flex-col md:flex-row items-center gap-3 justify-center"
        >
          {/* Min Input */}
          <div>
            <input
              type="number"
              name="min"
              min={150}
              required
              defaultValue={minRent}
              placeholder="Enter Min Price"
              className="w-full input input-bordered rounded"
            />
          </div>
          {/* Max Input */}
          <div>
            <input
              type="number"
              name="max"
              max={550}
              required
              defaultValue={maxRent}
              placeholder="Enter Max Price"
              className="w-full input input-bordered rounded"
            />
          </div>
          {/* Search button */}
          <div>
            <button
              type="submit"
              className="btn rounded bg-accent hover:bg-primary duration-300 text-white font-medium text-lg flex justify-center mx-auto h-full"
            >
              Filter By Rent
            </button>
          </div>
        </form>
        {/* Reset Button */}
        <div>
          <button
            onClick={() => {
              setMinRent("");
              setMaxRent("");
            }}
            className="btn rounded bg-[#2e2e2e] hover:bg-black duration-300 text-white font-medium text-lg flex justify-center mx-auto"
          >
            Reset
          </button>
        </div>
      </div>
      {/* Search field container */}

      {/* main container */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-12">
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
              <button
                onClick={() => handleAgreement(apartment)}
                disabled={apartment.status === "rented"}
                className="mt-4 btn rounded bg-accent text-white text-lg font-semibold w-2/3 hover:bg-primary border-none duration-300 disabled:text-[#606060]"
              >
                {apartment.status === "available" ? (
                  <FaHandshakeSimple size={25} />
                ) : (
                  <MdBlockFlipped size={23} />
                )}
                {apartment.status === "available" ? "Agreement" : "Rented"}
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
