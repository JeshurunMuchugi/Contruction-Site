import './Hero.css';
import { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(100);
  
  const slides = [
    { image: 'https://cdn.prod.website-files.com/66dd27093361c83ddd9d26cb/66e270c5d804518fb96c93f5_Hero%20Image%20v21.jpg', title: '#Construction Project' },
    { image: 'https://img.freepik.com/foto-gratis/construction-workers-examining-architectural-blueprint_23-2152006107.jpg', title: '#Building Excellence' },
    { image: 'https://cdn.prod.website-files.com/66dd27093361c83ddd9d26cb/66fb8e0469ac3a20f3714d39_3rd.jpg', title: '#Modern Architecture' }
  ];
  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setProgress(100);
    }, 12000);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.max(0, prev - 0.5));
    }, 60);
    
    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [slides.length]);
  
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="company-tag">
          <div className="scrolling-text">
            <span>Company No #1 Construction Co. • Company No #1 Construction Co. • Company No #1 Construction Co. • </span>
          </div>
        </div>
        
        <h1 className="hero-title">
          <div className="title-line line-1">Modernizing the</div>
          <div className="title-line line-2">
            Construction <div className="title-arrow">
              <svg width="98" height="34" viewBox="0 0 98 34" fill="none">
                <path d="M84.3226 1C84.3226 5.24357 85.7109 9.31311 88.1822 12.3137C90.6534 15.3143 94.0051 17 97.5 17M97.5 17C95.7695 17 94.056 17.4139 92.4572 18.2178C90.8585 19.0221 89.4058 20.2007 88.1822 21.6863C86.9585 23.1722 85.9879 24.936 85.3257 26.8771C84.6634 28.8183 84.3226 30.8989 84.3226 33M97.5 17L1 17" stroke="#070707" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <div className="title-line line-3">
            Indu<span className="industry-with-image">stry<video src="https://cdn.prod.website-files.com/66dd27093361c83ddd9d26cb%2F66dd6f8f5feb03b8ce9be394_hero%20video-transcode.mp4" autoPlay loop muted playsInline className="inline-video" /></span>
          </div>
        </h1>
        
        <p className="hero-description">
          Discover premium residences that best suit your needs and lifestyle, from elegance to modern luxury.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary"><span>Explore Now →</span></button>
          <button className="btn-secondary">Learn More →</button>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-image">
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide.image} 
              alt="Construction workers" 
              className={`hero-slide-image ${index === currentSlide ? 'active' : ''}`}
            />
          ))}
          <div className="image-overlay">
            <div className="overlay-content">
              <div key={`title-${currentSlide}`} className="project-tag animated-text">{slides[currentSlide].title}</div>
              <div className="slide-indicator">
                <div className="progress-bars">
                  {slides.map((_, index) => (
                    <div key={index} className={`progress-bar ${index === currentSlide ? 'active' : ''}`}></div>
                  ))}
                </div>
                <span key={`number-${currentSlide}`} className="slide-number animated-number">{currentSlide + 1}/{slides.length}</span>
              </div>
            </div>
            <div className="bottom-progress" style={{width: `${progress}%`}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;