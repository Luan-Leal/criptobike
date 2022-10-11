import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

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
          <Card text="Download on the" store={AppStore} />

          <Card text="Get it on" store={GooglePlay} />
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
};

export default MapTo("cryptobike/components/baixar2")(SecondDownload);
