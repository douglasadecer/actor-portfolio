"use client";

import React from "react";
import ModalForm from "./Modal/ModalForm";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section id="about" className="about-area-two bg-f5eded ptb-100">
        <div className="container">
          <div className="row about-row-flex">
            <div className="col-lg-8 col-md-12">
              <div className="about-content-two">
                <h5>
                A Little Bit About Me
                </h5>
                <p>
                 I’m the Filipino-born kid who grew up in Western Sydney sounding like I binge-watched late-night Nickelodeon—American accent included (don’t ask, it just stuck).
                 A performing-arts high school gave me my first taste of the stage and landed me a spot with Glee Club Australia. From there I detoured to Manila and spent seven whirlwind years on GMA 7, playing everything from heart-throb in a rom-com to comic relief—and yes, even headlining a feature film.
                 But comfort is a slow trap. I flew back to Australia, swapped tropical chaos for Woolloomooloo sunrise walks, and asked myself what the next decade should look like. The answer was the dream I’d shelved as a teenager: breaking into Western film and TV.
                 So here I am—bilingual, cross-cultural, equal parts drama and mischief—ready to bring that restless energy to any set that’ll have me.
                </p>

                <Image
                  src="/images/youtube/doug1.png"
                  alt="image"
                  width={847}
                  height={230}
                />

                <p>
                 With seven years of on-set experience across television and film, I bring confidence, adaptability, and a strong 
                 collaborative spirit to every project. I’m particularly drawn to ensemble-driven, character-led comedies in the 
                 spirit of American Pie, Superbad, and Van Wilder — the kind of unapologetic, coming-of-age stories that feel 
                 increasingly rare today. I’d love to be part of bringing that energy to a new generation.
                 <br />
                 <br />
                 <strong>Hobbys</strong>
                 <br />
                 <em>Motorcycle riding, A high-intermediate tennis player, Skydiving, Paintball, CineBuff and the list goes on... </em>
                </p>

                <div className="btn-box">
                  <ModalForm />
                  <span className="email">adecerdouglas@gmail.com
                  </span>
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
                        <span>Douglas Adecer</span>
                      </li>
                      <li>
                        Email:
                        <span className="email">adecerdouglas@gmail.com</span>
                      </li>
                      <li>
                        Role:
                        <span>Actor</span>
                      </li>
                      <li>
                        Phone:
                        <span> <a href="tel:0406057278" className="phone">+61 406 057 278</a></span>
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
