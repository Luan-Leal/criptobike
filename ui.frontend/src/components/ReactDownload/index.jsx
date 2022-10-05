import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import smartphone from "../../assets/decoration--section--download.svg";
import decoration from "../../assets/Decoration.svg";
import Criptobike from "../../assets/cryptobike-logo.svg";
import CompassSlogan from "../../assets/slogan.svg";
import Android from "../microcomponent/AndroidDownloadButton";
import Ios from "../microcomponent/IosDownloadButton";

import "./index.scss";

const Download = ({ android }) => {
  return (
    <section className="download">
      <div className="downloadContent">
        <img src={Criptobike} alt="" />
        <img src={CompassSlogan} alt="" />
        <div className="download-buttons">
          <Ios />
          <Android />
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
