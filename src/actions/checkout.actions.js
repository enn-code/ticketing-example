import actionTypes from "./actionTypes";

export const addItem = itemId => {
  return {
    type: actionTypes.checkout.ADD_ITEM,
    id: itemId
  };
};

export const removeItem = itemId => {
  return {
    type: actionTypes.checkout.REMOVE_ITEM,
    id: itemId
  };
};
