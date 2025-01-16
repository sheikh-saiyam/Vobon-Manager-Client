import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCoupons = (availableCouponOnly = false) => {
  const api_url = import.meta.env.VITE_API_URL;

  // Get all coupons data ----->
  const {
    data: coupons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["coupons", availableCouponOnly],
    queryFn: async () => {
      const { data } = await axios(
        `${api_url}/coupons?availableCouponOnly=${availableCouponOnly}`
      );
      return data;
    },
  });

  return [coupons, isLoading, refetch];
};

export default useCoupons;
