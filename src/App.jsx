import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Certificate from "./components/Certificates";
import Contact from "./components/Contact";
import LoaderSimple from "./components/LoaderSimple";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoaderSimple onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <div className="antialiased overflow-x-hidden bg-black text-gray-200 tracking-tighter">
          <Navbar />
          <HeroSection />
          <About />
          <Skills />
          <Project />
          <Certificate />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
