import SectionHeader from "../../../components/Shared/Section/SectionHeader";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import DashboardContainer from "./../../../components/Container/DashboardContainer";
const MyProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  return (
    <DashboardContainer>
      <SectionHeader
        heading={"Welcome To Dashboard"}
        subHeading={"My Profile"}
      />

      {/* main container */}
      <div className="bg-white mt-12 w-full md:w-4/5 lg:w-2/3 mx-auto pb-6 shadow-md rounded shadow-gray-300">
        {/* image div */}
        <div className="relative h-fit">
          <img
            className="h-[200px] w-full object-cover"
            src="https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg"
            alt=""
          />
          {/* <!-- Profile Image --> */}
          <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2">
            <img
              className="h-[150px] w-[150px] rounded-full border-4 border-white shadow-md"
              referrerPolicy="no-referrer"
              alt={user?.displayName}
              src={user?.photoURL}
            />
          </div>
        </div>
        {/* image div */}
        <div className="mt-[90px] px-4">
          <div>
            <h1 className="py-2 px-4 w-fit mx-auto rounded-xl tracking-widest bg-primary text-white font-semibold">
              <span className="font-bold">Role: </span>
              {role}
            </h1>
          </div>
          <div className="text-center mt-4 space-y-1">
            <h1 className="text-lg text-text font-medium tracking-wider">
              {user?.displayName}
            </h1>
            <h1 className="text-lg text-text font-medium tracking-wider">
              {user.email}
            </h1>
          </div>
        </div>
      </div>
      {/* main container */}
    </DashboardContainer>
  );
};

export default MyProfile;
