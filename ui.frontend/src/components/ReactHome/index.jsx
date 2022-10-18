import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import title from "../../assets/home-title.png";
import "./index.scss";
import { Grid } from "../Grid/Grid";

const Home = ({ text }) => {
  return (
    <Grid id="homeSection">
      <section>
        <div>
          <img src={title} alt="Home section title: Tour de Terre" />
          <p>{text}</p>
        </div>
      </section>
    </Grid>
  );
};

export default MapTo("cryptobike/components/home")(Home);
