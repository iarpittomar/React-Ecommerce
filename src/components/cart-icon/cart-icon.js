import React from "react";
import "./cart-icon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count"></span>
    </div>
  );
};

export default CartIcon;
