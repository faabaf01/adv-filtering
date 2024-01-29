// import { BsFillBagHeartFill } from "react-icons/bs";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function Card({ id, img, title, star, reviews, newPrice, prevPrice }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <section className="card zoom">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star}
          {star}
          {star}
          {star}
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> ${newPrice}
          </div>
          <button className="addToCartButton" onClick={() => addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
          {/* <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div> */}
        </section>
      </div>
    </section>
  );
}

export default Card;
