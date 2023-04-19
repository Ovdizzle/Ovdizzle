import React from "react";
import Card from "./Card";
import { background } from "../../slider/Sliderdata";

const CardArray = () => {
  return (
    <div className=''>
      <div className='cardArray w-[1000px] mx-auto mt-10 grid grid-cols-5 bg-slate-200'>
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
    </div>
  );
};

export default CardArray;
