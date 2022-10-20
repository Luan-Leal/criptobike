import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { Grid } from "../Grid/Grid";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

const BecomePartner = ({ title, button }) => {
  return (
    <Grid>
      <section id="becomePartnerSection">
        <div className="title">
          <h2>
            {title}
            <Row />
          </h2>
        </div>

        <div className="phrase">
          <p>
            Environmental change is an issue addressed to the whole world.{" "}
            <br /> <br /> With Cryptobike, our community is already riding for
            the planet, and we invite companies, customers, and partners to
            commit to the challenge by joining us on Tour de Terre. <br />
            <br /> Every time our community rides 1,000,000 kilometers,
            companies will engage on ESG issues and ride for the same team.{" "}
            <br /> <br /> The clock is ticking. People are riding.
          </p>
        </div>
        <div>
          <button>{button}</button>
        </div>
      </section>
    </Grid>
  );
};

export default MapTo("cryptobike/components/partner")(BecomePartner);
