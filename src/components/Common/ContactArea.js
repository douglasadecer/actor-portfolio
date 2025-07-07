"use client";

import React from "react";  
import ModalForm from '../Common/Modal/ModalForm';

const ContactArea = () => {
  return (
    <>
      <section id="contact" className="subscribe-area pt-100 jarallax">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="subscribe-content">
                <h2>Join with me</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <div className="btn-box">
                  {/* ModalForm */}
                  <ModalForm />

                  <a href="mailto:hello@alikamaya.com" className="email">
                    hello@alikamaya.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="subscribe-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>

                  <button type="submit">Join with me now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
