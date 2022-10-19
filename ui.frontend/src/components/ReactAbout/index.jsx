import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";
import { Grid } from "../Grid/Grid";

import "./index.scss";

const About = ({ title }) => {
  return (
    <Grid>
      <section id="aboutSection">
        <div className="title">
          <h2>
            {title}
            <Row />
          </h2>
        </div>

        <div>
          <p>
            Cycling is the healthiest and most sustainable way to get around.
            And there are large bike-friendly cities across the globe. But “car
            culture” is still much bigger and stronger. So, we thought, what if
            riding a bike had an extra reward? And what if we pointed a
            direction, or showed the north, for this means of transportation to
            encourage a change in behavior?
          </p>
          <br />
          <p>
            <span>What if cycling could be even more valuable?</span>
          </p>
          <br />
          <p>
            To answer that question, we came up with the
            <span>Cryptobike by Compass</span> . A platform using blockchain
            technology to{" "}
            <span> transform your cycling data into unique NFTs.</span>
          </p>
          <br />
          <p>
            When you reach milestones,
            <span>
              you will earn exclusive NFTs with your cycling information.
            </span>
            Distance, speed, timing: all in your own digital art.
          </p>
          <br />
          <p>From now on, riding a bike has become even more valuable.</p>
        </div>
      </section>
    </Grid>
  );
};

export default MapTo("cryptobike/components/about")(About);
