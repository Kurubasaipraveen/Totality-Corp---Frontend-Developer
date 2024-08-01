import React from 'react';
import Cart from '../components/Cart';

const Booking = ({ bookings, onUpdateBooking, onRemoveBooking }) => {
    return (
        <div className="booking-page">
            <Cart bookings={bookings} onUpdateBooking={onUpdateBooking} onRemoveBooking={onRemoveBooking} />
        </div>
    );
};

export default Booking;
