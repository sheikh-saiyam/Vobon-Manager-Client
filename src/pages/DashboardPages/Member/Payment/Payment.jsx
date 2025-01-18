import { useState } from "react";
import DashboardContainer from "../../../../components/Container/DashboardContainer";
import useCoupons from "../../../../hooks/useCoupons";
import useMyAgreement from "../../../../hooks/useMyAgreement";
import { useEffect } from "react";

const Payment = () => {
  // Get member agreement information --->
  const [myAgreement] = useMyAgreement();
  const { rent } = myAgreement;

  // Get all coupon code & discount % --->
  const [coupon] = useCoupons(true);

  const [isValid, setIsValid] = useState(false);
  const [couponValidMessage, setCouponValidMessage] = useState("");
  const [rentPrice, SetRentPrice] = useState(rent || 0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [discountedRent, setDiscountedRent] = useState(0);

  useEffect(() => {
    if (rent !== undefined) {
      SetRentPrice(rent);
    }
  }, [rent]);

  const all_coupon_code = coupon.map((code) => code.coupon_code);
  const all_discount_percentage = coupon.map(
    (code) => code.discount_Percentage
  );

  const handleVerifyCoupon = (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon_code = form.coupon_code.value;

    // Check if the coupon code is valid
    if (all_coupon_code.includes(coupon_code)) {
      // Find the corresponding discount percentage --->
      const index = all_coupon_code.indexOf(coupon_code);
      const discountPercentage = all_discount_percentage[index];

      // Calculate the new rent after applying the discount --->
      const discountedRent = rent - (rent * discountPercentage) / 100;

      // update all state value after coupon valid -->
      setIsValid(true);
      setCouponValidMessage("Coupon Is Valid");
      SetRentPrice(discountedRent);
      setDiscountPercentage(discountPercentage);
      setDiscountedRent(discountedRent);

    } else {
        
      setCouponValidMessage("Coupon is not valid");
      setIsValid(false);
    }
  };
  return (
    <DashboardContainer>
      {/* section header */}
      <div className="text-center">
        <h3 className="text-primary mb-2 text-lg">----- Payment -----</h3>
        <h1 className="text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
          Confirm and Complete Your <br /> Payment Securely
        </h1>
        <hr className="my-4 border-accent w-2/3 mx-auto border-2" />
      </div>

      {/* main container */}
      <div className="bg-white mt-12 w-full md:w-4/5 lg:w-2/3 mx-auto px-4 py-8 md:py-10 md:px-6 lg:px-8 h-full">
        {/* payment price */}
        <div className="w-full flex flex-col justify-end mx-auto">
          <div className="flex justify-end items-center gap-2 text-lg">
            <h1 className="font-medium">Original Rent Price:</h1>
            <span>${rent}</span>
          </div>
          {isValid && couponValidMessage && (
            <>
              <div className="flex justify-end items-center gap-2 text-lg">
                <h1 className="font-medium">Discount Percentage:</h1>
                <span>{discountPercentage}%</span>
              </div>
              <div className="flex justify-end items-center gap-2 text-lg">
                <h1 className="font-medium">Discounted Rent Price:</h1>
                <span>${discountedRent}</span>
              </div>
            </>
          )}
        </div>

        {/* apply coupon */}
        <form onSubmit={handleVerifyCoupon}>
          <div>
            <label className="text-lg font-semibold text-text">
              Coupon Code
            </label>
            <div className="flex items-center gap-x-4 w-full">
              <input
                type="text"
                name="coupon_code"
                placeholder="Enter Valid Coupon Code To Get Discount"
                className="mt-2 w-7/12 md:w-8/12 input input-bordered rounded outline-none border-2"
              />
              <div className="w-3/12 mt-4 md:w-4/12">
                <button
                  disabled={isValid}
                  className={`-mt-2 w-full btn rounded bg-transparent border-accent border-2 text-accent text-lg hover:border-accent hover:bg-accent hover:text-white font-medium ${
                    !!couponValidMessage &&
                    "text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-red-500"
                  } ${
                    couponValidMessage &&
                    "disabled:text-white disabled:bg-accent"
                  }`}
                >
                  {couponValidMessage
                    ? couponValidMessage
                    : isValid
                    ? "Coupon Validate"
                    : "Apply Coupon"}
                </button>
              </div>
            </div>
            {/* valid coupon message */}
          </div>
        </form>
        {/* payment checkout form */}
        <div>
          <input
            type="text"
            readOnly
            placeholder="Card Number"
            className="mt-4 w-full input input-bordered rounded outline-none"
          />
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Payment;
