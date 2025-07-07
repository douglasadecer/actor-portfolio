"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const InstagramAudience = () => {
  return (
    <>
      <section id="instagramAudience" className="audience-area pb-100 pt-70">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="audience-image">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="image">
                      <Image
                        src="/images/instagram/audience-img1.jpg"
                        alt="image"
                        width={340}
                        height={375}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="image">
                      <Image
                        src="/images/instagram/audience-img2.jpg"
                        alt="image"
                        width={340}
                        height={375}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="image">
                      <Image
                        src="/images/instagram/audience-img3.jpg"
                        alt="image"
                        width={620}
                        height={375}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="followers-engagement-rate">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-6">
                    <h3>275K</h3>
                    <p>followers</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-6">
                    <h3>13%</h3>
                    <p>average post engagement rate</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="audience-content">
                <span className="sub-title">
                  <Link href="#">@Alikamaya</Link>
                </span>

                <h2>Instagram + Audience</h2>

                <div className="audience-content-inner instagram-audience-content">
                  <h5>Instagram Audience</h5>

                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5">
                      <div className="audience-text">
                        <h4>
                          78% <span>female</span>
                        </h4>
                        <h4>
                          25-35 <span>years old</span>
                        </h4>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-7">
                      <div className="audience-item">
                        <div className="audience-header">
                          <div className="count-box">
                            <span className="count-text">95.5</span>%
                          </div>
                          US
                        </div>

                        <div className="audience-bar">
                          <div className="bar-inner"></div>
                        </div>
                      </div>

                      <div className="audience-item">
                        <div className="audience-header">
                          <div className="count-box">
                            <span className="count-text">80.2</span>%
                          </div>
                          UK
                        </div>

                        <div className="audience-bar">
                          <div className="bar-inner"></div>
                        </div>
                      </div>

                      <div className="audience-item">
                        <div className="audience-header">
                          <div className="count-box">
                            <span className="count-text">70.6</span>%
                          </div>
                          Canada
                        </div>

                        <div className="audience-bar">
                          <div className="bar-inner"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audience-content-inner instagram-collaborations-content">
                  <h5>Instagram Collaborations</h5>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-collaborations-box">
                        <Image
                          src="/images/instagram/collaborations-img1.jpg"
                          alt="image"
                          width={286}
                          height={260}
                        />
                        <h3>Alika X Tempest</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="single-collaborations-box">
                        <Image
                          src="/images/instagram/collaborations-img2.jpg"
                          alt="image"
                          width={286}
                          height={260}
                        />
                        <h3>LUXE + COTTON</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramAudience;
