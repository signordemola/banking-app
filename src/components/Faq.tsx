import { HelpCircle } from "lucide-react";
import React from "react";

const Faq = () => {
  return (
    <section className="faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-grid">
        <div className="faq-item">
          <HelpCircle className="faq-icon" />
          <h3>How do I open an account?</h3>
          <p>
            {
              "      You can open an account online in just 5 minutes. Click 'Get Started' and follow the simple steps."
            }
          </p>
        </div>
        <div className="faq-item">
          <HelpCircle className="faq-icon" />
          <h3>Is online banking secure?</h3>
          <p>
            We use bank-grade encryption and multiple security layers to keep
            your information safe.
          </p>
        </div>
        <div className="faq-item">
          <HelpCircle className="faq-icon" />
          <h3>What are the account fees?</h3>
          <p>
            We offer zero-fee checking accounts and competitive rates on savings
            accounts.
          </p>
        </div>
        <div className="faq-item">
          <HelpCircle className="faq-icon" />
          <h3>How can I contact support?</h3>
          <p>
            Our support team is available 24/7 through phone, email, or secure
            messaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
