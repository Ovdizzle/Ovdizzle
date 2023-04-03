// import { CircleIcon } from "@radix-ui/react-icons";
import CircleIcon from "@mui/icons-material/Circle";

import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  Add,
  HdrPlusOutlined,
  PlayArrow,
  PlayArrowOutlined,
  PlayArrowSharp,
  PlayArrowTwoTone,
  PlusOne,
} from "@mui/icons-material";
import { HeartIcon } from "@radix-ui/react-icons";

export const bp = (size) => {
  return (
    <CircleIcon
      className='mr-2 animate-spin text-slate-500'
      sx={{ fontSize: size }}
    />
  );
};

const Item = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);

  return (
    <div className=''>
      <section className='flex h-[225px] mb-5 '>
        <div
          className=''
          style={{
            // background: `url(${data.url})`,
            width: "300px",
            height: "225px",
            padding: 10,
          }}
        >
          <div
            className='rounded w-full h-full object-cover'
            style={{ background: `url(${data.url})` }}
          ></div>
          {/* <img src={data.url} /> */}
        </div>
        <div className='Pack_details pl-5 pt-1 flex flex-col justify-between w-full h-[225px]'>
          <div className='Details  flex flex-col space-y-1 w-full'>
            <Typography variant='poster'>{data.artiste}</Typography>
            <Typography variant='smallHeading'>{data.title}</Typography>
            <div className='flex space-x-2 text-slate-500'>
              <Typography className=''>Genre</Typography>{" "}
              <Typography className=''>{bp(8)}245 Samples</Typography>
            </div>
          </div>
          <div className='Buttons  mb-[10px] space-x-8'>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "#AF50",
                  color: "#293d04",
                },
                color: "var(--binance_green)",
                backgroundColor: "var(--myGreen)",
                fontWeight: 400,
              }}
              variant='contained'
              color='primary'
            >
              <Add />
              {"Get Pack"}
            </Button>
            <Button variant='outlined' color='primary'>
              <PlayArrowOutlined />
              {"Preview"}
            </Button>
          </div>
        </div>
        <Typography className='flex flex-nowrap'>
          {<HeartIcon className='' />}
        </Typography>
      </section>
      <p className='flex flex-wrap border-y-[1px] border-opacity-20 p-2 border-slate-900'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illo.
        Repellat, adipisci error mollitia, voluptatibus ipsum similique tempore
        harum enim nostrum quae illum quasi facilis quod, at necessitatibus
        dolore expedita! Eligendi excepturi explicabo illum nisi ipsam, illo
        cupiditate cumque deleniti omnis ullam voluptate, quaerat dolorem amet
        nemo! Voluptatum iusto expedita totam quaerat eos fuga, at saepe magni
        iure! Accusamus, maxime.
      </p>
    </div>
  );
};

export default Item;
