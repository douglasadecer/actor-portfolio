"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const PopularVideos = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <section id="videos" className="featured-videos-area pt-100">
        <div className="container">
          <div className="section-title-two">
            <h2>My Popular Videos</h2>

            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="single-featured-videos-box">
                    <div className="videos-image">
                      <Image
                        src="/images/youtube/featured-videos/featured-video1.jpg"
                        alt="image"
                        width={650}
                        height={433}
                      />

                      <span className="duration">03.05</span>

                      <span className="icon">
                        <i className="bx bx-video-recording"></i>
                      </span>

                      <div
                        onClick={() => setOpen(true)}
                        className="link-btn"
                      ></div>
                    </div>

                    <div className="videos-content">
                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry - E.T. ft. Kanye West (Official Music Video)
                      </h3>
                      <ul className="videos-meta">
                        <li>4.3M views</li>
                        <li>Mar 31, 2011</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="single-featured-videos-box">
                    <div className="videos-image">
                      <Image
                        src="/images/youtube/featured-videos/featured-video2.jpg"
                        alt="image"
                        width={650}
                        height={433}
                      />

                      <span className="duration">04.09</span>
                      <span className="icon">
                        <i className="bx bx-video-recording"></i>
                      </span>

                      <div
                        onClick={() => setOpen(true)}
                        className="link-btn"
                      ></div>
                    </div>

                    <div className="videos-content">
                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry - Firework (Official Music Video)
                      </h3>

                      <ul className="videos-meta">
                        <li>5.0M views</li>
                        <li>Oct 29, 2010</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="single-featured-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video5.jpg"
                    alt="image"
                    width={602}
                    height={514}
                  />

                  <span className="duration">10.14</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div onClick={() => setOpen(true)} className="link-btn"></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry&lsquo;s CRAZIEST and FUNNIEST Moments on American
                    Idol!
                  </h3>

                  <ul className="videos-meta">
                    <li>1.1M views</li>
                    <li>Mar 19, 2023</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="single-featured-videos-box">
                    <div className="videos-image">
                      <Image
                        src="/images/youtube/featured-videos/featured-video3.jpg"
                        alt="image"
                        width={650}
                        height={433}
                      />

                      <span className="duration">03.00</span>
                      <span className="icon">
                        <i className="bx bx-video-recording"></i>
                      </span>

                      <div
                        onClick={() => setOpen(true)}
                        className="link-btn"
                      ></div>
                    </div>

                    <div className="videos-content">
                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry - Firework (Official Music Video)
                      </h3>

                      <ul className="videos-meta">
                        <li>4.0M views</li>
                        <li>Oct 29, 2010</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6 col-sm-6">
                  <div className="single-featured-videos-box">
                    <div className="videos-image">
                      <Image
                        src="/images/youtube/featured-videos/featured-video4.jpg"
                        alt="image"
                        width={650}
                        height={433}
                      />

                      <span className="duration">05.00</span>
                      <span className="icon">
                        <i className="bx bx-video-recording"></i>
                      </span>

                      <div
                        onClick={() => setOpen(true)}
                        className="link-btn"
                      ></div>
                    </div>

                    <div className="videos-content">
                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry - Tucked (The Smile Video Series)
                      </h3>

                      <ul className="videos-meta">
                        <li>2M views</li>
                        <li>Aug 29, 2020</li>
                      </ul>
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

export default PopularVideos;
