import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Recommend from "./Components/Recommend";
import Scroll from './Components/Scroll'
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import scrollreveal from "scrollreveal";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #home
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <Scroll />
      <Navbar />
      <Home />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}
