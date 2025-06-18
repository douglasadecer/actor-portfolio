"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Followers = () => {
  return (
    <>
      <section className="followers-area bg-f9f9f9 pt-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <span className="sub-title">What Do I Love</span>
            <h2>
              I&apos;m a Instagram influencer designer running my own design
              studio
            </h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-followers-box">
                <h3>275K</h3>
                <span className="sub-title d-block">Instagram followers</span>

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
              <div className="single-followers-box">
                <h3>125K</h3>
                <span className="sub-title d-block">Twitter followers</span>

                <Link href="#" className="link">
                  <i className="bx bxl-twitter"></i> @alikamaya
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
              <div className="single-followers-box">
                <h3>178K</h3>
                <span className="sub-title d-block">YouTube subscribers</span>

                <Link href="#" className="link">
                  <i className="bx bxl-youtube"></i> @alikamaya
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

export default Followers;
