import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = ({ setError }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigatePath = location.state?.pathname || "/";

  const { setUser, googleLogin } = useAuth();

  // function for google login --->
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(navigatePath);
        // for login modal
        Swal.fire({
          icon: "success",
          title: `Welcome Back, ${currentUser.displayName}!`,
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-yellow-400 border-none w-full rounded-full flex gap-3 items-center text-lg text-white font-semibold hover:bg-yellow-500 duration-300"
        >
          <FaGoogle className="text-xl" /> Log in With Google
        </button>
      </div>
      <div className="divider font-semibold">
        Or {location.pathname === "/login" ? "Login" : "Register"} with Email &
        Password
      </div>
    </div>
  );
};

export default SocialLogin;
