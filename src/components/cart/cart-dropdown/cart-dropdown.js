import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../../CustomButton/CustomButton";
import { connect } from "react-redux";
import CartItem from "../../cart-item/cart-item";
import { selectCartItems } from "../../../redux/cart/cart.selector";

const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item}></CartItem>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
