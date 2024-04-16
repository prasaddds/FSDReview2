//15_.js
import React from 'react';
import UserProfile from './15_UserProfile';

function Fifteen() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile username="example_user" age={25} email="user@example.com" />
    </div>
  );
}

export default Fifteen;
