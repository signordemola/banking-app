import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon" fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">
              {
                "The best banking experience I've ever had. The mobile app is intuitive and secure."
              }
            </p>
            <div className="testimonial-author">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
                alt="David Wilson"
                className="author-image"
                width={100}
                height={100}
              />
              <div>
                <h4>David Wilson</h4>
                <p>Business Owner</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="star-icon" fill="currentColor" />
              ))}
            </div>
            <p className="testimonial-text">
              {
                "SecureBank's savings features helped me achieve my financialgoals faster."
              }
            </p>
            <div className="testimonial-author">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
                alt="Sarah Chen"
                className="author-image"
                width={100}
                height={100}
              />
              <div>
                <h4>Sarah Chen</h4>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials