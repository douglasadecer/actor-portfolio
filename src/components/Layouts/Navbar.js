"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(".navbar-nav li a");
    const sectionIds = [
      "#home",
      "#about",
      "#socialStatistics",
      "#instagramAudience",
      "#blog",
      "#contact",
    ];
    const sections = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    function onScroll() {
      const fromTop = window.scrollY + 120; // Offset for navbar height
      let found = false;
      const contactSection = document.querySelector('#contact');
      const mainNavLinks = document.querySelectorAll('.navbar-nav li a');
      const contactNavLink = Array.from(mainNavLinks).find(link => link.getAttribute('href') === '#contact');
      // Debug logs
      // Remove these after confirming
      console.log('Scroll handler running');
      console.log('contactSection:', contactSection);
      console.log('contactNavLink:', contactNavLink);
      // 1. If user is near the bottom, always highlight Contact
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      if (docHeight - scrollBottom < 100 && contactNavLink) {
        mainNavLinks.forEach(link => link.classList.remove('active'));
        contactNavLink.classList.add('active');
        console.log('Highlighting Contact because at bottom');
        return;
      }
      // 2. If top of viewport is at or past contact section
      if (contactSection && contactNavLink) {
        const contactTop = contactSection.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + 150 >= contactTop) { // 150px offset for navbar height and margin
          mainNavLinks.forEach(link => link.classList.remove('active'));
          contactNavLink.classList.add('active');
          console.log('Highlighting Contact because at contact section');
          return;
        }
      }
      // 3. Normal scroll logic for other tabs
      sections.forEach((section, idx) => {
        const link = mainNavLinks[idx];
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('active');
          found = true;
        } else {
          link.classList.remove('active');
        }
      });
      // If no section is found (e.g., scrolled above first section), highlight Home
      if (!found && mainNavLinks[0]) {
        mainNavLinks[0].classList.add('active');
      }
    }

    window.addEventListener("scroll", onScroll);
    // Run on mount in case user loads with hash or is already scrolled
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "navbar-collapse collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="container">
          <Link href="/instagram" className="navbar-brand">
            <Image src="/images/logo.png" alt="logo" width={128} height={24} />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => 100}
                  className="nav-link"
                  href="#home"
                >
                  Home
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#about"
                >
                  About
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#socialStatistics"
                >
                  Social Statistics
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#instagramAudience"
                >
                  Instagram Audience
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#blog"
                >
                  Blog
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  onClick={toggleNavbar}
                  offset={() => -1}
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
