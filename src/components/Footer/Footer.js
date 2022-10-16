import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <footer className="container-fluid footer">
      <div className="footer_div">
        <div className="navigate">
          <h5>&nbsp;&nbsp;NAVIGATE</h5>
          <ul>
            <li>
              <i className="fa-solid fa-angle-right" />
              <Link to="./" href="#about">&nbsp;&nbsp;Home</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <Link to="./events">&nbsp;&nbsp;Events</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <Link to="./gallery">&nbsp;&nbsp;Gallery</Link>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="https://challengers.org.in/about.html" target='_blank'>&nbsp;&nbsp;About us</a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h5>&nbsp;&nbsp;LINKS</h5>
          <ul>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/privacy policy.txt">&nbsp;&nbsp;Privacy Policy</a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/refund policy.txt">
                &nbsp;&nbsp;Refund &amp; Cancellation Policy
              </a>
            </li>
            <li>
              <i className="fa-solid fa-angle-right" />
              <a href="/pages/t&c.txt">&nbsp;&nbsp;Terms &amp; Conditions</a>
            </li>
          </ul>
        </div>
        <div className="reach_us" id="footer">
          <h5>&nbsp;&nbsp;REACH US</h5>
          <a href="https://aerophilia.in/"><img src="./images/logo/Aerophilia-logo-Color.png" alt="" width="60%" /></a>
          <p>
            Sahyadri College of Engineering and Management Mangaluru,{" "}
            <span> Dakshina Kannada District, Karnataka, India - 575007</span>
          </p>
          <p>
            <a href="mailto:info@aerophilia.in">
            <i className="fa-solid fa-at" />
            &nbsp;&nbsp;info@aerophilia.in</a>
          </p>
          <p><a href="tel:+919480382738">
            <i className="fa-solid fa-phone" />
            &nbsp;&nbsp;+919480382738</a>
          </p>
          <div className="socials">
            <h6>
              <a href="https://instagram.com/aerophilia_2022?igshid=YmMyMTA2M2Y=">
                <i className="fa-brands fa-instagram" />
              </a>
            </h6>
            <h6>
              <a href="https://youtu.be/sIzURU8AUqg">
                <i className="fa-brands fa-youtube" />
              </a>
            </h6>
            <h6>
              <a href="https://bit.ly/3BBVjnU">
                <i className="fa-solid fa-location-dot" />
              </a>
            </h6>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright">
        <p>Copyright © 2022 <strong>Aerophilia</strong>. All Rights Reserved. </p>
        <p>Developed by <strong><a href="https://challengers.org.in/">TEAM CHALLENGERS</a></strong></p>
    </div>
    </>
  );
}
