import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import Banner from "../components/Youtube/Banner";
import Monologues from "../components/Youtube/Monologues";
import About from "../components/Youtube/About";
import HeadShots from "../components/Youtube/HeadShots";
import Footer from "../components/Layouts/Footer";

export default function Home() {
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
}
