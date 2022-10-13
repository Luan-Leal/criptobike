import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import logo from "../../assets/logo-vertical-white.svg";
import linkedin from "../../assets/linkedin.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

import "./index.scss";

const Footer = ({}) => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="social-midias">
            <a href="https://google.com">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://google.com">
              <img src={facebook} alt="" />
            </a>
            <a href="https://google.com">
              <img className="twitter" src={twitter} alt="" />
            </a>
            <a href="https://google.com">
              <img className="youtube" src={youtube} alt="" />
            </a>
            <a href="https://google.com">
              <img src={instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <a href="#homeSection">Home</a>
              </li>
              <li>
                <a href="#aboutSection">About us</a>
              </li>
              <li>
                <a href="#ridingSection">How to join</a>
              </li>
              <li>
                <a href="#becomePartnerSection">Become a partner</a>
              </li>
              <li>
                <a href="#communitySection">Community</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-info">
        <p>© Cryptobike - 2022 - All rights reserved</p>
        <p>
          {" "}
          <a href="">Mobile Apps Terms of Use</a>{" "}
        </p>
        <p>
          <a href="">Service Policy - UOL Group</a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default MapTo("cryptobike/components/footer")(Footer);
