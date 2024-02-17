"use client"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { useRef } from "react";
import "../globals.css";
import "./g.css";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "./Head";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  // Add refs for other sections

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
        <BootstrapClient></BootstrapClient>
      <Nav scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef}/>
      <Home fw={homeRef} />
      <About fw={aboutRef} />
    </>
  );
}