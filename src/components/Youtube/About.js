"use client";

import React from "react";
import ModalForm from "./Modal/ModalForm";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="about-area-two bg-f5eded ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="about-content-two">
                <h2>About Me</h2>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <Image
                  src="/images/youtube/yout-about1.jpg"
                  alt="image"
                  width={847}
                  height={230}
                />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="btn-box">
                  <ModalForm />
                  <span className="email">hello@allisondoe.com</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="about-info-two">
                <div className="d-table">
                  <div className="d-table-cell">
                    <ul>
                      <li>
                        Name:
                        <span>Allsion Doe</span>
                      </li>
                      <li>
                        Email:
                        <span className="email">hello@allisondoe.com</span>
                      </li>
                      <li>
                        Role:
                        <span>Youtube Influencer</span>
                      </li>
                      <li>
                        Phone:
                        <span>+22 7854 9857</span>
                      </li>
                    </ul>
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

export default About;
