import React from 'react';
import './Homepage.css'; // Import CSS for styling
import image1 from './image1.jpg'; 
import image2 from './image2.png';
import image3 from './image3.png';
import amritaLogo from './amrita.jpg'; // Import logo image

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <img src={amritaLogo} alt="Amrita Logo" className="logo" height={100} width={100}/> {/* Include the logo */}
        <h1>Welcome to BugBusters!</h1>
        <p>Your one-stop destination for reporting and resolving software bugs.</p>
      </header>
      <section className="features">
        <div className="feature">
          <img src={image1} alt="Bug Reporting" />
          <h2>Report Bugs</h2>
          <p>Quickly report any bugs or issues you encounter in the software.</p>
        </div>
        <div className="feature">
          <img src={image2} alt="Bug Assignment" />
          <h2>Assign Bugs</h2>
          <p>Efficiently allocate bugs to developers for resolution.</p>
        </div>
        <div className="feature">
          <img src={image3} alt="Bug Tracking" />
          <h2>Track Progress</h2>
          <p>Monitor the status and progress of reported bugs through resolution.</p>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 BugBusters. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
