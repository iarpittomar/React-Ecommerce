import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../../CustomButton/CustomButton";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
