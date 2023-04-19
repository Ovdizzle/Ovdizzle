import React from "react";
import Cart from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { background } from "../../slider/Sliderdata";
import "./card.css";
import Playlist from "./Playlist";
import { Link, useNavigate } from "react-router-dom";
import { duration } from "@mui/material";
import { Check } from "@mui/icons-material";
import { IconCheck } from "@tabler/icons-react";
import { IconGardenCart, IconPlayerPlay } from "@tabler/icons-react";

const variants = {
  rotate: { rotate: 0, x: 0 },
  done: { rotate: 360, x: 30 },
  left: { x: -30 },
};

const Card = ({ title, clefs, artiste, url }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 188,
        height: 216,
        scale: "100%",
      }}
      className='flex flex-col mt-2 mr-4 overflow-hidden border-[1px] border-slate-900 rounded-t-md'
    >
      <motion.div
        // variants={{ rotate: { x: 100 }, done: { x: [100, 0] } }}
        initial={{ x: 100 }}
        whileHover={{ x: [100, 0] }}
        // initial='rotate'
        // whileHover='done'
        // animate='rotate'
        transition={{ type: "spring" }}
        id='Card'
        className='relative rounded-t-md'
        onClick={() => {
          navigate("/sounds/packs/item");
        }}
        style={{
          width: "100%",
          height: "60%",
          background: `url(${url})`,
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial='rotate'
          whileHover='done'
          animate='rotate'
          className='cart flex justify-around scale-0 relative left-[100%] font-semibold hover:bg-slate-700 cursor-pointer transition duration-200 hover:text-slate-300 h-5 w-full text-slate-700 bg-slate-300  translate-y-[-20px] text-center'
        >
          <motion.div>
            <IconCheck
              size={"5px"}
              stroke={5}
              className='absolute  bottom-[45%] right-[15%]'
            />
          </motion.div>
          <motion.i
            // initial={{ rotate: 0 }}
            variants={variants}
            className='relative right-5'
            // transition={{ type: "spring" }}
          >
            <IconGardenCart size={"18px"} />
          </motion.i>
          <motion.p
            variants={{ rotate: { x: 0 }, done: { x: -40 } }}
            className='text-slate-50 opacity-75 flex flex-col items-center text-[6px] absolute bottom-0 right-1'
          >
            Add to cart
          </motion.p>
        </motion.div>
      </motion.div>
      <div className='details_card px-1  flex flex-col mt-2 overflow-hidden border-opacity-20 border-x-slate-700 border-x-[1px] p-0  mx-1'>
        <div className='relative'>
          <span className='font-semibold inline-block text-primary'>
            <Link
              to={"/sounds/packs/item"}
              state={{ title, artiste, url, clefs, use: "Working" }}
            >
              {title}
            </Link>
          </span>
          <p
            // initial={{ rotateZ: 0 }}
            // whileHover={{ rotateY: 3600 - 720 * 3 }}
            className='clef absolute bottom-36  right-0 font-bold rounded-[50%]  hover:bg-slate-300 cursor-pointer transition ease-out duration-75 hover:text-slate-700 h-8 w-8 center text-myBrown '
          >
            + {clefs}
          </p>
        </div>
        <span className='text-myBrown mt-[-2px]  opacity-90'>{artiste}</span>
      </div>
      <motion.div className='playlist_div  ml-1'>
        <Playlist />
      </motion.div>
    </div>
  );
};

export default Card;
