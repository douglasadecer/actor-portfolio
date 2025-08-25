"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import Image from "next/image";

const videos = [
  {
    image: "/images/youtube/featured-videos/dramamonologue4.png",
    title: "Comdey/Drama Monologue",
    videoId: "0f2XiLLoOmM",
    duration: "02:23",
  },
  {
    image: "/images/youtube/featured-videos/dramamonologue3.png",
    title: "Dramatic / Dark Comedy",
    videoId: "l35rS0pjN3Y",
    duration: "03:54",
  },
  {
    image: "/images/youtube/featured-videos/dramamonologue2.png",
    title: "Drama Monologue",
    videoId: "Cp3VOyNKhFQ",
    duration: "02:12",
  },
  {
    image: "/images/youtube/featured-videos/dramamonologue.png",
    title: "Drama Monologue (Tagalog)",
    videoId: "I7k0H14fIV0",
    duration: "02:35",
  },
];

const Monologues = () => {
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

      <section id="monologues" className="featured-videos-area pt-100 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>Monologues</h2>
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

export default Monologues;
