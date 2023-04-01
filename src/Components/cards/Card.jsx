import React from "react";
import { background } from "../../slider/Sliderdata";
import "./card.css";
const Card = () => {
  return (
    <div
      style={{
        width: 188,
        height: 216,
      }}
      className='flex flex-col border-2 border-myGreen overflow-hidden rounded-t-md'
    >
      <div
        id='Card'
        className='rounded-t-md'
        style={{
          width: "100%",
          height: "60%",
          background: `url(${background[0]})`,
        }}
      >
        <div className='cart font-semibold hover:bg-slate-300 cursor-pointer transition duration-200 hover:text-slate-700 h-5 w-full text-slate-300 bg-slate-700  translate-y-[-20px] text-center'>
          Add to cart
        </div>
      </div>
      <div className='flex flex-col mx-1'>
        <span className='font-semibold text-primary'>Pade</span>
        <span className='text-myBrown  opacity-90'>Ovd, Jhazzy, Dee em</span>
      </div>
    </div>
  );
};

export default Card;
