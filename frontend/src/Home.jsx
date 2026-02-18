import { useState } from "react";
import "./Home.css";

export default function Homepage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="home" id="neon-text">
      <h1 className="title">Houston Hair Alchemy</h1>

      <img
        src="/svc.webp"
        alt="Love"
        className="hero-image"
      />

      <h2 className="title">By Sarah Victoria</h2>



      <div className="bio">
 <h2>Sarah Victoria is the kind of stylist who makes you feel comfortable the
  second you sit in her chair. She has a chill, grounded approach and a knack
  for creating hair that feels natural, intentional, and effortlessly wearable.</h2>
<p></p>
<h2>Sarah Victoria believes a salon should feel welcoming to all people, free
  of judgement, and a place to practice self-care. She takes her time with each
  guest, listens closely, and makes sure you leave feeling confident.
  Sarah Victoria is especially great at figuring out what looks work best based
  on a clients personal style. Whether you’re low-maintenance, high-impact, or
  somewhere in between, she’ll meet you where you are.</h2>
<p></p>
<h2>When she’s not doing hair, Sarah Victoria is hanging out with her puppies and fiancée,
   adding to her tattoo and piercing collection, watching horror movies, or indulging in a
    90 Day Fiancé binge.</h2>
<p></p>
<h2>Book with Sarah if you want a stylist who’s intuitive, fun and genuinely invested in
  making your hair feel like you.</h2>
</div>
      <div>
        <h2>You can find me today at {" "}
          <a href="https://www.google.com/maps/place/In+The+Loop+by+Lather/@29.7370387,-95.4243761,15z/data=!4m6!3m5!1s0x8640c0ed68ccc033:0x5e4d3837482f5af8!8m2!3d29.737036!4d-95.4164853!16s%2Fg%2F11c6_l0sgp?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D">In The Loop</a>
        </h2>
      </div>
    </div>
  );
}
