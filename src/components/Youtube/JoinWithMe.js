"use client";

import React from "react";
import ModalForm from "./Modal/ModalForm";

const JoinWithMe = () => {
  return (
    <>
      <section id="contact" className="join-area">
        <div className="container">
          <div className="join-content">
            <h2>Join With Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="btn-box">
              {/* ModalForm */}
              <ModalForm />

              <a href="mailto:hello@allisondoe.com" className="email">
                hello@allisondoe.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinWithMe;
