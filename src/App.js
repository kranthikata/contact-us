import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setErrorMessage(false);
    setSuccessMessage(false);
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage(true);
      return;
    } else {
      setSuccessMessage(true); // Show success message
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    }); // Reset form
  };

  return (
    <div className="main-container">
      <h1 className="heading">Contact Us</h1>

      <form onSubmit={handleSubmit} className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-element"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-element"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-element text"
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      {errorMessage && <p className="error">Please fill all the fields</p>}
      {successMessage && (
        <p className="success">Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}

export default App;
