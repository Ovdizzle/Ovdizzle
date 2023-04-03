import React from "react";
import Card from "./Card";
import { background } from "../../slider/Sliderdata";

const CardArray = () => {
  return (
    <div className='cardArray flex flex-wrap w-full bg-slate-200 md:px-8 overflow-hidden justify-center mx-auto'>
      {background.map((item, index, array) => (
        <Card
          key={index}
          title={"African Jazz Groove"}
          url={item}
          artiste={"Ovd"}
          clefs={"50"}
        />
      ))}
    </div>
  );
};

export default CardArray;
