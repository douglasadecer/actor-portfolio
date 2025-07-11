"use client";

import React from "react"; 

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright &copy;{currentYear} HearMe. Designed by{" "}
                <a target="_blank" href="https://envytheme.com/">
                  EnvyTheme
                </a>
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
                <li>
                  <a href="https://linkedin.com/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@dougxplicit" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/migo.adecer" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com/" target="_blank">
                    <i className="bx bxl-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
