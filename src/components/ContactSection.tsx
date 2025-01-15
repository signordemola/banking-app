import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            {
              "We're here to help with any questions about our banking services."
            }
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-header">
                <Phone className="contact-icon" size={20} />
                <h4>Phone Support</h4>
              </div>
              <div>
                <p>1-800-SECURE-BANK</p>
                <span>Available 24/7</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-header">
                <Mail className="contact-icon" size={20} />
                <h4>Email Us</h4>
              </div>
              <div>
                <p>support@securebank.com</p>
                <span>Response within 24 hours</span>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-header">
                <MapPin className="contact-icon" size={20} />
                <h4>Visit Us</h4>
              </div>
              <div>
                <p>123 Financial District</p>
                <span>New York, NY 10004</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
