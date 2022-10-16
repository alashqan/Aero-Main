import React from "react";
import "./Hero.css";
import Popup from "./Popup";
import { useState } from 'react'
import './Popup.css'
import Timer from "./Timer";

export default function Hero() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="hero">
      <div className="hero_text_container">
        <div className="hero_text">
          <h1>SAHYADRI’S <span className="techno">TECHNO-CULTURAL FEST</span> </h1>
          <img src="/images/logo/Aerophilia-logo-White.png" alt="Aerphilia" />
          <p className="slogan">Let Your Dreams Take Flight</p>
          <div className="watch_button">
            <p className="watch">Watch Aerophilia 2019 </p>
            <i className="fa-regular fa-circle-play" onClick={() => setButtonPopup(true)}></i>
          </div>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <iframe
              id="trailer-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sIzURU8AUqg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Popup>
          
          <button className="button-62 regbut">Register Now!</button>
        </div>
      </div>

      <Timer/>
    </div>
  );
}
