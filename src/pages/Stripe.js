import React from "react";
import StripeHero from "../components/StripeHero";
import StripeNavbar from "../components/StripeNavbar";
import StripeSidebar from "../components/StripeSidebar";
import StripeSubmenu from "../components/StripeSubmenu";
import "../styles/stripe.css";

const Stripe = () => {
  return (
    <>
      <StripeNavbar />
      <StripeSidebar />
      <StripeHero />
      <StripeSubmenu />
    </>
  );
};

export default Stripe;
