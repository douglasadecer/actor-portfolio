"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <section id="blog" className="blog-area pt-100 pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <span className="sub-title">From The Blog</span>
            <h2>Latest insights are on top all times</h2>
          </div>

          <div className="row">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/instagram-single-blog" target="_blank">
                    <Image
                      src="/images/instagram/blog/insta-blog1.jpg"
                      alt="image"
                      width={700}
                      height={830}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Fashion</Link>
                      <Link href="#">Lifestyle</Link>
                    </li>
                    <li>4 min read</li>
                  </ul>
                  <h3>
                    <Link href="/instagram-single-blog" target="_blank">
                      How to Successfully Negotiate with Influencers
                    </Link>
                  </h3>
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
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/instagram-single-blog" target="_blank">
                    <Image
                      src="/images/instagram/blog/insta-blog2.jpg"
                      alt="image"
                      width={700}
                      height={830}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Travel</Link>
                      <Link href="#">Style</Link>
                    </li>
                    <li>3 min read</li>
                  </ul>
                  <h3>
                    <Link href="/instagram-single-blog" target="_blank">
                      How to Find the Perfect Influencers for Your Niche
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/instagram-single-blog" target="_blank">
                    <Image
                      src="/images/instagram/blog/insta-blog3.jpg"
                      alt="image"
                      width={700}
                      height={830}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Fashion</Link>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>6 min read</li>
                  </ul>
                  <h3>
                    <Link href="/instagram-single-blog" target="_blank">
                      How Micro-Influencers Can Transform Your Business
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="post-image">
                  <Link href="/instagram-single-blog" target="_blank">
                    <Image
                      src="/images/instagram/blog/insta-blog4.jpg"
                      alt="image"
                      width={700}
                      height={830}
                    />
                  </Link>
                </div>

                <div className="post-content">
                  <ul className="post-meta">
                    <li>
                      <Link href="#">Lifestyle</Link>
                      <Link href="#">Travel</Link>
                    </li>
                    <li>5 min read</li>
                  </ul>
                  <h3>
                    <Link href="/instagram-single-blog" target="_blank">
                      Influencer Marketing Trends to Expect in 2024
                    </Link>
                  </h3>
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
