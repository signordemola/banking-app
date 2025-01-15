import { CheckCircle } from "lucide-react";
import React from "react";

const AppSection = () => {
  return (
    <section className="app-section">
      <div className="content">
        <div className="app-text">
          <h2>Banking in Your Pocket</h2>
          <p>
            Experience the freedom of secure banking anywhere, anytime with our
            award-winning mobile app.
          </p>

          <div className="app-features-list">
            <div className="top-list">
              <div
                className=""
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle className="list-icon" />
                <span>Instant Transfers & Payments</span>
              </div>

              <div
                className=""
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <CheckCircle className="list-icon" />
                <span>Mobile Check Deposit</span>
              </div>
            </div>

            <div
              className="bottom-list"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <CheckCircle className="list-icon" />
              <span>Biometric Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
