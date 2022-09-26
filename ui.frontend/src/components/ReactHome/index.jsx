import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import title from "../../assets/home-title.png";
import bike from "../../assets/Home_Section_bike.png";
import "./index.scss";

const Home = ({ text }) => {
  return (
    <section>
      <div className="left">
        <img src={title} alt="Home section title: Tour de Terre" />
        <p>{text}</p>
      </div>
      <div className="right">
        <img src={bike} alt="Criptobike NFT example" />
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/home")(Home);
