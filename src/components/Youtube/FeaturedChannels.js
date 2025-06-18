"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedChannels = () => {
  return (
    <>
      <section
        id="channels"
        className="featured-channels-area bg-f9f9f9 pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title-two">
            <h2>Featured Channels</h2>
            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-channels-box">
                <Link href="#" className="image">
                  <Image
                    src="/images/youtube/channels/channel1.jpg"
                    alt="image"
                    width={190}
                    height={190}
                  />
                </Link>

                <div className="content">
                  <h3>
                    <Link href="#">MoonFairy</Link>
                  </h3>
                  <span>1.5M Subscriber</span>

                  <Link href="#" className="link-btn">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-channels-box">
                <Link href="#" className="image">
                  <Image
                    src="/images/youtube/channels/channel2.jpg"
                    alt="image"
                    width={190}
                    height={190}
                  />
                </Link>

                <div className="content">
                  <h3>
                    <Link href="#">Creative</Link>
                  </h3>
                  <span>1M Subscriber</span>

                  <Link href="#" className="link-btn">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-channels-box">
                <Link href="#" className="image">
                  <Image
                    src="/images/youtube/channels/channel3.jpg"
                    alt="image"
                    width={190}
                    height={190}
                  />
                </Link>

                <div className="content">
                  <h3>
                    <Link href="#">Spartan</Link>
                  </h3>
                  <span>500K Subscriber</span>

                  <Link href="#" className="link-btn">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-featured-channels-box">
                <Link href="#" className="image">
                  <Image
                    src="/images/youtube/channels/channel4.jpg"
                    alt="image"
                    width={190}
                    height={190}
                  />
                </Link>

                <div className="content">
                  <h3>
                    <Link href="#">Reaper</Link>
                  </h3>
                  <span>100.5K Subscriber</span>

                  <Link href="#" className="link-btn">
                    Subscribe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedChannels;
