import React from "react";

import "./index.scss";

function Card({ text, storeLogo, storeName }) {
  return (
    <div>
      <a className="cardDownload" href="">
        <img src={storeLogo} alt="" />
        <div>
          <span>{text}</span>
          <br />
          <strong>{storeName}</strong>
        </div>
      </a>
    </div>
  );
}

export default Card;
