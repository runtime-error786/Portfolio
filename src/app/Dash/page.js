"use client"
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { useRef } from "react";
import "../globals.css";
import "./g.css";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "./Head";
import Skill from "./Skill";
import Exp from "./Serv";
import Exp1 from "./Proj";
import MultilineTextFields from "./Cont";
import FOOT from "./Foot";

export default function Page() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const contRef = useRef(null);

  // Add refs for other sections

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
        <BootstrapClient></BootstrapClient>
      <Nav scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} expRef={expRef} projRef={projRef} contRef={contRef}/>
      <Home fw={homeRef} />
      <About fw={aboutRef} />
      <Skill fw={skillsRef}></Skill>
      <Exp fw={expRef}></Exp>
      <Exp1 fw={projRef}></Exp1>
      <MultilineTextFields fw={contRef}></MultilineTextFields>
      <FOOT></FOOT>
    </>
  );
}