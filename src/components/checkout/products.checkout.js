import React from "react";
import { connect } from "react-redux";

import { addItem, removeItem } from "../../actions/checkout.actions";
import { getItems, getQuantity } from "../../reducers/checkout.selectors";
import SmallButton from "../shared/button/small.button";

const Products = props => {
  const { addItem, removeItem, quantity, items } = props;

  const handleAdd = () => {
    addItem(1);
  };

  const handleRemove = () => {
    removeItem(1);
  };

  return (
    <div>
      Here are some products
      <SmallButton handleClick={handleRemove}>-</SmallButton> {items.length}{" "}
      <SmallButton handleClick={handleAdd}>+</SmallButton>
    </div>
  );
};

const mapStateToProps = state => {
  const items = getItems(state);
  const quantity = getQuantity(state);
  return { items, quantity };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: id => dispatch(addItem(id)),
    removeItem: id => dispatch(removeItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
