import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Card from "../microcomponent/Download2Card";
import GooglePlay from "../../assets/google-play-logo.svg";
import AppStore from "../../assets/app-store-logo.svg";

import "./index.scss";

const SecondDownload = ({}) => {
  return (
    <section id="SecondDownloadSection">
      <div className="left">
        <div>
          <h2>Ride the Tour de Terre. Win unique NFTs.</h2>
          <p>
            Earn and access your NFTs, manage your profile, and meet our
            community.
          </p>
        </div>

        <div className="downloadCards">
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
      <div className="right"></div>
    </section>
  );
};

export default MapTo("cryptobike/components/baixar2")(SecondDownload);
