"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const videos = [
  {
    image: "/images/youtube/featured-videos/featured-video1.jpg",
    title: "Katy Perry - Bon Appétit (Official) ft. Migos",
    videoId: "dPI-mRFEIH0",
    duration: "03.05",
    views: "4.3M views",
    date: "May 13, 2017",
  },
  {
    image: "/images/youtube/featured-videos/featured-video2.jpg",
    title: "Katy Perry - Roar",
    videoId: "CevxZvSJLk8",
    duration: "03.05",
    views: "4.3M views",
    date: "Sep 6, 2013",
  },
  {
    image: "/images/youtube/featured-videos/featured-video3.jpg",
    title: "Katy Perry - Dark Horse ft. Juicy J",
    videoId: "0KSOMA3QBU0",
    duration: "03.05",
    views: "4.3M views",
    date: "Feb 21, 2014",
  },
  {
    image: "/images/youtube/featured-videos/dramamonologue.png",
    title: "Drama Monologue (Tagalog)",
    videoId: "I7k0H14fIV0",
    duration: "02.35",
  },
];

const FeaturedVideos = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setOpen(true);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={selectedVideoId}
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
            {videos.map((video, idx) => (
              <div className="col-lg-3 col-sm-6 col-md-6" key={idx}>
                <div className="single-featured-videos-box">
                  <div className="videos-image">
                    <Image
                      src={video.image}
                      alt="video"
                      width={650}
                      height={433}
                    />
                    <span className="duration">{video.duration}</span>
                    <span className="icon">
                      <i className="bx bx-video-recording"></i>
                    </span>
                    <div
                      className="link-btn"
                      onClick={() => openModal(video.videoId)}
                    ></div>
                  </div>

                  <div className="videos-content">
                    <h3
                      onClick={() => openModal(video.videoId)}
                      style={{ cursor: "pointer" }}
                    >
                      {video.title}
                    </h3>
                    <ul className="videos-meta">
                      <li>{video.views}</li>
                      <li>{video.date}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedVideos;
