import { useState } from "react";
import "./Home.css";

export default function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home" id="neon-text">
      <h1 className="title">Houston Hair Alchemy</h1>

      <img
        src="/love.jpg"
        alt="Love"
        className="hero-image"
      />

      <h2 className="title">By Sarah Victoria</h2>

      {/* VIDEO THUMBNAIL */}
      <div className="video-thumbnail" onClick={() => setOpen(true)}>
        <img
          src="https://img.youtube.com/vi/YOUTUBE_VIDEO_ID/hqdefault.jpg"
          alt="Play video"
        />
        <span className="play-icon">▶</span>
      </div>

      {/* MODAL */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="bio">
        <h2>I have always believed that lifes greatest rewards come after taking
big risks. I followed my intuition to Paul Mitchell the School and never
looked back. After taking that leap of faith over 15 years ago I remain deeply passionate about the hair industry. I am a skilled stylist focused on
the client experience and looking to deliver beautiful confidence boosting
hair cuts and color service to new and returning clients.</h2>
      </div>
      <div>
        <ul>
          <h1>2005-2009</h1>
          <img src="/love.jpg" alt="Love" className="hero-image"/>
            <li>Worked as a receptionist at multiple Sport Clips and Visible Changes
            locations throughout High School and College.</li>
          <h1>2009-2014</h1>
          <img src="/love.jpg" alt="Love" className="hero-image"/>
            <li>Completed an apprenticeship under Albert Luiz at An Albert Luiz Salon
            and Spa in Sugarland. Transitioned to Stylist, fine tuning skills in color,
            cut and photo session work.</li>
          <h1>2014-2016</h1>
          <img src="/love.jpg" alt="Love" className="hero-image"/>
            <li>Managed a staff of 20 at Solution for Hair and Makeup in Montrose, while
            maintaining and growing my own business behind the chair.</li>
          <h1>2014-2019</h1>
          <img src="/love.jpg" alt="Love" className="hero-image"/>
            <li>Worked at several of the hippest salons in Montrose, serving as
            cutting educator at Roots and a color educator at Cutloose.</li>
          <h1>2020-2023</h1>
          <img src="/love.jpg" alt="Love" className="hero-image"/>
            <li>Opened my own salon, The Chariot Room, just weeks before the pandemic hit.
            Not only survived but thrived for 4 years.</li>
        </ul>
      </div>
      <div>
          <h2>
          I have worked on numerous print photo shoots, local runway shows and the Miss
          Houston, Miss Texas and Miss USE Pageants. The greatest accomplishment of my
          career has been my work being featured in{" "}
          <a href="https://www.vogue.in/weddings/gallery/inside-vanessa-delappe-and-nayan-patels-indian-latino-wedding-in-mexico" target="_blank" rel="noopener noreferrer">
          Vogue India Dec 2022
          </a>.</h2>
      </div>
      <div>
        <h2>I have traveled to Vidal Sassoon in New York City, as well as classes in San Antonio,
        Dallas and Mexico City for educational opportunities. I am also a Certified The
        Hair Shop extension specialist!</h2>
      </div>
      <div>
        <h2>I have educated young talent in 4 out of 6 salons I have worked in and have designed
        cutting and color course outlines and entire front desk manuals for training.</h2>
      </div>
      <div>
        <h1>TECHNICAL SKILLS</h1>
        <ul>
          <li>Proficient in all areas of cutting and coloring behind the chair</li>
          <li>Confident teaching technical skills to newer stylists</li>
          <li>Skilled at building long lasting relationships with clients,
          collaborators, and sales representatives</li>
          <li>thrive in environments with established procedure and policy</li>
          <li>Goal oriented with a great appreciation for growth systems and analytics</li>
        </ul>
      </div>
      <div>
        <h2>You can find me today at {" "}
          <a href="https://www.google.com/maps/place/In+The+Loop+by+Lather/@29.7370387,-95.4243761,15z/data=!4m6!3m5!1s0x8640c0ed68ccc033:0x5e4d3837482f5af8!8m2!3d29.737036!4d-95.4164853!16s%2Fg%2F11c6_l0sgp?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D">In The Loop</a>
        </h2>
      </div>
    </div>
  );
}
