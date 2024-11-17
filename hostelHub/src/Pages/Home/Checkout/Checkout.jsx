import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const { amount } = useParams();
  const paymentData = { amount };

  const handleCardPay = async () => {
    const res = await axiosSecure.post("/create-payment-intent", paymentData);
    console.log(res.data);
    setClientSecret(res.data.clientSecret);
  };

  useEffect(() => {
    handleCardPay();
  }, []);

  const appearence = {
    theme: "stripe",
  };

  const options = {
    // passing the client secret obtained from the server
    clientSecret,
    appearence,
  };
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
