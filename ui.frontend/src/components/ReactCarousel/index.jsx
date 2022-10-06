import { MapTo } from "@adobe/aem-react-editable-components";
import React from "react";
import { useState, useEffect, useRef } from "react";
import arrowRight from "../../assets/arrow--right.svg";
import arrowLeft from "../../assets/arrow--left.svg";
import Row from "../microcomponent/TitleRow";

import "./index.scss";

const Carousel = ({ title, button }) => {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/slides")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    console.log(carousel.current.offsetWidth);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <section>
      <div className="header">
        <div>
          <h1>{title}</h1>
          <Row />
        </div>

        <a href="">
          {button}
          <i>
            <img src={arrowRight} alt="" />
          </i>
        </a>
      </div>
      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, title, image, link } = item;
          return (
            <div className="item" key={id}>
              <img className="img-article" src={image} alt={title} />
              <div className="title">
                <span>{title}</span>
                <button>
                  <a href={link} target="_blanck">
                    Read more
                    <i>
                      <img src={arrowRight} alt="" />
                    </i>
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        botão
        <button onClick={handleLeftClick}>
          <img src={arrowLeft} alt="" />
        </button>
        <button onClick={handleRightClick}>
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  );
};

export default MapTo("cryptobike/components/slide")(Carousel);
