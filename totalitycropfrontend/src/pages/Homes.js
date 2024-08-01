import React, { useState ,useEffect} from 'react';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import { Link } from 'react-router-dom';
const Home = ({ properties, onBook }) => {
    const [filters, setFilters] = useState({ location: '', minPrice: '', maxPrice: '', bedrooms: '' });
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Retrieve username from local storage
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);
    const handleFilterChange = (name, value) => {
        setFilters((prev) => ({ ...prev, [name]: value }));
        
    };

    const filteredProperties = properties.filter((property) => {
        return (
            (filters.location === '' || property.location.includes(filters.location)) &&
            (filters.minPrice === '' || property.price >= filters.minPrice) &&
            (filters.maxPrice === '' || property.price <= filters.maxPrice) &&
            (filters.bedrooms === '' || property.bedrooms >= filters.bedrooms)
        );
    });

    return (
        <div className="home">
            <div className="user-info">
                <h1>{`Hello, ${username}`}</h1>
                <Link to="/profile">
                    <img src='https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg' alt="Avatar" className="avatar-icon" />
                </Link>
            </div>
            <Filter filters={filters} onChange={handleFilterChange} />
            <div className="property-list">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} onBook={onBook} />
                ))}
            </div>
        </div>
    );
};

export default Home;
