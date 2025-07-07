"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const Playlists = () => {
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

      <section id="playlists" className="videos-playlists-area pt-70 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>My Video Playlists</h2>
            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-playlists-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video1.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">15.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div className="link-btn" onClick={() => setOpen(true)}></div>

                  <div className="playlists-icon">
                    <i className="bx bxs-playlist"></i> <span>12</span>
                  </div>
                </div>
                <div className="videos-content">
                  <h3>TikTok</h3>
                  <div className="link-btn" onClick={() => setOpen(true)}>
                    View Full Playlist
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-playlists-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video2.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">15.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div className="link-btn" onClick={() => setOpen(true)}></div>

                  <div className="playlists-icon">
                    <i className="bx bxs-playlist"></i> <span>12</span>
                  </div>
                </div>
                <div className="videos-content">
                  <h3>TikTok</h3>
                  <div className="link-btn" onClick={() => setOpen(true)}>
                    View Full Playlist
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-playlists-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video3.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">15.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div className="link-btn" onClick={() => setOpen(true)}></div>

                  <div className="playlists-icon">
                    <i className="bx bxs-playlist"></i> <span>12</span>
                  </div>
                </div>
                <div className="videos-content">
                  <h3>TikTok</h3>
                  <div className="link-btn" onClick={() => setOpen(true)}>
                    View Full Playlist
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-playlists-videos-box">
                <div className="videos-image">
                  <Image
                    src="/images/youtube/featured-videos/featured-video4.jpg"
                    alt="video"
                    width={650}
                    height={433}
                  />
                  <span className="duration">15.05</span>
                  <span className="icon">
                    <i className="bx bx-video-recording"></i>
                  </span>

                  <div className="link-btn" onClick={() => setOpen(true)}></div>

                  <div className="playlists-icon">
                    <i className="bx bxs-playlist"></i> <span>12</span>
                  </div>
                </div>
                <div className="videos-content">
                  <h3>TikTok</h3>
                  <div className="link-btn" onClick={() => setOpen(true)}>
                    View Full Playlist
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

export default Playlists;
