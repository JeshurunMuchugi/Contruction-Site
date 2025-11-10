import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="why-content">
          <p className="why-label">WHY CHOOSE US?</p>
          <h2 className="why-heading">Crafting Dreams From the Ground</h2>
          <p className="why-description">
            We believe in building structures we build trust, that's the relationships and futures. From the consultation project.
          </p>
          <div className="why-features">
            <div className="feature-item">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F25C05"/>
                <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Accurate Measurements</span>
            </div>
            <div className="feature-item">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F25C05"/>
                <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Certified Engineers</span>
            </div>
            <div className="feature-item">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F25C05"/>
                <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Residential Structures</span>
            </div>
            <div className="feature-item">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#F25C05"/>
                <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Best Sustainability</span>
            </div>
          </div>
          <button className="contact-btn">
            <svg className="house-icon" viewBox="0 0 24 24" fill="none">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="btn-text">Contact Us</span> <span className="arrow">→</span>
          </button>
        </div>
        <div className="why-image">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction engineers reviewing blueprints" />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
