import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripecheckoutButton = ({ price }) => {
  const priceForstripe = price * 100;
  const publishableKey =
    'pk_test_51KOhoQSHKvqRnoc9ZpYozkLx30IOnBLhtpjJCh8VOreZGZqenIrRaRF7HQJAwkh7Hmxg4yi0k7YRYKxfRFERocXo00mbvp3kp2';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripecheckoutButton;
