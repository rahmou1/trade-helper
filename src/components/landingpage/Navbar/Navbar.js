import React from "react";
import "../style.css";
import About from "../About/About";
import Overview from "../Overview/Overview";
import Features from "../Features/Features";
import AdvFeatures from "../AdvFeatures/AdvFeatures";
import Facts from "../Facts/Facts";
import ProcessStart from "../ProcessStart/ProcessStart";
import PricingTable from "../PricingTable/PricingTable";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Arrow from "../Arrow/Arrow";
import Hero from "../Hero/Hero";

function Navbar() {
  return (
    <>
      <div className="container-xxl position-relative p-0" id="home">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#contact" className="navbar-brand p-0">
            <h1 className="m-0">THelper</h1>
            {/* <img src="img/logo.png" alt="Logo"/> */}
          </a>
          <button
            className="navbar-toggler rounded-pill"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a href="#home" className="nav-item nav-link active">
                Home
              </a>
              <a href="#about" className="nav-item nav-link">
                About
              </a>
              <a href="#overview" className="nav-item nav-link">
                Overview
              </a>
              <a href="#features" className="nav-item nav-link">
                Features
              </a>
              <a href="#pricing" className="nav-item nav-link">
                Pricing
              </a>
              <a href="#testimonial" className="nav-item nav-link">
                Testimonial
              </a>
              <a href="#contact" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="btn btn-light rounded-pill py-2 px-4 ms-3 d-none d-lg-block"
            >
              Free Trail
            </a>
          </div>
        </nav>
      </div>
      <div className="container-xxl bg-white p-0">
        <Hero />
        <Features />
        <About />
        <Overview />
        <AdvFeatures />
        <Facts />
        <ProcessStart />
        <PricingTable />
        <Testimonial />
        <Contact />
        <Footer />
        <Arrow />
      </div>
    </>
  );
}
export default Navbar;
