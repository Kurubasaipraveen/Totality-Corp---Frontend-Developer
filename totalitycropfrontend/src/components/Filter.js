import React from 'react';
import '../styles/Filter.css'
const Filter = ({ filters, onChange }) => {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Location"
                value={filters.location}
                onChange={e => onChange('location', e.target.value)}
                className='input'
            />
            <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={e => onChange('minPrice', e.target.value)}
                className='input'
            />
            <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={e => onChange('maxPrice', e.target.value)}
                className='input'
            />
            <input
                type="number"
                placeholder="Bedrooms"
                value={filters.bedrooms}
                onChange={e => onChange('bedrooms', e.target.value)}
                className='input'
            />
        </div>
    );
};

export default Filter;
