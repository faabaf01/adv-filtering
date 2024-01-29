import React from "react";

export const CartItem = (props) => {
  const { id, img, title, newPrice, prevPrice } = props.data;
  return (
    <div className="cartItem">
      <img src={img} alt="item-img" className="item-img" />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
      </div>
      <p>${newPrice}</p>
    </div>
  );
};
