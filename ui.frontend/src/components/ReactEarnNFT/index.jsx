import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Row from "../microcomponent/TitleRow";
import Card from "../microcomponent/NFTCard";

import planta from "../../assets/planta.png";
import rocha from "../../assets/rocha.png";
import gelo from "../../assets/gelo.png";
import coral from "../../assets/coral.png";

import "./index.scss";

const EarnNFT = ({ title }) => {
  return (
    <section id="EarnSection">
      <div className="title">
        <h2>
          {title} <Row></Row>
        </h2>
      </div>
      <div className="cards">
        <Card image={planta} distance="166" />
        <Card image={rocha} distance="333" />
        <Card image={gelo} distance="998" />
        <Card image={coral} distance="3,328" />
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/earn")(EarnNFT);
