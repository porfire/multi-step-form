import React from "react";

const PersonalInfo = ({ formData, handleChange, handleNextStep }) => {
  return (
    <div>
      <h2>Personal Info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
          />
        </label>
        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
          />
        </label>
        <button type="button" onClick={handleNextStep}>
          Next Step
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
