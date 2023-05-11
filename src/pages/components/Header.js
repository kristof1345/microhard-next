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
          <Link href="/microhard365" className="nav-item">
            Microhard 365
          </Link>
          <Link href="/bing" className="nav-item">
            Bing
          </Link>
          <Link href="/edge" className="nav-item">
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
          <Link
            href="https://github.com/kristof1345/microhard-next"
            target="_blank"
            className="other-item"
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
