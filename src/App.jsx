import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>IT Support for Small Businesses in Farmington, UT</h1>
      <p>Fast, reliable IT support and consulting.</p>

      <a href="tel:+18016283323">📞 Call Now</a><br/>
      <a href="mailto:wes@techtheoryadvisors.com.com">✉️ Email</a>

      <h2>Services</h2>
      <ul>
        <li>IT Support</li>
        <li>Consulting</li>
        <li>Special Projects</li>
      </ul>

      <h2>Book Consultation</h2>
      <a href="https://calendly.com/YOUR-LINK" target="_blank">Schedule Here</a>

      <h2>Contact</h2>
      <input placeholder="Name" /><br/>
      <input placeholder="Email" /><br/>
      <textarea placeholder="Message" />
    </div>
  );
}
