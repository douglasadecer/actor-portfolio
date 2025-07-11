import React from "react"; 
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Banner from "../../components/Youtube/Banner";
import FeaturedVideos from "../../components/Youtube/FeaturedVideos";
import About from "../../components/Youtube/About";
import PopularVideos from "../../components/Youtube/PopularVideos";
import FeaturedChannels from "../../components/Youtube/FeaturedChannels";
import JoinWithMe from "../../components/Youtube/JoinWithMe";
import Footer from "../../components/Layouts/Footer";

const Youtube = () => { 
  return (
    <>
      <NavbarTwo />

      <Banner />

      <FeaturedVideos />

      <About />

      <PopularVideos />

      <JoinWithMe />

      <Footer />
    </>
  );
};

export default Youtube;
