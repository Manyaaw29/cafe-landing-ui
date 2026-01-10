import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Items from "./components/Items";
import About from "./components/About";
import Vision from "./components/Vision";
import OurCraft from "./components/OurCraft";
import Review from "./components/Review";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <Navbar />
      <HeroSection />
      <Items />
      <About/>
      <Vision />
      <OurCraft/>
      <Review/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default App;
