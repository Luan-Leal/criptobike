import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import Card from "../microcomponent/RidingSectionCard";
import arrow from "../../assets/icon-card-arrow.svg";
import ciclist from "../../assets/icon-card-ciclist.svg";
import star from "../../assets/icon-card-shoting-star.svg";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

const Riding = ({ title }) => {
  return (
    <section id="RidingSection">
      <div>
        <h2>
          {title}
          <Row></Row>
        </h2>
      </div>

      <div className="cards">
        <Card
          image={arrow}
          title="Connect your account to Strava"
          text="Download the Strava app and enter your username and password to log in."
        />
        <Card
          image={ciclist}
          title="Ride and achieve goals"
          text="Move with Cryptobike and reach the Tour de Terre milestones."
        />
        <Card
          image={star}
          title="Earn unique NFTs"
          text="You ride, you earn: achieve goals and earn NFTs of our Cryptobike collection."
        />
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/riding")(Riding);
