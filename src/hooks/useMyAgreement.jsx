import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyAgreement = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: myAgreement = {}, isLoading } = useQuery({
    queryKey: ["my-agreement", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/my-agreement/${user?.email}`);
      return data;
    },
  });

  return [myAgreement, isLoading];
};

export default useMyAgreement;
