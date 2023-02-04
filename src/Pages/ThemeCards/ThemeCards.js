import React from "react";

import { useParams } from "react-router-dom";
import { CarouselPlain } from "../../Utils/Carousels/Carousels";

function ThemeCards() {
  const data = {
    birthday: {
      name: "Birthday",
      image: "https://picsum.photos/1200/300",
    },
  };
  const { themeName } = useParams();
  console.log(themeName);
  return (
    <div className="theme_cards_container">
      <CarouselPlain
        themeImage={data[themeName]["image"]}
        themeName={data[themeName]["name"]}
      />
    </div>
  );
}

export default ThemeCards;
