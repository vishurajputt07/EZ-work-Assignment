import React from "react";
import Home from "./components/Home.jsx";
import "./App.css";
import FilmProduction from "./components/FilmProduction.jsx";
import Branding from "./components/Branding.jsx";
import Art from "./components/Art.jsx";
import Contact from "./components/Contact.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Team from "./components/Team.jsx";
import AboutUs from "./components/AboutUs.jsx";

function App() {
  return (
    <div>
      <Home />
      <Team />
      <AboutUs />
      <Services />  
      <FilmProduction />
      <Branding />
      <Art />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;