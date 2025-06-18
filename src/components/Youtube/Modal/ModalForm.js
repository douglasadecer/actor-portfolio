"use client";

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalForm = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Button className="default-btn-two" onClick={toggle}>
        Contact Me
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        centered={true}
        backdrop="static"
        className="contactModal"
      >
        <ModalHeader toggle={toggle}>Send Me A Message!</ModalHeader>

        <ModalBody>
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    className="form-control"
                    cols="30"
                    rows="5"
                    required
                    placeholder="Enter your message"
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <button type="submit" className="default-btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalForm;
