import logo from "../../../public/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-holder">
      <div className="header">
        <Link href="/" className="logo-holder">
          <img src={logo.src} alt="microsoft logo" className="logo" />
          <span className="logo-text">Microhard</span>
        </Link>
        <nav className="nav">
          <Link href="#" className="nav-item">
            Microhard 365
          </Link>
          <Link href="#" className="nav-item">
            Bing
          </Link>
          <Link href="#" className="nav-item">
            Windows
          </Link>
          <Link href="#" className="nav-item">
            Microhard Edge
          </Link>
          <Link href="/seeds" className="nav-item">
            Seeds
          </Link>
          <div className="hover"></div>
        </nav>
        <div className="other">
          <Link href="#" className="other-item">
            Search
          </Link>
          <Link href="#" className="other-item">
            User
          </Link>
        </div>
      </div>
    </div>
  );
}
