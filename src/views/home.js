import React from "react";
import Hero from "../components/home/Hero";
import Appabout from "../components/home/About";
import Feature from "../components/home/Feature";
import Works from "../components/home/Works";
import FAQ from "../components/home/FAQ";
import Package from "../components/home/Package";
import Contact from "../components/home/Contact";

function AppHome() {
  return (
    <div className="main">
      <Hero />
      <Appabout />
      <Feature />
      <Works />
      <FAQ />
      <Package />
      <Contact />
    </div>
  );
}

export default AppHome;
