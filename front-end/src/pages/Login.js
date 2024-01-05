import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import validateForm from '../js/formValidation.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import '../css/form.css';

const LoginForm = () => {
    
    const [signinProfile, setSigninProfile] = useState(false);
  
    const toggleSigninProfile = () => {
      setSigninProfile((prev) => !prev);
    };

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData, 'login');
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            axios.post('http://localhost:3001/api/login', { email: formData.email, password: formData.password })
                // Form is valid, proceed with submission
                .then(result => {
                    console.log('Form submitted:', result)
                    // save intothe locastorage || appcontext
                    // usetoken
                    if (result.data === 'Success') {
                        navigate(`/profile/${formData.email}`);
                    }
                })
                .catch(err => console.log('Error', err.message));
        } else {
            // Form is invalid, handle errors or show an alert
            console.log('Form validation failed');
        }
    };

    return (
        <div>
            <Header />
            <div className="body">
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input
                                type='text'
                                placeholder='Email'
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            <FaUser className='icon' />
                            {errors.email && <p className='error-message'>{errors.email}</p>}
                        </div>
                        <div className='input-box'>
                            <input
                                type='password'
                                placeholder='Password'
                                required
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <FaLock className='icon' />
                            {errors.password && <p className='error-message'>{errors.password}</p>}
                        </div>
                        <button type='submit' onClick={toggleSigninProfile}>Login</button>

                        <div className='register-link'>
                            <p>
                                Don&apos;t have an account ? <a href='/signup'>Register</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LoginForm;
