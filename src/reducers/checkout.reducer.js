import actionTypes from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.checkout.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.id]
      };
    case actionTypes.checkout.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.id)
      };
    default:
      return state;
  }
};
