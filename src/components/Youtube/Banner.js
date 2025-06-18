"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div id="home" className="youtube-main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="yout-main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <span>Hi, I&apos;M</span> Allison Doe
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
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Link
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="default-btn-two"
                  >
                    Youtube Channel
                  </Link>

                  <ul>
                    <li>
                      <a
                        href="https://facebook.com/"
                        className="facebook"
                        target="_blank"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        className="twitter"
                        target="_blank"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/"
                        className="instagram"
                        target="_blank"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pinterest.com/"
                        className="pinterest"
                        target="_blank"
                      >
                        <i className="bx bxl-pinterest-alt"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="yout-shape1">
          <Image
            src="/images/youtube/yout-shape1.png"
            alt="image"
            width={350}
            height={240}
          />
        </div>
        <div className="yout-shape2">
          <Image
            src="/images/youtube/yout-shape2.png"
            alt="image"
            width={400}
            height={260}
          />
        </div>
        <div className="yout-shape3">
          <Image
            src="/images/youtube/yout-shape3.png"
            alt="image"
            width={87}
            height={78}
          />
        </div>
        <div className="yout-shape4">
          <Image
            src="/images/youtube/yout-shape4.png"
            alt="image"
            width={117}
            height={102}
          />
        </div>
        <div className="yout-shape5">
          <Image
            src="/images/youtube/yout-shape5.png"
            alt="image"
            width={109}
            height={96}
          />
        </div>
        <div className="yout-shape6">
          <Image
            src="/images/youtube/yout-shape6.png"
            alt="image"
            width={136}
            height={120}
          />
        </div>
        <div className="yout-shape7">
          <Image
            src="/images/youtube/yout-shape7.png"
            alt="image"
            width={186}
            height={164}
          />
        </div>
        <div className="yout-shape8">
          <Image
            src="/images/youtube/yout-shape8.png"
            alt="image"
            width={69}
            height={148}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
