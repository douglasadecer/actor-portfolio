"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";

const NavbarTwo = () => {
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

    // Improved scrollspy logic for nav tab highlighting
    const scrollSpy = () => {
      const mainNavLinks = document.querySelectorAll('.navbar-nav li a');
      const sectionIds = ['#home', '#monologues', '#about', '#headshots', '#contact'];
      const sections = sectionIds.map(id => document.querySelector(id)).filter(Boolean);
      let found = false;
      const fromTop = window.scrollY + 120;
      // Special case: highlight Contact if near bottom
      const contactNavLink = Array.from(mainNavLinks).find(link => link.getAttribute('href') === '#contact');
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      if (docHeight - scrollBottom < 100 && contactNavLink) {
        mainNavLinks.forEach(link => link.classList.remove('active'));
        contactNavLink.classList.add('active');
        return;
      }
      // Normal scroll logic
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
    };
    window.addEventListener('scroll', scrollSpy);
    scrollSpy();

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener('scroll', scrollSpy);
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
        className="navbar navbar-expand-lg navbar-light navbar-two"
      >
        <div className="container-fluid">
          <Link href="/youtube" className="navbar-brand">
            <Image src="/images/logo2.png" alt="logo" width={128} height={24} />
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
                  href="#monologues"
                >
                  Monologues
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
                  href="#headshots"
                >
                  HeadShots
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

export default NavbarTwo;
