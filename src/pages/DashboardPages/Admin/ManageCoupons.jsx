import { IoAddCircleOutline } from "react-icons/io5";
import DashboardContainer from "./../../../components/Container/DashboardContainer";
import SectionHeader from "./../../../components/Shared/Section/SectionHeader";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "./../../../components/Loader/Loader";
import { MdChangeCircle } from "react-icons/md";
import useCoupons from "../../../hooks/useCoupons";

const ManageCoupons = () => {
  const axiosSecure = useAxiosSecure();

  // Get all coupons data ----->
  const [coupons, isLoading, refetch] = useCoupons();

  if (isLoading) return <Loader />;

  // Function for post new coupon in db ----->
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon_code = form.coupon_Code.value;
    const discount_Percentage = parseInt(form.discount_Percentage.value);
    const coupon_description = form.coupon_description.value;
    const coupon = {
      coupon_code,
      discount_Percentage,
      coupon_description,
      availability: "available",
    };

    // post new coupon in db ----->
    try {
      await axiosSecure.post(`/add-coupon`, coupon);
      form.reset(); // <--- reset form after success
      refetch(); // <--- refetch after success
      // show success toast
      Swal.fire({
        icon: "success",
        title: "Coupon Posted Successfully!",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong while posting the coupon!",
        confirmButtonText: "Try Again",
      });
    } finally {
      document.getElementById("add_coupon").close();
    }
  };

  // Function for change coupon availability --->
  const handleChangeCouponAvailability = (coupon) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to change the availability of the coupon?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let newAvailability =
          coupon.availability === "available" ? "unavailable" : "available";
        await axiosSecure.patch(`/change-coupon-availability/${coupon._id}`, {
          availability: newAvailability,
        });
        refetch(); // <--- refetch after success
        // show success toast --->
        Swal.fire(
          "Updated!",
          `Coupon availability changed to ${newAvailability}.`,
          "success"
        );
      }
    });
  };

  return (
    <DashboardContainer>
      <SectionHeader
        subHeading={"Manage Coupons"}
        heading={"Manage discount offers with ease"}
      />

      <div className="bg-white mt-12 w-full lg:w-11/12 mx-auto p-4 md:p-6 lg:p-8">
        {/* text div */}
        <div className="flex flex-wrap justify-center md:justify-between gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-text font-semibold tracking-wide">
            Total Coupons: <span className="font-medium">{coupons.length}</span>
          </h1>
          <div>
            <button
              onClick={() => document.getElementById("add_coupon").showModal()}
              className="btn bg-primary text-white text-lg font-medium rounded"
            >
              Add Coupon
            </button>
          </div>
        </div>
        {/* text div */}

        {/* Coupons table */}
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
            <thead className="bg-primary text-white text-lg">
              <tr>
                <th className="py-4">Coupon Code</th>
                <th className="py-4 text-sm">
                  Discount <br /> Percentage
                </th>
                <th className="py-4">Coupon description</th>
                <th className="py-4 text-center">Availability</th>
                <th className="py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon._id} className="text-base">
                  <td className="py-4">
                    <h1>{coupon.coupon_code}</h1>
                  </td>
                  <td className="py-4">
                    {coupon.discount_Percentage}% Percent
                  </td>
                  <td className="py-4">
                    {coupon.coupon_description.substring(0, 40)}...
                  </td>
                  <td className={`py-4 text-center`}>
                    <span
                      className={`py-1 rounded-full ${
                        coupon.availability === "available"
                          ? "bg-blue-100 text-blue-500 px-4"
                          : "bg-yellow-100 text-yellow-600 px-2"
                      }`}
                    >
                      {coupon.availability}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <div
                        className="tooltip tooltip-left"
                        data-tip="Change Coupon Availability"
                      >
                        <button
                          onClick={() => handleChangeCouponAvailability(coupon)}
                          className="bg-accent hover:bg-primary hover:tooltip-open  text-white font-bold btn"
                        >
                          <MdChangeCircle size={25} />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Coupons table */}

        {/* Add Coupon Modal */}
        <dialog id="add_coupon" className="modal">
          <div className="modal-box rounded">
            {/* main div */}
            <div>
              <h3 className="flex gap-2 items-center font-bold text-2xl tracking-wider">
                <IoAddCircleOutline />
                Add New Coupon
              </h3>
              {/* form */}
              <form onSubmit={handleSubmit} className="mt-3 space-y-3">
                {/* code */}
                <div>
                  <label className="text-lg font-semibold text-text">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    name="coupon_Code"
                    required
                    placeholder="Enter Coupon Code"
                    className="mt-1 w-full input input-bordered rounded"
                  />
                </div>
                {/* percentage */}
                <div>
                  <label className="text-lg font-semibold text-text">
                    Discount Percentage
                  </label>
                  <input
                    type="number"
                    name="discount_Percentage"
                    required
                    placeholder="Enter Discount Percentage"
                    className="mt-1 w-full input input-bordered rounded"
                  />
                </div>
                {/* Coupon description */}
                <div>
                  <label className="text-lg font-semibold text-text">
                    Coupon Description
                  </label>
                  <textarea
                    type="text"
                    name="coupon_description"
                    required
                    rows={3}
                    placeholder="Enter Coupon Description"
                    className="mt-1 w-full textarea textarea-bordered rounded"
                  />
                </div>
                {/* submit button */}
                <div className="w-2/3 mx-auto">
                  <button
                    type="submit"
                    className="bg-primary rounded btn w-full text-white font-semibold text-lg hover:bg-white hover:text-primary border-primary border hover:border-primary flex items-center gap-1"
                  >
                    Submit Coupon
                  </button>
                </div>
              </form>
              {/* form */}
            </div>
            {/* main div */}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {/* Add Coupon Modal */}
      </div>
    </DashboardContainer>
  );
};

export default ManageCoupons;
