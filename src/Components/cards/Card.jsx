import React from "react";
import Cart from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { background } from "../../slider/Sliderdata";
import "./card.css";
import Playlist from "./Playlist";
import { Link, useNavigate } from "react-router-dom";

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
      <div
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
        <div className='cart font-semibold hover:bg-slate-300 cursor-pointer transition duration-200 hover:text-slate-700 h-5 w-full text-slate-300 bg-slate-700  translate-y-[-20px] text-center'>
          <Cart sx={{ fontSize: "18px" }} />
        </div>
      </div>
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
          <motion.p
            // initial={{ rotateZ: 0 }}
            // whileHover={{ rotateY: 3600 - 720 * 3 }}
            className='clef absolute bottom-36  right-0 font-bold rounded-[50%]  hover:bg-slate-300 cursor-pointer transition ease-out duration-75 hover:text-slate-700 h-8 w-8 center text-myBrown '
          >
            + {clefs}
          </motion.p>
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
