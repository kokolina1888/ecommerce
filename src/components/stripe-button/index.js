import React, { StrictMode } from "react";
import StripeCheckoutButton from 'react-stripe-checkout'

const index = ({ price }) => {
  const priceForStripe = price*100
  const publishableKey = "pk_test_xaIQ2ycX0lRn7f3b49Hzn0Pl";
  const onToken = token => {
    console.log(token)
    alert('Payment successful')
  }
  return (
    <StripeCheckoutButton
    label="Pay now"
    name="CRWN Clothing Ltd"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description ={`Your total price is $${price}`}
    amount={priceForStripe}
    panelLabel='PayNow'
    token={onToken}
    stripeKey={publishableKey}
    />
  );
};

export default index;
