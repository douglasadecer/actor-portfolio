"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Podcast = () => {
  return (
    <>
      <section className="podcast-area pt-100">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2>Build The Business Of Your Dreams With My Programs</h2>
          </div>

          <div
            className="overview-box"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/instagram/podcast-img1.jpg"
                  alt="image"
                  width={620}
                  height={460}
                />
              </div>
            </div>

            <div className="overview-content">
              <div className="content">
                <h3>Social Creator</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Qu ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan facilisis.
                </p>

                <Link href="#" className="default-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div
            className="overview-box"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="overview-content">
              <div className="content">
                <h3>The Podcast</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Qu ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan facilisis.
                </p>

                <Link href="#" className="default-btn">
                  Read More
                </Link>
              </div>
            </div>

            <div className="overview-image">
              <div className="image">
                <Image
                  src="/images/instagram/podcast-img2.jpg"
                  alt="image"
                  width={620}
                  height={460}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;
