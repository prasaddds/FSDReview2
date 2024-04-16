import React from 'react';
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  return (
    <div className="contact-page">
      <header>
        <h1>Contact Us</h1>
      </header>
      <section className="contact-info">
        <h2>Our Contact Information</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us:</p>
        <ul>
          <li><strong>Phone:</strong> [Your Phone Number]</li>
          <li><strong>Email:</strong> [Your Email Address]</li>
          <li><strong>Address:</strong> [Your Physical Address]</li>
        </ul>
      </section>
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
