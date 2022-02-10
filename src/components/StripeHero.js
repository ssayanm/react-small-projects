import phoneImg from "../phone.svg";
import { useGlobalContext } from "../context";

const StripeHero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="stripehero" onMouseOver={closeSubmenu}>
      <div className="stripehero-center">
        <article className="stripehero-info">
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="stripebtn">Start now</button>
        </article>
        <article className="stripehero-images">
          <img src={phoneImg} className="stripephone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default StripeHero;
