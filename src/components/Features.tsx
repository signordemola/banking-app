import { BarChart3, CreditCard, PiggyBank, Smartphone } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <section className="features-section">
      <div className="content">
        <h2>Why Choose SecureBank</h2>
        <div className="features-grid">
          <div className="feature-card">
            <CreditCard className="feature-icon" />
            <h3>Smart Banking</h3>
            <p>Manage your money with intelligent tools and insights</p>
          </div>
          <div className="feature-card">
            <Smartphone className="feature-icon" />
            <h3>Mobile First</h3>
            <p>Bank anywhere, anytime with our secure mobile app</p>
          </div>
          <div className="feature-card">
            <PiggyBank className="feature-icon" />
            <h3>Better Savings</h3>
            <p>Earn more with our high-yield savings accounts</p>
          </div>
          <div className="feature-card">
            <BarChart3 className="feature-icon" />
            <h3>Investment Tools</h3>
            <p>Grow your wealth with smart investment options</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
