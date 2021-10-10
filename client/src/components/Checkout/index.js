import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./app.scss";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51JdAdCF4Yqr45yd9fJBb7uulrO4Q53z6yUmxWbmKZwij2gbxlIzXZpZCdHzp6wD2jOyzfiO67n5BEKDbKCYwcF3Z00LU9IjWkv");

export default function Checkout() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
