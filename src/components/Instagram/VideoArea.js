"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const VideoArea = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* If you want to change the video need to update below videoID */}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="bk7McNUjWgw"
        onClose={() => setOpen(false)}
      />

      <section className="video-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="video-content">
                <span className="sub-title">Showreel</span>
                <h2>Want to stick out in a saturated market?</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore dolore magna.
                </p>

                <div onClick={() => setOpen(true)} className="video-btn">
                  <i className="bx bx-play"></i> Watch Video
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="video-image">
                <Image
                  src="/images/instagram/video-img.jpg"
                  alt="image"
                  width={1050}
                  height={616}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoArea;
