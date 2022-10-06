import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

function Tour({ title }) {
  return (
    <section id="TourSection">
      <div className="left">
        <div>
          <h2>{title}</h2>
          <Row></Row>
        </div>
        <div>
          <p>
            The world's most famous cycling events are known as “Tours”. <br />
            There's a famous one in France. However, like every <br />
            competition, they only last for a short time and our goal is to go
            <br />
            beyond that.
            <span>
              {" "}
              We want to invite the whole world to turn <br /> cycling into a
              habit.{" "}
            </span>
            So, we created Tour de Terre. A challenge <br />
            that invites everyone to ride for the same team:
            <span> the Earth.</span> <br /> <br />
            If in the most famous tours in the world athletes ride for their
            <br />
            teams, in the Tour de Terre <span>we ride together</span> for the
            planet.
          </p>
        </div>
      </div>
      <div className="right"></div>
    </section>
  );
}

export default MapTo("cryptobike/components/tour")(Tour);
