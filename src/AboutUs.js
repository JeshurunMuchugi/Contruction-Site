import './AboutUs.css';
import { useEffect, useRef } from 'react';

function AboutUs() {
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
    <section className="about-us" ref={sectionRef}>
      <div className="about-container">
        <div className="about-image-column">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Construction workspace" />
          <div className="overlay-text awesome">A<span className='half-a'>wesome</span></div>
          <div className="overlay-text inventive"><span className='outline'>Inventi<span className='half-v'>v</span></span>e</div>
          <div className="overlay-text historic"><span className="outline"><span className='half-h'>H</span></span>istoric</div>
        </div>
        <div className="about-content-column">
          <div className="about-label">ABOUT US</div>
          <h2 className="about-heading">We're Leading the Way in Modern Construction</h2>
          <p className="about-paragraph">We believe in building structures we build trust, relationships and futures. From the initial consultation to completion, our team is committed to excellence every project.</p>
          <button className="about-button">More About Us →</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
