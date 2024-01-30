import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { GiRunningShoe } from "react-icons/gi";
import data from "../../db/data";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {data.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Checkout </button>
        </div>
      ) : (
        <div className="cart-empty">
          <GiRunningShoe className="cart-empty-icon" />
          <h3>Your Cart is empty.</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
