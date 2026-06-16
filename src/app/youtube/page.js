import React from "react"; 
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Banner from "../../components/Youtube/Banner";
import Monologues from "../../components/Youtube/Monologues";
import About from "../../components/Youtube/About";
import HeadShots from "../../components/Youtube/HeadShots";
import FeaturedChannels from "../../components/Youtube/FeaturedChannels";
import Footer from "../../components/Layouts/Footer";

const Youtube = () => { 
  return (
    <>
      <NavbarTwo />

      <Banner />

      <Monologues />

      <About />

      <HeadShots />

      <Footer />
    </>
  );
};

export default Youtube;
