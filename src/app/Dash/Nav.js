import Link from "next/link";
import { useRef } from "react";

export default function Nav({ scrollToSection,homeRef,aboutRef,skillsRef,expRef,projRef,contRef }) {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark i3 fixed-top">
      <div className="container-fluid">
        <Link href="/Dash" className="navbar-brand">
            <span className="i1 i2">Dev</span>
            <span className="i1">Works</span>
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(homeRef)}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(skillsRef)}>
                Skills
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(expRef)}>
                Services
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(projRef)}>
                Projects
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection(contRef)}>
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
