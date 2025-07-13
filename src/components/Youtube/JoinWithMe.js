"use client";

import React from "react";
import ModalForm from "./Modal/ModalForm";

const JoinWithMe = () => {
  return (
    <>
      <section id="contact" className="join-area">
        <div className="container">
          <div className="join-content">
            <h2>Work With Me</h2>
            <p>
              This is what I truly care about. I've come to understand that being a creative is my passion.
              Something I'm willing to work tears, sweat, and blood for. 
            </p>

            <div className="btn-box">
              {/* ModalForm */}
              <ModalForm />

              <a href="mailto:adecerdouglas@gmail.com" className="email">
                adecerdouglas@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinWithMe;
