import React, { useState } from "react";
import { User, Building2, Mail, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";
import "./contact.css";

// ---- Contact info model ----------------------------------------------------

const CONTACT_INFO = [
  { icon: Mail, text: "sales@hotelx.com" },
  { icon: Phone, text: "+92 300 2324443\n+1 343 2324443" },
  { icon: MapPin, text: "Lahore, Pakistan · Makkah, Saudi Arabia" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", hotel: "", email: "", message: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // wire this up to your backend / email service
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">
        {/* Left column */}
        <div className="contact-left">
          <span className="contact-badge">Contact Sales</span>
          <h2 className="contact-title">
            Request a Personalized Hotel
            <br />
            <span className="contact-title-accent">Audit &amp; System Architecture Setup</span>
          </h2>
          <p className="contact-desc">
            Tell us about your hotel, and we'll help you find the right HotelX setup for
            bookings, rooms, billing, staff, and reporting.
          </p>

          <div className="contact-info-list">
            {CONTACT_INFO.map((info, i) => (
              <div key={i} className="contact-info-card">
                <span className="contact-info-icon">
                  <info.icon size={17} />
                </span>
                <p className="contact-info-text">
                  {info.text.split("\n").map((line, j) => (
                    <React.Fragment key={j}>
                      {j > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: form */}
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <div className="contact-field">
              <label className="contact-label">Your Name</label>
              <div className="contact-input-wrap">
                <User size={18} className="contact-input-icon" />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-label">Hotel Name</label>
              <div className="contact-input-wrap">
                <Building2 size={18} className="contact-input-icon" />
                <input
                  className="contact-input"
                  type="text"
                  placeholder="Hotel Name"
                  value={form.hotel}
                  onChange={handleChange("hotel")}
                />
              </div>
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label">Email Address</label>
            <div className="contact-input-wrap">
              <Mail size={18} className="contact-input-icon" />
              <input
                className="contact-input"
                type="email"
                placeholder="Professional Email Address"
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label">Message</label>
            <div className="contact-input-wrap is-textarea">
              <MessageSquare size={18} className="contact-input-icon" />
              <textarea
                className="contact-textarea"
                placeholder="Total Room Count / Number of Branches (Dropdown)"
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>
          </div>

          <button type="submit" className="contact-submit">
            Send message
            <ArrowRight size={17} className="contact-submit-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
}