import {
  useElements,
  useStripe,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./stripeCard.css";
import background from "/menubg2.avif";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error is", error);
    } else {
      console.log("payment method", paymentMethod);
    }

    // LETS CUT CUSTOMERS MONEY
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "annonimous",
            name: user?.displayName || "annonimous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setMessage(confirmError.message);
      setIsLoading(false);
    }
    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const { amount, client_secret, created, currency, id } = paymentIntent;
      const { email, displayName } = user;
      const paymentInfo = {
        amount: amount / 100,
        client_secret,
        created,
        currency,
        id,
        email,
        displayName,
      };

      const { data } = await axiosSecure.post("/transections", paymentInfo);
      if (data.insertedId) {
        toast.success("Payment Succesfull.");
        navigate("/");
      }

      // const res = await axiosSecure.put(`/updateBadge/${email}`);

      setIsLoading(false);
    }
  };

  return (
    <form className="max-w-2xl mx-auto lg:mt-24" onSubmit={handlePayment}>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="card shadow-xl py-4 lg:py-8"
      >
        <CardElement
          className="mx-auto w-full"
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
        <button
          className="btn w-20 mx-auto my-6 px-8 border-2"
          type="submit"
          disabled={!stripe || isLoading}
        >
          Pay
        </button>
      </div>
      {message && <p className="text-red-600">{message}</p>}
    </form>
  );
};

export default CheckoutForm;
