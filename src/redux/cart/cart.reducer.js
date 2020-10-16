import { addItemToCart, removeItemFromCart } from "./cart.utils";
import { removeItem } from "./cart.action";

const { CartActionType } = require("./cart.type");

const INIT_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionType.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
