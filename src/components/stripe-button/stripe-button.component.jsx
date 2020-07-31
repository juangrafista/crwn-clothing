import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HB4NMBqyO9NcchA1J0osd5FrFJNzQDxCOsBWl8y8cqWnCX9f75XGtguLSWRxl9Uj1ILr1nS1IBUwwDxMlif8LGT00yVRWVnja';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Sucessful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
