import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCoupons = () => {
  const api_url = import.meta.env.VITE_API_URL;

  // Get all coupons data ----->
  const {
    data: coupons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const { data } = await axios(`${api_url}/coupons`);
      return data;
    },
  });

  return [coupons, isLoading, refetch];
};

export default useCoupons;
