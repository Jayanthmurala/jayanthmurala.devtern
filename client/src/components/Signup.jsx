import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/signup', {
            username: username,
            email: email,
            password: password 
        }).then(response => {
            if (response.data.status) {
                navigate('/login');
            }
        }).catch(err => {
            console.log(err);
            if (err.response && err.response.status === 400) {
                setErrorMessage(err.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        });
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign up</h2>

                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='Username'
                    value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='**********'
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
}

export default Signup;
