import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PropertyCard.css'
const PropertyCard = ({ property, onBook }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.title} className='image'/>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>${property.price} per night</p>
            <p>{property.location}</p>
            <Link to='/cart'>
            <button onClick={() => onBook(property)}>Book Now</button>
            </Link>
        </div>
    );
};

export default PropertyCard;
