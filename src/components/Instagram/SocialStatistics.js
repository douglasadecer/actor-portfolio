"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialStatistics = () => {
  return (
    <>
      <section id="socialStatistics" className="social-statistics-area pt-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2>Social Statistics</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-social-statistics-box">
                <h3>8M</h3>
                <span className="sub-title d-block">Facebook followers</span>

                <Link href="#" className="link">
                  <i className="bx bxl-instagram"></i> @alikamaya
                </Link>

                <div className="line"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-social-statistics-box">
                <h3>1.2M</h3>
                <span className="sub-title d-block">Pinterest followers</span>

                <Link href="#" className="link">
                  <i className="bx bxl-instagram"></i> @alikamaya
                </Link>

                <div className="line"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-social-statistics-box">
                <h3>58K</h3>
                <span className="sub-title d-block">Linkedin followers</span>

                <Link href="#" className="link">
                  <i className="bx bxl-instagram"></i> @alikamaya
                </Link>

                <div className="line"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape1">
          <Image
            src="/images/instagram/insta-shape1.png"
            alt="image"
            width={397}
            height={397}
          />
        </div>
      </section>
    </>
  );
};

export default SocialStatistics;
