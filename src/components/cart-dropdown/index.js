import React from "react";
import "./styles.scss";
import CustomButton from "../custom-button";
import CartItem from "../cart-item";
import { connect } from "react-redux";
import { selectCartItems } from '../../redux/cart/selectors'
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/actions'

const index = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map( cartItem => (
          <CartItem key={ cartItem.id} item={ cartItem }/>
          )) 
          : (
            <span className="empty-message">Your cart is empty!</span>
          )
        }
        <CustomButton onClick={()=>{
          history.push('/checkout');
          dispatch( toggleCartHidden());
          }}>CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(index));
