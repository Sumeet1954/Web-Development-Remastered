import React, { useState } from "react";

const EmailSubscription = ({ placeholder = "Enter your email" }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <form className="email-search" onSubmit={handleSubmit}>
      <i className="ri-send-plane-fill" aria-hidden="true"></i>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailSubscription;