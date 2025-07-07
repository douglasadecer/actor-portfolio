"use client";

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
const ModalForm = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Button className="default-btn" onClick={toggle}>
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
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
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
                    placeholder="Enter your message"
                    required
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
