import { Building2 } from "lucide-react";
import React from "react";

const LandingFooter = () => {
  return (
    <footer className="landing-footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <Building2 className="brand-logo" />
              <span className="brand-name">SecureBank</span>
            </div>
            <p style={{marginTop:'1.5rem'}}>
              Secure innovative <br /> banking for everyone.
            </p>
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <a href="#">Checking</a>
            <a href="#">Savings</a>
            <a href="#">Investments</a>
            <a href="#">Credit Cards</a>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Security</a>
          </div>
          <div className="footer-links">
            <h3>Resources</h3>
            <a href="#">Blog</a>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Status</a>
          </div>
          <div className="footer-newsletter" style={{marginBottom:'1.5rem'}}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for updates and insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 SecureBank. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
