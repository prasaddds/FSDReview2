import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userData from './users.json'; // Import user data from JSON file
import './Signup.css'; // Import CSS for styling

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('developer'); // Default role as developer
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if the username already exists
    const existingUser = userData.users.find((user) => user.username === username);
    if (existingUser) {
      alert('Username already exists. Please choose a different username.');
      return;
    }

    // Basic validation
    if (!username || !email || !password || !confirmPassword || !name) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Construct new user object
    const newUser = {
      username,
      email,
      password,
      name,
      role,
    };

    // Store new user data
    userData.users.push(newUser);

    // Inform user about successful signup
    alert('Signup successful. You can now login with your credentials.');

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');

    // Navigate to login page after successful signup
    navigate('/login');
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <button type="submit" className="signup-btn">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
