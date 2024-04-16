//15_UserProfile.js
import React from 'react';

const UserProfile = ({ username, age, email }) => {
  return (
    <div>
      <p>Username: {username}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserProfile;
