import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    // Add the current time to the form data
    const formDataWithTime = {
      ...formData,
      time: new Date().toLocaleString(), // Adds the current date and time
    };

    // Send email using EmailJS
    emailjs
      .send(
        'service_qooa525', // Your Service ID
        'template_zc8jish', // Your Template ID
        formDataWithTime, // Include the time in the form data
        'gQB7rugWoE5U9bzxG' // Your User ID (Public Key)
      )
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setError('');
        },
        (error) => {
          console.error('Failed to send email:', error);
          setError('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Feel free to reach out to me for collaborations, opportunities, or just a friendly chat!</p>
            <div className="social-links">
              <a href="http://www.linkedin.com/in/happy-malamuzi-47a320295" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="mailto:happymalamuzi@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;