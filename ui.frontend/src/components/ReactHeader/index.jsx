import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import logo from "../../assets/logo-horizontal-white.svg";
import close from "../../assets/close.svg";
import { useState } from "react";
import Modal from "../microcomponent/Modal";
import { Grid } from "../Grid/Grid.js";

import "./index.scss";

const Header = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [addStyle, setAddStyle] = useState("");

  const handleModalOpen = () => {
    setIsModalVisible(true);
    setAddStyle("hidden");
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setAddStyle("");
  };

  return (
    <>
      <Grid className="header">
        <div className="header-grid">
          <div className="headerLogo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li className={addStyle}>
                <a href="#homeSection">Home</a>
              </li>
              <li className={addStyle}>
                <a href="#aboutSection">About us</a>
              </li>
              <li className={addStyle}>
                <a href="#ridingSection">How to join</a>
              </li>
              <li className={addStyle}>
                <a href="#ridingSection">Become a partner</a>
              </li>
              <li className={addStyle}>
                <a href="#communitySection">Community</a>
              </li>
            </ul>
            {isModalVisible ? (
              <button onClick={handleModalClose}>
                <div className="close"></div>
              </button>
            ) : (
              <button onClick={handleModalOpen}>EN</button>
            )}
          </nav>
          {isModalVisible ? <Modal /> : null}
        </div>
      </Grid>
    </>
  );
};

export default MapTo("cryptobike/components/header")(Header);
