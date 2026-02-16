import React, { useState } from "react";
import './Gallery.css';

const images = [
  "/GalleryImages/image1.jpg",
  "/GalleryImages/image2.jpg",
  "/GalleryImages/image3.jpg",
  "/GalleryImages/image4.jpg",
  "/GalleryImages/image5.jpg",
  "/GalleryImages/image6.jpg",
  "/GalleryImages/image7.jpg",
  "/GalleryImages/image8.jpg",
  "/GalleryImages/image9.jpg",
  "/GalleryImages/image10.jpg",
  "/GalleryImages/image11.jpg",
  "/GalleryImages/image12.jpg",
  "/GalleryImages/image13.jpg",
  "/GalleryImages/image14.jpg",
  "/GalleryImages/image15.jpg",
  "/GalleryImages/image16.jpg",
  "/GalleryImages/image17.jpg",
  "/GalleryImages/image18.jpg",
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <h1 className="center">MY GALLERY</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            onClick={() => setSelectedIndex(index)}
            className="gallery-img"
          />
        ))}
      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content">
            <img src={images[selectedIndex]} alt="Full view" />

            {/* LEFT ARROW */}
            <button className="nav-btn left" onClick={prevImage}>❮</button>

            {/* RIGHT ARROW */}
            <button className="nav-btn right" onClick={nextImage}>❯</button>

            {/* CLOSE */}
            <button className="close-btn" onClick={() => setSelectedIndex(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
