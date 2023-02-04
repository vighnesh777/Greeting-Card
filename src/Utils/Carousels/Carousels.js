import React from "react";
import "./Carousels.css";

function CarouselPlain({ themeImage, themeName }) {
  return (
    <div
      className="carousel_plain_container"
      style={{ backgroundImage: `url(${themeImage})` }}
    >
      <h1 className="carousel_plain_text">{themeName}</h1>
    </div>
  );
}

function Carousels() {
  return <div>Carousels</div>;
}

export { CarouselPlain };
