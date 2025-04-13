import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../style/contact.css";

export const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6eufsnv', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" required />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="5" required />

        <input type="submit" value="Send" className="send-btn" />
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
};
