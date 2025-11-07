import './Partners.css';

function Partners() {
  return (
    <section className="partners">
      <div className="partners-content">
        <h2 className="partners-heading">50k+ Trusted Partner's</h2>
        <div className="partners-logos">
          <div className="partner-logo">
            <div className="logo-icon bezify-icon">
              <div className="bezify-lines"></div>
            </div>
            <span className="logo-text">Bezify</span>
          </div>
          <div className="partner-logo">
            <div className="logo-icon taskbes-icon">
              <div className="taskbes-shape"></div>
            </div>
            <span className="logo-text">Taskbes</span>
          </div>
          <div className="partner-logo">
            <div className="logo-icon appixy-icon">
              <div className="appixy-lines"></div>
            </div>
            <span className="logo-text">Appixy</span>
          </div>
          <div className="partner-logo">
            <div className="logo-icon markeotic-icon">
              <div className="markeotic-shape"></div>
            </div>
            <span className="logo-text">Markeotic</span>
          </div>
          <div className="partner-logo">
            <div className="logo-icon fint-icon">
              <div className="fint-circle"></div>
            </div>
            <span className="logo-text">Fint</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;