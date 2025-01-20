import { useEffect, useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "./../hooks/useAuth";
import Swal from "sweetalert2";
import { MdOutlineError } from "react-icons/md";
import axios from "axios";

const Register = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  const api_url = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const { setUser, createNewUser, updateUserProfile } = useAuth();
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password validation
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 character");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password Must have a Lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password Must have a Uppercase letter");
      return;
    }
    // password validation

    // create new user ----->
    createNewUser(email, password)
      .then((result) => {
        // set displayName & photoURL ----->
        const currentUser = result.user;
        updateUserProfile({ displayName: name, photoURL: photo }).then(
          async () => {
            setUser({
              ...currentUser,
              displayName: name,
              photoURL: photo,
            });

            // save user data in db ----->
            await axios.post(`${api_url}/users`, {
              email: currentUser.email,
              name: currentUser?.displayName,
              photo: currentUser?.photoURL,
            });
          }
        );
        navigate("/");

        // for account create modal
        Swal.fire({
          icon: "success",
          title: `Account created successfully`,
          text: `Welcome to Vobon Manager, ${name}!`,
          showConfirmButton: false,
          background: "#f0f8ff",
          color: "#4B0082",
          timer: 3000,
        });
      })
      .catch((error) => {
        if (error.message) {
          setError(error.message);
        }
      });
  };

  // for toggle password --->
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="bg-base-200">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl py-12 flex flex-col-reverse md:flex md:flex-row-reverse">
          <div className="bg-white py-12 px-8 md:w-7/12">
            <div className="mb-4">
              <h1 className="flex items-center gap-2 text-3xl font-bold">
                <LuLogIn />
                Register Page
              </h1>
            </div>
            {/* Google Register */}
            <SocialLogin setError={setError} />
            {/* Google Register */}
            <form onSubmit={handleRegister} className="card-body p-0 gap-0">
              {/* name & photo */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label px-0">
                    <span className="font-semibold">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              {/* name & photo */}
              {/* email & password */}
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
              <div className="form-control">
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
                <label className=" flex justify-center items-center gap-2 mt-6 text-red-500 bg-red-100 p-2 rounded-lg text-center mb-2 text-lg font-semibold">
                  <MdOutlineError className="text-xl" />
                  {error}
                </label>
              )}
              {/* button div */}
              <div className="form-control mt-4">
                <button className="btn w-full text-lg font-bold text-white bg-accent hover:bg-primary">
                  Register
                </button>
              </div>
              {/* button div */}
            </form>
            {/* register navigate */}
            <div className="text-text space-y-2 md:space-y-6 mt-6">
              <div className="w-full flex flex-wrap gap-2 items-center justify-center">
                <h3 className="font-medium text-base">
                  Already have an account
                </h3>
                <Link
                  to={"/login"}
                  className="font-semibold underline underline-offset-2 hover:text-primary duration-200"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("https://st.depositphotos.com/3073153/4520/v/450/depositphotos_45205711-stock-illustration-city.jpg")`,
            }}
            className="bg-no-repeat min-h-[250px] bg-cover py-12 px-6 md:w-5/12 flex flex-col justify-center items-center text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
