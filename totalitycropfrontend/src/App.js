import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Homes';
import Booking from './pages/Bookings';
import CheckoutPage from './pages/checkoutpages';
import Login from './components/Login'
const App = () => {
    const [properties] = useState([
      {
        id: 1,
        title: 'Cozy Cottage',
        description: 'A nice cozy cottage.',
        price: 1300,
        image: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-7.jpg ',
        location: 'hindupur',
        bedrooms: 3,
    },
    {
        id: 2,
        title: 'Modern Apartment',
        description: 'A modern apartment in the city.',
        price: 4000,
        image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Most-Beautiful-House-in-the-World_0_1200.jpg',
        location: 'bangalore',
        bedrooms: 4,
    },
    {
      id: 3,
      title: 'Small Apartment',
      description: 'A modern apartment in the city.',
      price: 1200,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJFPhlVtTugnLqkzfaCwjONiSfwKIy8L-fg&s',
      location: 'hyderabad',
      bedrooms: 2,
  },
  {
    id: 4,
    title: 'Large Apartment',
    description: 'A modern apartment in the city.',
    price: 5000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdZipWf7YduhUMN2mb7VRzNegbuf3ajVkpg&s',
    location: 'pune',
    bedrooms: 1,
},
{
  id: 5,
  title: 'Texas Apartment',
  description: 'A modern apartment in the city.',
  price: 12200,
  image: 'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/Paris_Exterior_4-Edit-e1714649473120.png',
  location: 'delhi',
  bedrooms: 5,
},
{
id: 6,
title: 'mumbai Apartment',
description: 'A modern apartment in the city.',
price: 4700,
image: 'https://foyr.com/learn/wp-content/uploads/2022/06/types-of-house-styles-and-homes.jpg',
location: 'mumbai',
bedrooms: 2,
},
{
id: 7,
title: 'mysore Apartment',
description: 'A modern apartment in the city.',
price: 2999,
image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDcdlt2oAwhMxEqQ-wi4SKQ6oWd6XAk1xDg&s',
location: 'mysore',
bedrooms: 4,
},
    ]);

    const [bookings, setBookings] = useState([]);

    const handleBook = (property) => {
        setBookings((prev) => [...prev, { ...property, quantity: 1 }]);
    };

    const handleRemoveBooking = (index) => {
        setBookings((prev) => prev.filter((_, i) => i !== index));
    };

    const handleUpdateBooking = (updatedBookings) => {
        setBookings(updatedBookings);
    };

    const handleCheckout = (details) => {
        console.log('Booking details:', details);
        setBookings([]);
    };

    return (
        <Router>
            <div className="App">
                
                <Routes>
                  <Route path='/' Component={Login}/>
                    <Route path="/home" element={<Home properties={properties} onBook={handleBook} />} />
                    <Route path="/cart" element={<Booking bookings={bookings} onUpdateBooking={handleUpdateBooking} onRemoveBooking={handleRemoveBooking} />} />
                    <Route path="/checkout" element={<CheckoutPage bookings={bookings} onCheckout={handleCheckout} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
