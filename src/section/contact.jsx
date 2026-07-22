import React, { useState } from "react";
import { User, Building2, Mail, MessageSquare, ArrowRight } from "lucide-react";
import Button from "../components/ui/Button";
import { contactData } from "../data/data";
import "./contact.css";

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
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        {/* Left column */}
        <div className="contact-left">
          <span className="contact-badge">{contactData.badge}</span>
          <h2 className="contact-title">
            {contactData.title}
            <br />
            <span className="contact-title-accent">{contactData.titleAccent}</span>
          </h2>
          <p className="contact-desc">
            {contactData.description}
          </p>

          <div className="contact-info-list">
            {contactData.info.map((info, i) => (
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
              <label className="contact-label">{contactData.form.nameLabel}</label>
              <div className="contact-input-wrap">
                <User size={18} className="contact-input-icon" />
                <input
                  className="contact-input"
                  type="text"
                  placeholder={contactData.form.namePlaceholder}
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </div>
            </div>

            <div className="contact-field">
              <label className="contact-label">{contactData.form.hotelLabel}</label>
              <div className="contact-input-wrap">
                <Building2 size={18} className="contact-input-icon" />
                <input
                  className="contact-input"
                  type="text"
                  placeholder={contactData.form.hotelPlaceholder}
                  value={form.hotel}
                  onChange={handleChange("hotel")}
                />
              </div>
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label">{contactData.form.emailLabel}</label>
            <div className="contact-input-wrap">
              <Mail size={18} className="contact-input-icon" />
              <input
                className="contact-input"
                type="email"
                placeholder={contactData.form.emailPlaceholder}
                value={form.email}
                onChange={handleChange("email")}
              />
            </div>
          </div>

          <div className="contact-field">
            <label className="contact-label">{contactData.form.messageLabel}</label>
            <div className="contact-input-wrap is-textarea">
              <MessageSquare size={18} className="contact-input-icon" />
              <textarea
                className="contact-textarea"
                placeholder={contactData.form.messagePlaceholder}
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>
          </div>

          <Button type="submit" variant="filled" className="contact-submit">
            {contactData.form.submitText}
            <ArrowRight size={17} className="contact-submit-arrow" />
          </Button>
        </form>
      </div>
    </section>
  );
}