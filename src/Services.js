import './Services.css';
import { useEffect, useRef } from 'react';

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-wrapper">
            <p className="services-label">
              <span className="label-line"></span> Our Services
            </p>
            <h2 className="services-heading">
              Comprehensive <span className="orange-text">Construction</span> Solutions Tailored to You
            </h2>
          </div>
          <button className="view-all-btn">
            View All Services <span className="arrow-circle">→</span>
          </button>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80)' }}></div>
            <div className="card-overlay"></div>
            <div className="card-dark-overlay"></div>
            <div className="card-content">
            <span className="card-number">01</span>
            <div className="card-icon">
              <img src="https://cdn.prod.website-files.com/6640937812db8957187e2c46/66409d4a725564404bd22140_architectural-design.png" alt="Architectural Design" />
            </div>
            <h3 className="card-title">Architectural Design</h3>
            <p className="card-description">Craft your dream home with our expert architects, ensuring functionality and aesthetics blend seamlessly.</p>
            <a href="#" className="learn-more">Learn More <span className="arrow-circle-small">→</span></a>
            </div>
          </div>

          <div className="service-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80)' }}></div>
            <div className="card-overlay"></div>
            <div className="card-dark-overlay"></div>
            <div className="card-content">
            <span className="card-number">02</span>
            <div className="card-icon">
              <img src="https://cdn.prod.website-files.com/6640937812db8957187e2c46/66409f802d87f739e01a3c6b_construction-management.png" alt="Construction Management" />
            </div>
            <h3 className="card-title">Construction & Management</h3>
            <p className="card-description">Leave the complexities to us as we oversee every aspect of your project, ensuring timelines and budgets are met.</p>
            <a href="#" className="learn-more">Learn More <span className="arrow-circle-small">→</span></a>
            </div>
          </div>

          <div className="service-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80)' }}></div>
            <div className="card-overlay"></div>
            <div className="card-dark-overlay"></div>
            <div className="card-content">
            <span className="card-number">03</span>
            <div className="card-icon">
              <img src="https://cdn.prod.website-files.com/6640937812db8957187e2c46/6640a016b6a5c7816c01c4c3_sustainable-solutions.png" alt="Sustainable Solutions" />
            </div>
            <h3 className="card-title">Sustainable Solutions</h3>
            <p className="card-description">Embrace eco-friendly practices with our sustainable construction options, minimizing environmental impact.</p>
            <a href="#" className="learn-more">Learn More <span className="arrow-circle-small">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
