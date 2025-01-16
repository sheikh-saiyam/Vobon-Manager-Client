import { HiOutlineSpeakerphone } from "react-icons/hi";
import DashboardContainer from "../../../components/Container/DashboardContainer";
import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcement = { title, description };

    // post announcement in db ----->
    try {
      await axiosSecure.post(`/make-announcement`, announcement);
      // reset form after success
      form.reset();
      // show success toast
      Swal.fire({
        icon: "success",
        title: "Announcement Created!",
        confirmButtonText: "OK",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.message ||
          "Something went wrong while making the announcement!",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <DashboardContainer>
      <SectionHeader
        subHeading={"Make Announcement"}
        heading={"Share the News, Loud and Clear!"}
      />

      {/* main container */}
      <div className="bg-white mt-12 w-full md:w-4/5 lg:w-2/3 mx-auto p-4 md:p-6">
        {/* form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-lg font-semibold text-text">
              Announcement Title
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Announcement Title"
              className="mt-3 w-full input input-bordered rounded"
            />
          </div>
          <div>
            <label className="text-lg font-semibold text-text">
              Announcement Description
            </label>
            <textarea
              type="text"
              name="description"
              required
              rows={6}
              placeholder="Enter Announcement Title"
              className="mt-3 w-full textarea textarea-bordered rounded"
            />
          </div>

          {/* submit button */}
          <div>
            <button
              type="submit"
              className="btn w-full md:w-2/3 mx-auto bg-primary text-white font-bold tracking-wider rounded text-lg flex items-center"
            >
              <HiOutlineSpeakerphone size={20} /> Submit Announcement
            </button>
          </div>
          {/* submit button */}
        </form>
        {/* form */}
      </div>
      {/* main container */}
    </DashboardContainer>
  );
};

export default MakeAnnouncement;
