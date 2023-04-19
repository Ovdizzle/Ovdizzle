import React, { useState } from "react";
import "./samples.css";
import { useEffect } from "react";
import axios from "axios";
import { TableVirtuoso, Virtuoso } from "react-virtuoso";
import {
  RemoveScrollBar,
  noScrollbarsClassName,
} from "react-remove-scroll-bar";
import { BiHeart, BiPlus } from "react-icons/bi";
import { AiTwotoneSnippets } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import {
  IconHearts,
  IconPlus,
  IconHeartPlus,
  IconDotsVertical,
} from "@tabler/icons-react";

const Samples = ({ samples }) => {
  console.log("this is the sample", samples);

  function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const sample = [1, 2, 3, 4];
  return (
    <div>
      <div className='topHeader h-8 items-center  justify-between border-y-[1px] border-opacity-50 border-slate-900 grid grid-cols-[.5fr,.5fr,.8fr,4.5fr,3.5fr,3fr,2.5fr,.5fr]'>
        <div className=''></div>
        <div className=''>Pack</div>
        <div className=''></div>
        <div className=''>Filename</div>
        <div className=''></div>
        <div className='flex  justify-between px-2 '>
          <p>Time</p>
          <p>Key</p>
          <p>Bpm</p>
        </div>
        <div className=''></div>
        <div className=''></div>
      </div>

      <div className={"h-[500px] overflow-y-scroll tables  p-2"}>
        {samples.length > 0 &&
          samples[0].Pack.map((item, index) => (
            <div
              key={index}
              className='sampleBody hover:bg-slate-400 hover:bg-opacity-30  py-1 items-center justify-between border-b-[.5px] border-opacity-20 border-slate-900 grid grid-cols-[.5fr,.5fr,.8fr,4.5fr,3.5fr,3fr,2.5fr,.5fr]'
            >
              <div className=''>{}</div>
              <div className=''>
                <img
                  src={"http://127.0.0.1:5000/assets/images/Afrolover.jpg"}
                  alt=''
                />
              </div>
              <div className=''></div>
              <div className=''>{item.title}</div>
              <div className=''></div>
              <div className='flex  justify-between px-2 '>
                <p>{formatTime(item.time)}</p>
                <p>{item.key.split("m").join(" m")}</p>
                <p>{item.bpm}</p>
              </div>
              <div className='flex justify-around  bg-opacity-30 three_icons'>
                <IconPlus
                  size={20}
                  stroke={1.5}
                  className='three_icon translate-x-60 opacity-0'
                />
                <IconHeartPlus
                  size={20}
                  stroke={1.5}
                  className='three_icon translate-x-60 opacity-0'
                />
                <IconHearts
                  size={20}
                  stroke={1.5}
                  className='three_icon translate-x-60 opacity-0'
                />
              </div>
              <div className='flex justify-center'>
                <IconDotsVertical stroke={1.5} size={20} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Samples;
