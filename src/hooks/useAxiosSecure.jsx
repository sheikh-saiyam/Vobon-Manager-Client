import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        // console.log("Error caught from axios interceptor-->", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          // logout if error caught--->
          logOut().then(() => {
            Swal.fire({
              icon: "warning",
              title: error.response.status,
              text: "Your session has expired or you do not have permission to access this resource.",
              confirmButtonText: "Login Again",
            });
            // navigate to login
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);
  return axiosInstance;
};

export default useAxiosSecure;
