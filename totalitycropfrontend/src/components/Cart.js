import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = ({ bookings, onUpdateBooking, onRemoveBooking }) => {
    const handleIncrease = (index) => {
        const updatedBookings = bookings.map((booking, i) =>
            i === index ? { ...booking, quantity: booking.quantity + 1 } : booking
        );
        onUpdateBooking(updatedBookings);
    };

    const handleDecrease = (index) => {
        const updatedBookings = bookings.map((booking, i) =>
            i === index && booking.quantity > 1 ? { ...booking, quantity: booking.quantity - 1 } : booking
        );
        onUpdateBooking(updatedBookings);
    };

    const total = bookings.reduce((acc, booking) => acc + booking.price * booking.quantity, 0);

    return (
        <div className="cart">
            <h2>Booking Cart</h2>
            {bookings.map((booking, index) => (
                <div key={index} className="booking">
                    <img src={booking.image} alt={booking.title} className="booking-image" />
                    <div className="booking-details">
                        <h4>{booking.title}</h4>
                        <p>{booking.description}</p>
                        <p>${booking.price} per night</p>
                        <div className="quantity-controls">
                            <button onClick={() => handleDecrease(index)}>-</button>
                            <span>{booking.quantity}</span>
                            <button onClick={() => handleIncrease(index)}>+</button>
                        </div>
                        <button onClick={() => onRemoveBooking(index)}>Remove</button>
                    </div>
                </div>
            ))}
            <h3>Total: ${total}</h3>
            <Link to="/checkout">
                <button className="checkout-button">Checkout</button>
            </Link>
            <Link to="/home">
                <button className="checkout-button">Cancle</button>
            </Link>
        </div>
    );
};

export default Cart;
