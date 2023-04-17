import logo from "../../../public/logo.png";

export default function Header() {
  return (
    <div className="header-holder">
      <div className="header">
        <div className="logo-holder">
          <img src={logo.src} alt="microsoft logo" className="logo" />
          <span className="logo-text">Microhard</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-item">
            Microsoft 365
          </a>
          <a href="#" className="nav-item">
            Teams
          </a>
          <a href="#" className="nav-item">
            Windows
          </a>
          <a href="#" className="nav-item">
            Surface
          </a>
          <a href="#" className="nav-item">
            Xbox
          </a>
          <div className="hover"></div>
        </nav>
        <div className="other">
          <a href="#" className="other-item">
            Search
          </a>
          <a href="#" className="other-item">
            Cart
          </a>
          <a href="#" className="other-item">
            User
          </a>
        </div>
      </div>
    </div>
  );
}
