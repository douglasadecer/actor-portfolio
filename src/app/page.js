import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Banner from "../components/Instagram/Banner";
import Followers from "../components/Instagram/Followers";
import About from "../components/Instagram/About";
import SocialStatistics from "../components/Instagram/SocialStatistics";
import InstagramAudience from "../components/Instagram/InstagramAudience";
import Partners from "../components/Instagram/Partners";
import VideoArea from "../components/Instagram/VideoArea";
import Podcast from "../components/Instagram/Podcast";
import BlogPost from "../components/Instagram/BlogPost";
import ContactArea from "./../components/Common/ContactArea";
import Footer from "../components/Layouts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <Followers />

      <About />

      <SocialStatistics />

      <InstagramAudience />

      <Partners />

      <VideoArea />

      <Podcast />

      <BlogPost />

      <ContactArea />

      <Footer />
    </>
  );
}
