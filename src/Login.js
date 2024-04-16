import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS for styling

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login every time
    setIsLoggedIn(true);
    navigate('/'); // Navigate to Allocated Work page upon successful login
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Login;
