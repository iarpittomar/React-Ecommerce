import { CartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CartActionType.CLEAR_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item,
});
