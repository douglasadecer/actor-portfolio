"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const headshots = [
  { image: '/images/headshot-1.jpg', name: 'Headshot 1' },
  { image: '/images/headshot-2.jpg', name: 'Headshot 2' },
  { image: '/images/headshot-3.jpg', name: 'Headshot 3' },
  { image: '/images/headshot-5.jpg', name: 'Headshot 4' },
  { image: '/images/headshot-7.jpg', name: 'Headshot 5' },
  { image: '/images/headshot-9.jpg', name: 'Headshot 6' },
  { image: '/images/headshot-10.jpg', name: 'Headshot 7' },
  { image: '/images/headshot-11.jpg', name: 'Headshot 8' },
];

const HeadShots = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalContentRef = useRef(null);
  const imageRef = useRef(null);

  const openModal = (idx) => {
    setSelectedIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? headshots.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === headshots.length - 1 ? 0 : prev + 1));
  };

  const toggleFullscreen = (e) => {
    e.stopPropagation();
    const el = imageRef.current;
    if (!el) return;
    const isFs = document.fullscreenElement || document.webkitFullscreenElement;
    if (isFs) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    } else {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      const isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      setIsFullscreen(isFs);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  return (
    <section id="headshots" className="headshots-area pt-100" style={{ direction: 'ltr' }}>
      <div className="container">
        <div className="section-title-two">
          <h2>My Headshots</h2>
        </div>
        <div className="row">
          {headshots.map((headshot, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={idx}>
              <div className="single-headshot-box" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img
                  src={headshot.image}
                  alt={headshot.name}
                  className="img-fluid"
                  style={{ width: '100%', maxWidth: '220px', borderRadius: '8px', cursor: 'pointer' }}
                  onClick={() => openModal(idx)}
                />
                <h3 style={{ marginTop: '10px', fontSize: '1.1rem' }}>{headshot.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* Modal for enlarged image with arrows */}
        {modalOpen && selectedIndex !== null && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
            onClick={closeModal}
          >
            <div
              style={{
                background: '#fff',
                padding: 20,
                borderRadius: 10,
                boxShadow: '0 2px 16px rgba(0,0,0,0.3)',
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onClick={e => e.stopPropagation()}
              ref={modalContentRef}
            >
              {/* Left Arrow */}
              <button
                onClick={showPrev}
                style={{
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  fontSize: 24,
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                aria-label="Previous"
              >
                &#8592;
              </button>
              {/* Right Arrow */}
              <button
                onClick={showNext}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: 40,
                  height: 40,
                  fontSize: 24,
                  cursor: 'pointer',
                  zIndex: 2,
                }}
                aria-label="Next"
              >
                &#8594;
              </button>
              {/* Controls: Download, Fullscreen, Close */}
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  display: 'flex',
                  gap: 8,
                  alignItems: 'center'
                }}
              >
                <a
                  href={headshots[selectedIndex].image}
                  download
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '6px 10px',
                    fontSize: 14,
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                  aria-label="Download"
                >
                  Download
                </a>
                <button
                  onClick={toggleFullscreen}
                  style={{
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '6px 10px',
                    fontSize: 14,
                    cursor: 'pointer'
                  }}
                  aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
                >
                  {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
                <button
                  onClick={closeModal}
                  style={{
                    background: '#000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: 32,
                    height: 32,
                    fontSize: 20,
                    cursor: 'pointer',
                    lineHeight: '32px',
                    textAlign: 'center',
                  }}
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
              <img
                ref={imageRef}
                src={headshots[selectedIndex].image}
                alt={headshots[selectedIndex].name}
                style={isFullscreen ? { width: '100%', height: '100%', objectFit: 'contain' } : { maxWidth: '80vw', maxHeight: '70vh', borderRadius: 8 }}
              />
              <h3 style={{ marginTop: 16 }}>{headshots[selectedIndex].name}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeadShots;
