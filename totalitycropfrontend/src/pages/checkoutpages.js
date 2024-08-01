import React from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage = ({ bookings, onCheckout }) => {
    return (
        <div className="checkout-page">
            <Checkout bookings={bookings} onCheckout={onCheckout} />
        </div>
    );
};

export default CheckoutPage;
