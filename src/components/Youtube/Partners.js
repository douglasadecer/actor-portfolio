"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Partners = () => {
  return (
    <>
      <section className="partners-area bg-f9f9f9 pt-100 pb-70">
        <div className="container">
          <div className="section-title-two">
            <h2>My trusted brand partners</h2>

            <Link href="#" className="link-btn">
              See All
            </Link>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner1.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner2.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner3.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner4.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner5.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner6.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner7.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-4 col-6">
              <div className="single-partners-box-two">
                <Link href="#">
                  <Image
                    src="/images/youtube/partner/yout-partner8.png"
                    alt="image"
                    width={185}
                    height={60}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
