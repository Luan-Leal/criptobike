import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import title from "../../assets/home-title.png";
import "./index.scss";

const Home = ({ text }) => {
  return (
    <section id="homeSection">
      <div>
        <img src={title} alt="Home section title: Tour de Terre" />
        <p>{text}</p>
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/home")(Home);
