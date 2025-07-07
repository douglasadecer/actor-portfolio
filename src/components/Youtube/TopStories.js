"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const TopStories = () => {
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

      <section className="top-stories-area pt-100 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>Top Stories</h2>
            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="single-top-stories-box">
                <Image
                  src="/images/youtube/top-stories/top-stories1.jpg"
                  alt="image"
                  width={706}
                  height={658}
                />

                <div onClick={() => setOpen(true)} className="link-btn"></div>

                <div className="content extra-pd">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="duration">03.05</span>
                    <span className="icon">
                      <i className="bx bx-video-recording"></i>
                    </span>
                  </div>

                  <h3
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                  >
                    Katy Perry - Unconditionally (Official)
                  </h3>

                  <ul className="meta">
                    <li>4.3M views</li>
                    <li>1 day ago</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-top-stories-box">
                    <Image
                      src="/images/youtube/top-stories/top-stories2.jpg"
                      alt="image"
                      width={495}
                      height={314}
                    />

                    <div
                      onClick={() => setOpen(true)}
                      className="link-btn"
                    ></div>

                    <div className="content">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="duration">03.05</span>
                        <span className="icon">
                          <i className="bx bx-video-recording"></i>
                        </span>
                      </div>

                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry - Part Of Me (Official)
                      </h3>

                      <ul className="meta">
                        <li>4.3M views</li>
                        <li>1 day ago</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-top-stories-box">
                    <Image
                      src="/images/youtube/top-stories/top-stories3.jpg"
                      alt="image"
                      width={495}
                      height={314}
                    />

                    <div
                      onClick={() => setOpen(true)}
                      className="link-btn"
                    ></div>

                    <div className="content">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="duration">03.05</span>
                        <span className="icon">
                          <i className="bx bx-video-recording"></i>
                        </span>
                      </div>

                      <h3
                        onClick={() => setOpen(true)}
                        style={{ cursor: "pointer" }}
                      >
                        Katy Perry Greatest Hits Best Songs Of Katy Perry Full
                        Playlist
                      </h3>

                      <ul className="meta">
                        <li>4.3M views</li>
                        <li>1 day ago</li>
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

export default TopStories;
