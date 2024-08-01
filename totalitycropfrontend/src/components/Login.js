import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store username in local storage
        localStorage.setItem('username', username);
        // Add login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Navigate to Home page
        navigate('/home');
    };

    return (
        <div className='container'>
        <div className="box">
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <h1>Login Form</h1>
                </div>
                <div className="input-box">
                    <label htmlFor="text" className="label-color">User name</label>
                    <input
                        id="text"
                        name="text"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="password" className="label-color">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br />
                    <input type="submit" className="Login" value="Login" />
                    <br />
                </div>
            </form>
        </div>
    </div>
    );
};

export default LoginForm;
