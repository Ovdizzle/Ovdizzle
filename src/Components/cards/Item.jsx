// import { CircleIcon } from "@radix-ui/react-icons";
import CircleIcon from "@mui/icons-material/Circle";

import React, { useEffect } from "react";
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
import FilterItem from "../filter/FilterItem";
import FilterKey from "../filter/FilterKey";
import FilterSingle from "../filter/FilterSingle";
import FilterBpm from "../filter/FilterBpm";
import { useState } from "react";
import Instrument from "../filter/Instrument";
import Samples from "../samples/Samples";
import axios from "axios";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { IconPlayerPlay } from "@tabler/icons-react";
import Pagination from "../samples/Pagination";
import Users from "../samples/Sample";
import { USERS_PER_PAGE } from "../../utils/constants";

export const bp = (size) => {
  return (
    <CircleIcon
      className='mr-2 animate-spin text-slate-500'
      sx={{ fontSize: size }}
    />
  );
};

const names = [
  "guitar",
  "keyboard",
  "drums",
  "brass & woodwind",
  "synth",
  "percussions",
  "cymbals & hats",
  "snare",
  "tom",
  "conga",
];
const Item = () => {
  const location = useLocation();
  const data = location.state;
  const [samples, setSamples] = useState([]);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("/uploader");

      // const datas = res.data;
      const datas = res.data[0].Pack;

      // setSamples(datas);
      setUsers(datas);
      setTotalPages(Math.ceil(datas.length / USERS_PER_PAGE));
      setIsLoading(false);
    } catch (error) {
      console.log("Error:" + error + "Get data unsuccessful");
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getData();
    // (async ()=>{
    //       try {
    //         const response = await axios.get("/uploader").then((res) => {
    //           // console.log(res);
    //           const SamplePacksdata = res.data[0].Pack;
    //           setSamples(SamplePacksdata);
    //         });
    //       } catch (err) {
    //         if (err.response.staus === 500) {
    //           console.log("there was a problem with the server");
    //         } else {
    //           console.log(err.response.data.msg || "error from post");
    //         }
    //       }
    // })
    // setTimeout(() => console.log(samples), 6000);
  }, []);
  const handleClick = (number) => {
    setPage(number);
  };
  return (
    <div className='h-[1500px]'>
      {/* <RemoveScrollBar /> */}
      <section className='flex h-[225px] mb-5 '>
        <div
          className='image_div'
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
              <Typography className=''>AfroJazz</Typography>
              <Typography className=''>
                {bp(8)}
                {users.length} Samples
              </Typography>
            </div>
          </div>
          <div className='Buttons  mb-[10px] space-x-8'>
            {/* <Button
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
            </Button> */}
            <Button
              size='small'
              className='text-[10px]'
              variant='outlined'
              color='primary'
            >
              <IconPlayerPlay size={15} />
              {"Preview"}
            </Button>
          </div>
        </div>
        <Typography className='flex flex-nowrap'>
          {<HeartIcon className='' />}
        </Typography>
      </section>
      <p className='flex  flex-wrap border-y-[1px] border-opacity-20 p-2 border-slate-900'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, illo.
        Repellat, adipisci error mollitia, voluptatibus ipsum similique tempore
        harum enim nostrum quae illum quasi facilis quod, at necessitatibus
        dolore expedita! Eligendi excepturi explicabo illum nisi ipsam, illo
        cupiditate cumque deleniti omnis ullam voluptate, quaerat dolorem amet
        nemo! Voluptatum iusto expedita totam quaerat eos fuga, at saepe magni
        iure! Accusamus, maxime.
      </p>
      <section>
        <Typography className='p-2'>Samples</Typography>
        <div className='flex flex-wrap'>
          <FilterItem Label={"Instruments"} names={names} />
          <FilterItem Label={"Genre"} names={["AfroJazz"]} />
          <FilterKey Label={"Key"} />
          <FilterSingle Label={"Type"} names={["Loops", "One-shots"]} />

          <FilterBpm Label={"BPM"} />
        </div>
        {/* <hr /> */}
        {/* <Samples samples={samples} /> */}
        <div>
          <h1>Pagination Demo</h1>
          {isLoading ? (
            <div className='loading'>Loading...</div>
          ) : (
            <React.Fragment>
              <Users users={users} page={page} />
              <Pagination
                totalPages={totalPages}
                handleClick={handleClick}
                page={page}
              />
            </React.Fragment>
          )}
        </div>
      </section>
    </div>
  );
};

export default Item;
