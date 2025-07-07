"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <section id="blog" className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>Latest Articles</h2>
            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post-two">
                <div className="post-image">
                  <Link href="/youtube-single-blog" target="_blank">
                    <Image
                      src="/images/youtube/blog/yout-blog1.jpg"
                      alt="image"
                      width={850}
                      height={567}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="#" className="category">
                    Entertainment
                  </Link>

                  <h3>
                    <Link href="/youtube-single-blog" target="_blank">
                      How Brands Can Use Twitch to Stay Connected with Their
                      Customers
                    </Link>
                  </h3>

                  <ul className="post-meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>25 April, 2024</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post-two">
                <div className="post-image">
                  <Link href="/youtube-single-blog" target="_blank">
                    <Image
                      src="/images/youtube/blog/yout-blog2.jpg"
                      alt="image"
                      width={850}
                      height={567}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="#" className="category">
                    Travel
                  </Link>

                  <h3>
                    <Link href="/youtube-single-blog" target="_blank">
                      6 Steps to a Successful Influencer Brief + FREE Template!
                    </Link>
                  </h3>

                  <ul className="post-meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>25 April, 2024</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post-two">
                <div className="post-image">
                  <Link href="/youtube-single-blog" target="_blank">
                    <Image
                      src="/images/youtube/blog/yout-blog3.jpg"
                      alt="image"
                      width={850}
                      height={567}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <Link href="#" className="category">
                    Fashion
                  </Link>

                  <h3>
                    <Link href="/youtube-single-blog" target="_blank">
                      NEW! Upfluence’s Influencer Relationship Management tool
                    </Link>
                  </h3>

                  <ul className="post-meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>25 April, 2024</li>
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

export default BlogPost;
