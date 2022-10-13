import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";

import "./index.scss";

const Header = ({}) => {
  return (
    <header>
      <h1>teset</h1>
    </header>
  );
};

export default MapTo("cryptobike/components/header")(Header);
