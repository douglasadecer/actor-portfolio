"use client";

import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div id="home" className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Hi, I&apos;M <br /> Alika Maya
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  A Photographer & Business Strategist who empowers
                  entrepreneurs to build a brand, market it on social media, and
                  create a life they love.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="input-newsletter"
                      placeholder="Enter your email address"
                    />
                    <button type="submit">Join with me now</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-image">
                <Image
                  src="/images/instagram/banner-img1.png"
                  className="main-image"
                  alt="image"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                  width={495}
                  height={585}
                />

                <div className="banner-shape">
                  <Image
                    src="/images/instagram/line-bg1.png"
                    alt="image"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="800"
                    data-aos-once="true"
                    width={131}
                    height={282}
                  />

                  <Image
                    src="/images/instagram/line-bg2.png"
                    alt="image"
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-duration="800"
                    data-aos-once="true"
                    width={153}
                    height={424}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
