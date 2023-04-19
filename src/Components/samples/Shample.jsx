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
import { CheckBox } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
// import { makeStyles } from "@mui/styles";

const Samples = ({ title, time, key, bpm }) => {
  function formatTime(timeInSeconds) {
    let minutes = Math.floor(timeInSeconds / 60);
    let seconds = Math.floor(timeInSeconds % 60);
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  //   const useStyles = makeStyles({
  //     root: {
  //       "& .MuiCheckbox-root": {
  //         width: "24px",
  //         height: "24px",
  //         padding: "0",
  //       },
  //       "& .MuiCheckbox-colorPrimary.Mui-checked": {
  //         color: "green",
  //       },
  //     },
  //   });

  return (
    <div className={"overflow-y-scroll tables"}>
      <div className='sampleBody gap-1 hover:bg-slate-400 hover:bg-opacity-30  py-1 items-center justify-between border-b-[.5px] border-opacity-20 border-slate-900 grid grid-cols-[.5fr,.5fr,.8fr,4.5fr,3.5fr,3fr,2.5fr,.5fr]'>
        <div className='flex justify-center items-center'>
          <input width={"20px"} height={"20px"} type='checkbox' />
        </div>
        <div className='border-2 border-myYellow'>
          <img
            src={"http://127.0.0.1:5000/assets/images/Afrolover.jpg"}
            alt=''
            width={"30px"}
            height={"30px"}
            className='objecr-cover'
          />
        </div>
        <div className=''></div>
        <div className=''>{title}</div>
        <div className=''></div>
        <div className='flex  justify-between px-2 '>
          <p>{formatTime(time)}</p>
          <p>{key}</p>
          <p>{bpm}</p>
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
    </div>
  );
};

export default Samples;
