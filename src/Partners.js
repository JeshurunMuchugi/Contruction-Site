import './Partners.css';

function Partners() {
  const LogoSet = () => (
    <>
      <a href="https://bezify.com" target="_blank" rel="noopener noreferrer" className="partner-logo">
        <div className="logo-icon bezify-icon">
          <div className="bezify-lines"></div>
        </div>
        <span className="logo-text">Bezify</span>
      </a>
      <a href="https://taskbes.com" target="_blank" rel="noopener noreferrer" className="partner-logo">
        <div className="logo-icon taskbes-icon">
          <div className="taskbes-shape"></div>
        </div>
        <span className="logo-text">Taskbes</span>
      </a>
      <a href="https://appixy.com" target="_blank" rel="noopener noreferrer" className="partner-logo">
        <div className="logo-icon appixy-icon">
          <div className="appixy-lines"></div>
        </div>
        <span className="logo-text">Appixy</span>
      </a>
      <a href="https://markeotic.com" target="_blank" rel="noopener noreferrer" className="partner-logo">
        <div className="logo-icon markeotic-icon">
          <div className="markeotic-shape"></div>
        </div>
        <span className="logo-text">Markeotic</span>
      </a>
      <a href="https://fint.com" target="_blank" rel="noopener noreferrer" className="partner-logo">
        <div className="logo-icon fint-icon">
          <div className="fint-circle"></div>
        </div>
        <span className="logo-text">Fint</span>
      </a>
    </>
  );

  return (
    <section className="partners">
      <div className="partners-content">
        <h2 className="partners-heading">50k+ Trusted<br />Partner's</h2>
        <div className="partners-logos-wrapper">
          <div className="partners-logos-scroll">
            <LogoSet />
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;