import { CardElement } from "@stripe/react-stripe-js";
import "./Payment.css";

const CheckoutForm = ({rentPrice}) => {
  return (
    <form
    // onSubmit={handleSubmit}
    >
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
        // disabled={!stripe || !clientSecret || processing}
        className="mt-6 btn rounded bg-accent text-white text-lg font-medium tracking-widest w-full hover:bg-primary"
      >
        PAY ${rentPrice}
      </button></div>
    </form>
  );
};

export default CheckoutForm;
