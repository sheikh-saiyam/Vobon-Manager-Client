import { CardElement } from "@stripe/react-stripe-js";
import "./Payment.css";
import { useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import { useEffect } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const CheckoutForm = ({ rentPrice, selectedMonth }) => {
  const [clientSecret, setClientSecret] = useState("");

  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  // Get PaymentIntent ----->
  const getPaymentIntent = async () => {
    const { data } = await axiosSecure.post("/create-payment-intent", {
      rentPrice: rentPrice,
    });
    setClientSecret(data.clientSecret);
  };

  useEffect(() => {
    if (rentPrice > 0) {
      getPaymentIntent();
    }
  }, [rentPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Checks if Stripe.js and Elements are properly initialized --->
    if (!stripe || !elements) return;

    // Retrieves the card details entered by the user --->
    const card = elements.getElement(CardElement);

    // If no card element is found, stop execution --->
    if (card == null) return;

    // Creates a payment method with the card details --->
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // If an error occurs during payment method creation --->
    if (error) {
      console.log("[error]--->", error);
      // show error toast --->
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text:
          error.message || "An unexpected error occurred. Please try again.",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    } else {
      console.log("[PaymentMethod]--->", paymentMethod);
    }

    // Confirm Stripe Card Payment ----->
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user.email,
          },
        },
      });

    // show error toast if confirmError caught --->
    if (confirmError) {
      // setProcessing(false);
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text:
          confirmError.message ||
          "An unexpected error occurred. Please try again.",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
      console.log(confirmError);
    } else {
      console.log("[paymentIntent]--->", paymentIntent);
    }

    // PaymentIntent Status Succeeded Show Success Toast --->
    if (paymentIntent.status === "succeeded") {
      Swal.fire({
        title: "🎉 Rent Payment Successful!",
        html: `Your payment has been processed successfully! <br/> <strong>Transaction ID:</strong> ${paymentIntent.id}`,
        icon: "success",
        iconColor:"#4794ed",
        confirmButtonText: "Awesome!",
        confirmButtonColor: "#4794ed",
        backdrop: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="w-2/3 mx-auto">
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="mt-6 btn rounded bg-accent text-white text-lg font-medium tracking-widest w-full hover:bg-primary"
        >
          PAY ${rentPrice}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
