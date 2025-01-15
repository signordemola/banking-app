"use client";
import React from "react";
import Button from "./ui/Button";
import { ChevronRight, Shield } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Banking Made Simple, Secure, and Smart</h1>
        <p className="hero-subtitle">
          Experience the next generation of digital banking with
          industry-leading security and innovative financial tools.
        </p>

        <div className="hero-cta">
          <Button variant="outline" color="--primary-color" type="button">
            <span>Open an Account</span>
          </Button>

          <Link href={`/about`} className="learn-more">
            <span>Learn More</span>
            <ChevronRight className="icon" />
          </Link>
        </div>

        <div className="trust-indicators">
          <Shield className="trust-icon" />
          <span>Bank-Grade Security</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
