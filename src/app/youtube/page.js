import React from "react"; 
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Banner from "../../components/Youtube/Banner";
import FeaturedVideos from "../../components/Youtube/FeaturedVideos";
import About from "../../components/Youtube/About";
import PopularVideos from "../../components/Youtube/PopularVideos";
import Playlists from "../../components/Youtube/Playlists";
import Partners from "../../components/Youtube/Partners";
import TopStories from "../../components/Youtube/TopStories";
import FeaturedChannels from "../../components/Youtube/FeaturedChannels";
import BlogPost from "../../components/Youtube/BlogPost";
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

      <Playlists />

      <Partners />

      <TopStories />

      <FeaturedChannels />

      <BlogPost />

      <JoinWithMe />

      <Footer />
    </>
  );
};

export default Youtube;
