import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";

import "./index.scss";
import { Grid } from "./../Grid/Grid";

function Tour({ title }) {
  return (
    <Grid id="TourSection">
      <section>
        <div className="left">
          <div>
            <h2>{title}</h2>
            <Row></Row>
          </div>
          <div>
            <p>
              The world's most famous cycling events are known as “Tours”.
              There's a famous one in France. However, like every competition,
              they only last for a short time and our goal is to go beyond that.
              <span>
                {" "}
                We want to invite the whole world to turn cycling into a habit.
              </span>{" "}
              So, we created Tour de Terre. A challenge that invites everyone to
              ride for the same team:
              <span> the Earth. </span>
              <br /> <br />
              If in the most famous tours in the world athletes ride for their
              teams, in the Tour de Terre <span>we ride together</span> for the
              planet.
            </p>
          </div>
        </div>
        <div className="right"></div>
      </section>
    </Grid>
  );
}

export default MapTo("cryptobike/components/tour")(Tour);
