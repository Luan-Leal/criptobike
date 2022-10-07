import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

const Video = ({ title }) => {
  return (
    <section className="video-section">
      <div>
        <h1>{title}</h1>
        <Row></Row>
      </div>

      <div className="video">
        {/* <iframe
          src="https://www.youtube.com/embed/U5diDURyNlg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/video")(Video);
