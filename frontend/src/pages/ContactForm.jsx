// Import React and useState hook
import React, { useState } from "react";

// Create a ContactForm component
const ContactForm = () => {
  // Define state variables for name, email and message
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    // Prevent default behavior of reloading the page
    e.preventDefault();
    // Display the form data in the console
    console.log({ name, email, message });
    // Clear the form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  // Return the JSX code for the contact form
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

// Export the ContactForm component
export default ContactForm;
