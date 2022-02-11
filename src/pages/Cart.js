import { useGlobalContext } from "../context";
import CartContainer from "../components/CartContainer";
import "../styles/cart.css";
import CartNav from "../components/CartNav";

const Cart = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <CartNav />
      <CartContainer />
    </div>
  );
};

export default Cart;
