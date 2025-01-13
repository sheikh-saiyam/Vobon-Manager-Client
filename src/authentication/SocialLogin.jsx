import { FaGoogle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SocialLogin = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <button
        
          // onClick={handleGoogleLogin}
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
