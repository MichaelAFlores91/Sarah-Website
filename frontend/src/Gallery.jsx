import React from "react";
import './Gallery.css';
import Nav from "./Nav";

const images = [
  "/GalleryImages/love.jpg",
  "/GalleryImages/love.jpg",
  "/GalleryImages/love.jpg",
  "/GalleryImages/love.jpg",
  "/GalleryImages/love.jpg",
  "/GalleryImages/love.jpg"];

export default function Gallery() {
  return (
    <>
    <h1 className="center">MY GALLERY</h1>
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Gallery ${index}`} />
      ))}
    </div>
    </>
  );

}
