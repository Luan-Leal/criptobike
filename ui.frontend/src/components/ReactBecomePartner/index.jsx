import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

const BecomePartner = ({ title }) => {
  return (
    <section id="BecomePartnerSection">
      <div className="title">
        <h2>
          Become a Tour de Terre partner
          <Row />
        </h2>
      </div>

      <div className="phrase">
        <p>
          Environmental change is an issue addressed to the whole world. <br />{" "}
          <br /> With Cryptobike, our community is already riding for the
          planet, and we invite companies, customers, and partners to commit to
          the challenge by joining us on Tour de Terre. <br />
          <br /> Every time our community rides 1,000,000 kilometers, companies
          will engage on ESG issues and ride for the same team. <br /> <br />{" "}
          The clock is ticking. People are riding.
        </p>
      </div>
      <div>
        <button>Become a partner</button>
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/partner")(BecomePartner);
