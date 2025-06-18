"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const FeaturedVideos = () => {
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

      <section className="featured-videos-area pt-100 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>My Featured Videos</h2>
            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video1.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">03.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>
                  <div className="link-btn" onClick={() => setOpen(true)}></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry - Bon Appétit (Official) ft. Migos
                  </h3>
                  <ul className="videos-meta">
                    <li>4.3M views</li>
                    <li>May 13, 2017</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video2.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">03.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div className="link-btn" onClick={() => setOpen(true)}></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry - Roar
                  </h3>
                  <ul className="videos-meta">
                    <li>4.3M views</li>
                    <li>Sep 6, 2013</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video3.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">03.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>
                  <div className="link-btn" onClick={() => setOpen(true)}></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry - Dark Horse ft. Juicy J
                  </h3>
                  <ul className="videos-meta">
                    <li>4.3M views</li>
                    <li>Feb 21, 2014</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video4.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">03.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>
                  <div className="link-btn" onClick={() => setOpen(true)}></div>
                </div>

                <div className="videos-content">
                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry - California Gurls (Official Music Video) ft.
                    Snoop Dogg
                  </h3>
                  <ul className="videos-meta">
                    <li>4.3M views</li>
                    <li>Jun 15, 2010</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVideos;
