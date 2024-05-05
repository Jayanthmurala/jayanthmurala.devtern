import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3000/auth/login', { email, password });
            if (response.data.status) {
                navigate('/home');
            }
        } catch (error) {
            console.error('Error logging in user:', error);
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid email or password');
            } else {
                setErrorMessage('An error occurred. Please try again later.');
            }
        }
    }

    return (
        <div className='login-container'>
            <form className='login-form' onSubmit={handleSubmit}>
                <h2>Login</h2>

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='**********'
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Login</button>
                <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Login;
