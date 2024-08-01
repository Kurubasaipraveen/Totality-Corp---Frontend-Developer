import React, { useState } from 'react';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';
const Checkout = ({ bookings, onCheckout }) => {
    const [details, setDetails] = useState({ name: '', email: '', payment: '' });
    const [isSuccess, setIsSuccess] = useState(false);
    const total = bookings.reduce((acc, booking) => acc + booking.price, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCheckout(details);
        setIsSuccess(true); // Set success state to true
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <h3>Total: ${total}</h3>
            {isSuccess ? (
                <div className="success-message">
                    <h4>Booking Successful!</h4>
                    <p>Thank you for your booking, {details.name}. A confirmation email has been sent to {details.email}.</p>
                    
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="text" name="payment" placeholder="Payment Details" onChange={handleChange} required />
                    <div className='btn'>
                    <button type="submit">Complete Booking</button>
                    <Link to='/cart'>
                    <button>Cancle</button>
                    </Link>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Checkout;
