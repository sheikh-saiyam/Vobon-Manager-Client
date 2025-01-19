import { useState } from "react";
import DashboardContainer from "../../../../components/Container/DashboardContainer";
import useCoupons from "../../../../hooks/useCoupons";
import useMyAgreement from "../../../../hooks/useMyAgreement";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Payment = () => {
  // Get member agreement information --->
  const [myAgreement] = useMyAgreement();
  const { rent } = myAgreement;

  // Get all coupon code & discount % --->
  const [coupon] = useCoupons(true);

  const selectedMonth = localStorage.getItem("selectedMonth");
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
      setCouponValidMessage("Coupon not valid");
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
        {/* selectedMonth & payment price */}
        <div className="w-11/12 md:w-10/12 mb-4 p-4 bg-white drop-shadow rounded flex flex-col justify-center mx-auto">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-medium">
              ✔ Payment Confirmation
            </h1>
            <h1 className="mt-2 text-lg lg:text-xl font-medium">
              {" "}
              Review your payment details before proceeding
            </h1>
            <hr className="mt-4 w-11/12 mx-auto border shadow-sm" />
          </div>
          <div className="mt-4 w-11/12 mx-auto flex justify-between gap-2 text-lg">
            <h1 className="font-medium">Month You Want to Pay:</h1>
            <span>
              {selectedMonth ? (
                selectedMonth
              ) : (
                <span className="text-[8px] font-bold text-red-500">
                  Select a month from make-payment page to confirm payment
                </span>
              )}
            </span>
          </div>
          <div className="flex w-11/12 mx-auto mt-1 justify-between items-center gap-2 text-lg">
            <h1 className="font-medium">Original Rent Price:</h1>
            <span>
              ${rent} <span className="text-xs">/monthly</span>
            </span>
          </div>
          {isValid && couponValidMessage && (
            <>
              <div className="flex justify-between  w-11/12 mx-auto mt-1 items-center gap-2 text-lg">
                <h1 className="font-medium">Discount Percentage:</h1>
                <span>
                  {discountPercentage}%{" "}
                  <span className="text-xs">/discount</span>
                </span>
              </div>
              <div className="flex justify-between  w-11/12 mx-auto mt-1 items-center gap-2 text-lg">
                <h1 className="font-medium">Discounted Rent Price:</h1>
                <span>
                  ${discountedRent}{" "}
                  <span className="text-xs">/coupon rent</span>
                </span>
              </div>
            </>
          )}
        </div>

        {/* apply coupon */}
        <form
          onSubmit={handleVerifyCoupon}
          className="w-11/12 md:w-10/12 mx-auto"
        >
          <div>
            <label className="text-lg font-semibold text-text">
              Apply Coupon Code
            </label>
            <div className="flex items-center gap-x-4 w-full">
              <input
                type="text"
                name="coupon_code"
                placeholder="Enter Valid Coupon To Get Discount"
                className="mt-2 w-7/12 md:w-8/12 input input-bordered rounded outline-none border-2 "
              />
              <div className="w-5/12 mt-4 md:w-4/12">
                <button
                  disabled={isValid}
                  className={`-mt-2 w-full h-full btn rounded bg-transparent border-accent border-2 text-accent text-lg hover:border-accent hover:bg-accent hover:text-white font-medium duration-300 ${
                    !!couponValidMessage &&
                    "text-red-500 border-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 px-1"
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
        <div className="w-11/12 md:w-10/12 mx-auto mt-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm rentPrice={rentPrice} selectedMonth={selectedMonth} />
          </Elements>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Payment;
