import { useEffect, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const navigate = useNavigate();
  const location = useLocation();
  const navigatePath = location.state?.pathname || "/";

  const { setUser, userLogin } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        navigate(navigatePath);

        // for login modal
        Swal.fire({
          icon: "success",
          title: `Welcome \n ${currentUser.displayName}!`,
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((err) => {
        if (err.message) {
          setError("Incorrect Email Or Password");
        }
      });
  };

  // for toggle password --->
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-background">
      <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-7 flex flex-col-reverse md:flex md:flex-row">
        <div className="bg-white py-7 px-8 md:w-2/3 border-2 border-accent border-r-0">
          <div className="mb-4">
            <h1 className="flex items-center gap-2 text-3xl font-bold text-text">
              <LuLogIn />
              Login To Start!
            </h1>
          </div>
          {/* Google Login */}
          <SocialLogin setError={setError} />
          {/* Google Login */}
          <form onSubmit={handleLogin} className="card-body p-0 gap-0">
            <div className="form-control">
              <label className="label px-0">
                <span className="font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <label className="label px-0">
                <span className="font-semibold">Password</span>
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <label
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-xl"
                  aria-label="Toggle password visibility"
                >
                  {passwordVisible ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </label>
              </div>
            </div>
            {error && (
              <label className="mt-6 block text-red-500 bg-red-100 p-2 rounded-lg text-center text-lg font-semibold">
                {error}
              </label>
            )}
            <div className="form-control mt-6">
              <button className="btn w-full text-lg font-bold text-white bg-accent hover:bg-primary">
                Login
              </button>
            </div>
          </form>
          {/* register navigate */}
          <div className="text-text space-y-2 md:space-y-6 mt-6">
            <div className="w-full flex flex-wrap gap-2 items-center justify-center">
              <h3 className="font-medium text-base">
                Don&apos;t have an account
              </h3>
              <Link
                to={"/register"}
                className="font-semibold underline underline-offset-2 hover:text-primary duration-200"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        {/* text div */}
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://st.depositphotos.com/3073153/4520/v/450/depositphotos_45205711-stock-illustration-city.jpg")`,
          }}
          className="bg-no-repeat min-h-[250px] bg-cover py-12 px-4 md:w-1/2 flex flex-col justify-center items-center text-center"
        />
        {/* text div */}
      </div>
    </div>
  );
};

export default Login;
