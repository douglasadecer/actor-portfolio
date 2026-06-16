"use client";

import React from "react";

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

                <div className="about-photo-strip" aria-label="Photo highlights">
                  {[0, 1, 3, 4].map((panel) => (
                    <div
                      key={panel}
                      className="about-photo-panel"
                      style={{ backgroundPosition: `${panel * 25}% 0` }}
                    />
                  ))}
                </div>

                <p>
                 With seven years of on-set experience across television and film, I bring confidence, adaptability, and a strong 
                 collaborative spirit to every project. I’m particularly drawn to ensemble-driven, character-led comedies in the 
                 spirit of American Pie, Superbad, and Van Wilder — the kind of unapologetic, coming-of-age stories that feel 
                 increasingly rare today.
                 <br />
                 <br />
                 <strong>Hobbys</strong>
                 <br />
                 <em>Motorcycle riding, A high-intermediate tennis player, Skydiving, Paintball, CineBuff and the list goes on... </em>
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="about-info-two">
                <div className="rep-block">
                  <h6 className="rep-heading">Management</h6>
                  <ul>
                    <li>
                      <span className="rep-label">Company</span>
                      <span className="rep-value">Seven Summits</span>
                    </li>
                    <li>
                      <span className="rep-label">Email</span>
                      <span className="rep-value">
                        <a href="mailto:reception@seven-summits.org">
                          reception@seven-summits.org
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="rep-label">Address</span>
                      <span className="rep-value">
                        <a href="https://seven-summits.org//">
                        9250 Wilshire Blvd, Suite 210, Beverly Hills, 90212, CA, USA
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="rep-label">Phone</span>
                      <span className="rep-value">
                        <a href="tel:+13105506777">+1 310 550 6777</a>
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rep-block">
                  <h6 className="rep-heading">Australian Agent</h6>
                  <ul>
                    <li>
                      <span className="rep-label">Agency</span>
                      <span className="rep-value">The Agency at AIPA</span>
                    </li>
                    <li>
                      <span className="rep-label">Email</span>
                      <span className="rep-value">
                        <a href="mailto:theagency@aipa.com.au">
                          theagency@aipa.com.au
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="rep-label">Address</span>
                      <span className="rep-value">
                        <a href="https://theschoolataipa.com.au/the-agency-at-aipa/">
                        2 George Place Unit 4, Artarmon, Sydney, 2064, NSW, Australia
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="rep-label">Phone</span>
                      <span className="rep-value">
                        <a href="tel:+61299665425">+61 2 9966 5425</a>
                      </span>
                    </li>
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

export default About;
