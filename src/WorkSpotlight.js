import './WorkSpotlight.css';

function WorkSpotlight() {
  return (
    <section className="work-spotlight">
      <div className="spotlight-container">
        <div className="spotlight-header">
          <div className="header-content">
            <p className="spotlight-label">FEATURED PROJECTS</p>
            <h2 className="spotlight-heading">Our Work Spotlight</h2>
            <p className="spotlight-description">
              Our approach client focused ensuring your vision is at the heart of everything we do.
            </p>
          </div>
          <button className="see-all-btn">
            <span>See All Projects</span> <span className="arrow">→</span>
          </button>
        </div>

        <div className="projects-grid">
          <div className="project-main">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80" alt="PW Residences" />
              <div className="image-overlay-info">
                <p className="overlay-name"># PW Residences</p>
                <p className="overlay-location"># Stive Jackson, USA</p>
              </div>
            </div>
          </div>

          <div className="project-side">
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" alt="Construction Project" />
              <div className="image-overlay-info">
                <p className="overlay-name"># PW Residences</p>
                <p className="overlay-location"># Stive Jackson, USA</p>
              </div>
            </div>
            <div className="project-image-wrapper">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Modern House" />
              <div className="image-overlay-info">
                <p className="overlay-name"># PW Residences</p>
                <p className="overlay-location"># Stive Jackson, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSpotlight;
