import React from 'react';
import './AboutPage.css'; // Import CSS for styling
import team from './team .png'; // Import image for the team

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="overview">
        <h2>Our Mission</h2>
        <p>At BugBusters, our mission is to provide a seamless platform for reporting and resolving software bugs, ensuring smooth operation and user satisfaction.</p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <p>Meet the dedicated team behind BugBusters:</p>
        <img src={team} alt="Team" />
        <p>We are a group of passionate developers, testers, and designers committed to delivering high-quality software solutions.</p>
      </section>
      {/* <footer>
        <p>&copy; 2024 BugBusters. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutPage;
