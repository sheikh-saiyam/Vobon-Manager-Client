import { BiSolidCoupon } from "react-icons/bi";
import useCoupons from "./../../hooks/useCoupons";
import { useState } from "react";

const Coupons = () => {
  // Get all coupons ----->
  const [coupons] = useCoupons(true);

  // Functionality for copy coupon code --->
  const [copied, setCopied] = useState(false);

  const handleCopy = (coupon_code) => {
    navigator.clipboard.writeText(coupon_code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <h3 className="text-lg text-primary dark:font-bold">
        --- Exclusive Coupons ---
      </h3>
      <h1 className="text-text my-2 text-xl md:text-2xl lg:text-3xl font-semibold dark:text-white">
        Explore Top Coupons & Maximize Your Savings!
      </h1>

      {/* main container */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {coupons.map((coupon) => (
          <div
            key={coupon._id}
            className="flex items-center rounded overflow-hidden relative"
          >
            {/* Left Section */}
            <div className="bg-accent text-white text-center px-6 h-full relative flex items-center">
              <div className="absolute inset-y-[%] left-[-20px] bg-white dark:bg-black w-10 h-10 rounded-full border border-primary"></div>
              <h1 className="text-4xl font-bold ml-2">
                {coupon.discount_Percentage}%
              </h1>
            </div>

            {/* Right Section */}
            <div className="flex-grow border-2 border-l-0 border-dashed px-4 py-2 relative dark:border-[#383838] dark:bg-[#1b1b1b]">
              <div className="flex justify-between items-center">
                <h2 className="md:text-lg font-medium text-gray-800 dark:text-white">
                  {coupon.coupon_description}
                </h2>
              </div>
              <div
                className="tooltip tooltip-right pb-[5px]"
                data-tip={copied ? "Coupon Copied!" : coupon.coupon_code}
              >
                <button
                  onClick={() => handleCopy(coupon.coupon_code)}
                  className="btn bg-accent text-white font-normal text-sm md:text-base btn-sm mt-2 hover:bg-primary hover:text-white border-transparent border hover:border-primary rounded h-full"
                >
                  <BiSolidCoupon size={25} /> Copy Coupon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* main container */}
    </div>
  );
};

export default Coupons;
