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

    // Bulletproof Contact tab highlight logic (ONLY this logic)
    const bulletproofScroll = () => {
      const mainNavLinks = document.querySelectorAll('.navbar-nav li a');
      const contactNavLink = Array.from(mainNavLinks).find(link => link.getAttribute('href') === '#contact');
      const monologuesNavLink = Array.from(mainNavLinks).find(link => link.getAttribute('href') === '#monologues');
      const monologuesSection = document.querySelector('#monologues');
      let activeLink = null;
      // 1. If user is near the bottom, set Contact as active
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      if (docHeight - scrollBottom < 100 && contactNavLink) {
        activeLink = contactNavLink;
      }
      // 2. If top of viewport is at or past contact section
      else if (contactNavLink) {
        const contactTop = contactNavLink.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + 150 >= contactTop) {
          activeLink = contactNavLink;
        }
      }
      // 3. If monologues section is in view, highlight its tab
      else if (monologuesSection && monologuesNavLink) {
        const sectionTop = monologuesSection.offsetTop;
        const sectionHeight = monologuesSection.offsetHeight;
        const fromTop = window.scrollY + 120;
        if (sectionTop <= fromTop && sectionTop + sectionHeight > fromTop) {
          activeLink = monologuesNavLink;
        }
      }
      // 4. Normal scroll logic for other tabs
      if (!activeLink) {
        let found = false;
        mainNavLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href && href.startsWith('#') && href !== '#contact' && href !== '#monologues') {
            const section = document.querySelector(href);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const fromTop = window.scrollY + 120;
              if (sectionTop <= fromTop && sectionTop + sectionHeight > fromTop) {
                activeLink = link;
                found = true;
              }
            }
          }
        });
        // If no section is found (e.g., scrolled above first section), highlight Home
        if (!found && mainNavLinks[0]) {
          activeLink = mainNavLinks[0];
        }
      }
      // Set only the active link
      mainNavLinks.forEach(link => link.classList.remove('active'));
      if (activeLink) activeLink.classList.add('active');
    };
    window.addEventListener('scroll', bulletproofScroll);
    bulletproofScroll();

    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener('scroll', bulletproofScroll);
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
                  href="#videos"
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
