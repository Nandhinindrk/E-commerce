import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Womens/AuthContext'; // Adjust the path as necessary

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { login } = useAuth(); // Using login function from AuthContext
  const navigate = useNavigate(); // useNavigate to redirect

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Call login function from AuthContext for login
      login();
      console.log('Logging in with', formData);
      // After successful login, redirect to cart page
      navigate('/cart');
    } else {
      // Handle signup logic here
      console.log('Signing up with', formData);
      // After successful signup, you might want to redirect or show a message
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleGoogleLogin = () => {
    // Logic for Google login here
    console.log('Logging in with Google');
    login(); // Assuming Google login also calls the login function
    navigate('/cart'); // Redirect to cart after successful login
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        {!isLogin && (
          <button onClick={handleGoogleLogin} className="google-button">
            Continue with Google
          </button>
        )}
        
        <p className="toggle-form">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
          <button onClick={toggleForm}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>

      <style jsx>{`
        .login-signup-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f0f0;
        }

        .form-container {
          width: 100%;
          max-width: 400px;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          margin-bottom: 15px;
          text-align: left;
        }

        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .submit-button, .google-button {
          width: 100%;
          padding: 10px;
          background-color: #333;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 10px;
        }

        .google-button {
          background-color: #db4437;
        }

        .submit-button:hover, .google-button:hover {
          background-color: #555;
        }

        .toggle-form {
          margin-top: 15px;
        }

        .toggle-form button {
          background: none;
          border: none;
          color: #007bff;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LoginSignup;
