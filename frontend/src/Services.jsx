import { useState } from "react";
import './Services.css';

function ServiceSection({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="service-section">
      <h2 onClick={() => setOpen(!open)} className="dropdown-title">
        {title} {open ? "▲" : "▼"}
      </h2>

      <div className={`dropdown-content ${open ? "open" : ""}`}>
  {children}
</div>

    </div>
  );
}
export default function Services() {
  return (
    <div className="center" id="text-color">
      <div className="center-underline">
        <h1>My Services</h1>
      </div>

      {/* COLORING */}
      <ServiceSection title="Coloring Services">
        <ul>
          <li>Color Retouch - $95+ | 75 min</li>
          <p>Single process color root retouch 4-8 weeks regrowth</p>

          <li>Color Balance - $125+ | 75 min</li>
          <p>Single process color all over or regrowth and balancing ends</p>

          <li>Bleach Out and Blowdry - $255+ | 180 min</li>
          <p>All over bleach out and blow dry</p>

          <li>Bleach Out and Haircut - $300+ | 210+ min</li>
          <p>All over bleach and haircut</p>

          <li>Bleach Retouch and Haircut - $280+ | 180 min</li>
          <p>Bleach application on the roots and a haircut</p>

          <li>Toner/Glaze - $60+ | 45 min</li>
          <p></p>

          <li>Mini Highlight - $155+ | 75 min</li>
          <p>Standard highlights front hairline and part line only 10-15 foils with single toner included</p>

          <li>Full Highlight - $205+ | 120 min</li>
          <p>Standard highlighting full head with single toner included</p>

          <li>Partial Highlight - $180+ | 120 min</li>
          <p>Partial head babylights crown forward with single toner included</p>

          <li>Full Babylights - $230+ | 135 mins</li>
          <p>Full head babylights with single toner included</p>

          <li>Balayage - $215+ | 150 min</li>
          <p>Toner included</p>
        </ul>
      </ServiceSection>

      {/* HAIRCUTS */}
      <ServiceSection title="Haircuts and Styles">
        <ul>
          <li>Hydrating Haircut - $125+ | 90 min</li>
          <p>Haircut and conditioning treatment</p>

          <li>Haircut Blowdry - $55+ | 45 min</li>
          <p><strong>PLEASE READ : </strong></p>
          <p>Haircut blow dry $100 and up (short to long lengths maintained longer then 6 weeks between services and new clients)</p>
          <p>Haircut blowdry $75 and up (short hair maintain 4-6 weeks, repeat clients only)</p>
          <p>Haircut $55 and up (very short clipper or scissor over comb or men's cut)</p>

          <li>Extension Haircut - $125 | 60 min</li>
          <p>Must sign waiver if extension application was not preformed in salon</p>

          <li>Bang Trim - $20+ | 15 min</li>
          <p></p>

          <li>Neck Trim - $10+ | 15 min</li>
          <p></p>

          <li>Blow Dry - $55+ | 45 min</li>
          <p></p>

          <li>Blow Dry and Iron Styling - $75 | 45 min</li>
          <p></p>

          <li>Extension Blow Dry - $95+ | 75 min</li>
          <p></p>

          <li>Event Styling - $100+ | 75 min</li>
          <p>Does not include wash and blowdry. Services performed on
            clean, dry hair. Please wear button down or zip down top
            to avoid disturbing style. Text message hair styling ideas 832-306-9042</p>

          <li>Event Styling w/ Extensions</li>
          <p>Does not include wash and blowdry. Services performed on
            clean, dry hair. Please wear button down or zip down top
            to avoid disturbing style. Text message hair styling ideas 832-306-9042</p>

          <li>Bridal Trial - $150+ | 120 min</li>
          <p>Pre wedding day service. Will consult about your hair, extension needs and
            try 2-3 styles to help narrow down style for day of</p>

          <li>Bridal Style - $120+ | 90 min</li>
          <p></p>

          <li>Bridal Party - $100+ | 60 min</li>
          <p></p>

          <li>Brazillian Blow Out Short Hair - $300+ | 120 min</li>
          <p></p>

          <li>Brazillian Blowout Medium Length - $325 | 150 min</li>
          <p></p>

          <li>Brazillian Blowout Long Hair - $350 | 180 min</li>
          <p></p>

          <li>Childs Haircut - $45+ | 45+ min</li>
          <p>Children of existing clients only ages 4-13</p>
        </ul>
      </ServiceSection>

      {/* EXTENSIONS */}
      <ServiceSection title="Extensions">
        <ul>
          <li>Extention Consult - $30+ | 30 min</li>
          <p>Extension Consultation</p>

          <li>Extention Installation - $300+ | 120+ min</li>
          <p>One-step weft application with extension haircut included</p>

          <li>One-Step Weft Raise Up - $150+ | 90+ min</li>
          <p>One-step weft 6-8 week maintenance service. Includes deep scalp
            cleansing and extension conditioning treatment</p>
        </ul>
      </ServiceSection>

      {/* TEXTURE */}
      <ServiceSection title="Texture Services">
        <ul>
          <li>Body Wave (Consultation Required) - $250+ | 150+ min</li>
        </ul>
      </ServiceSection>
    </div>
  );
}
