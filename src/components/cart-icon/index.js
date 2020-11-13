import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/actions";
import { selectCartItemsCount } from "../../redux/cart/selectors";
import { createStructuredSelector } from "reselect";

const index = ({ toggleCartHidden, itemsCount }) => {
  console.log(itemsCount);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(index);
