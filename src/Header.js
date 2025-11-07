import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon">
          <div className="building-bars">
            <div className="bar orange"></div>
            <div className="bar black"></div>
            <div className="bar black tall"></div>
          </div>
        </div>
        <span className="logo-text">Buildix<span className="dot">.</span></span>
      </div>
      
      <nav className="nav">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">About Us</a>
        <a href="#" className="nav-item">Services</a>
        <a href="#" className="nav-item">Blog</a>
        <a href="#" className="nav-item">Pages <span className="dropdown-arrow">▼</span></a>
      </nav>
      
      <button className="cta-button">Let's Talk →</button>
    </header>
  );
}

export default Header;