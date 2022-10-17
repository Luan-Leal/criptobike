import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

import smartphone from "../../assets/decoration--section--download.svg";
import decoration from "../../assets/Decoration.svg";
import Criptobike from "../../assets/cryptobike-logo.svg";
import CompassSlogan from "../../assets/slogan.svg";

import Card from "../microcomponent/DownloadSectionCard";
import GooglePlay from "../../assets/google-play-logo.svg";
import AppStore from "../../assets/app-store-logo.svg";

import "./index.scss";

const Download = ({}) => {
  return (
    <section className="download">
      <div className="downloadContent">
        <img src={Criptobike} alt="" />
        <img src={CompassSlogan} alt="" />
        <div className="download-buttons">
          <Card
            text="Download on the"
            storeLogo={AppStore}
            storeName="AppStore"
          />
          <Card
            text="Get it on"
            storeLogo={GooglePlay}
            storeName="GooglePlay"
          />
        </div>
      </div>
      {/* <figure>
        <img className="waves" src={decoration} alt="" />
        <img className="smartphone" src={smartphone} alt="" />
      </figure> */}
    </section>
  );
};

export default MapTo("cryptobike/components/baixar")(Download);
