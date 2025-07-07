"use client";

import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <section className="partners-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h2>Trusted Partners</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner1.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner2.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner3.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner4.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner5.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner6.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner7.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box">
                <a href="#" target="_blank">
                  <Image
                    src="/images/instagram/partner/insta-partner8.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
