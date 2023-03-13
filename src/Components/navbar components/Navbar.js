import React from "react";
import { GiWallet } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateAddress } from "../../store/slice-reducers/Web3slice";
import { useDispatch } from "react-redux";
import { easeIn, motion, useAnimation } from "framer-motion";
import Select from "react-select";

// import { ethers } from 'ethers';
import Logo from "./Logo";
import "./Navbar.css";
import MusicPlayer from "../MusicPlayer";
import { Typography } from "@mui/material";

// const provider = new ethers.providers.Web3Provider(window.Ethereum)

const Navbar = () => {
  const options = [
    { value: "SamplePacks", label: "SamplePacks" },
    { value: "Songs", label: "Songs" },
    { value: "Beats", label: "Beats" },
  ];
  let sm = window.innerWidth < 789;
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [showmenu, setShowmenu] = useState(false);
  const dispatch = useDispatch();
  const controls = useAnimation();

  const connectWallet = async () => {
    // console.log('requesting accounts');
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setDefaultAccount(accounts[0]);
        dispatch(updateAddress(accounts[0]));
      } catch (error) {
        console.log("err:" + error);
      }
    } else {
      console.log("metamask not detected");
    }
  };

  let primary = "#25092c";
  // let secondary="#9be8a1"

  const toggleMenu = () => {
    setShowmenu(!showmenu);
  };
  const hideMenu = () => {
    setShowmenu(false);
  };

  const menuItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "$ounds",
      url: "/services",
    },
    {
      title: "NFTs",
      url: "/about",
    },
    {
      title: "Merch",
      url: "/about",
    },
    {
      title: "$ales",
      url: "/about",
    },
  ];

  return (
    <motion.nav
      initial={{ x: 0 }}
      animate={{ x: [200, 0] }}
      className='navbar fixed top-0'
    >
      <div className='logo-menu'>
        <motion.div
          initial={{}}
          animate={{ y: [null, -15, 0] }}
          transition={{ delay: 1, repeat: 15 }}
          className='logos'
        >
          <Link to='/'>
            <Logo />
          </Link>
        </motion.div>
        <div className='menu-icons' onClick={toggleMenu}>
          {showmenu ? (
            <RiCloseLine color={primary} size={35} />
          ) : (
            <AiOutlineBars color={primary} size={35} />
          )}
        </div>
      </div>

      <menu>
        <motion.ul
          // initial={{ opacity: !sm && 0.7 }}
          // animate={!sm && { x: [null, 10, 0], opacity: 1 }}
          // transition={{
          //   delay: 1,
          //   duration: 1.2,
          //   times: [0, 0.5, 1],
          //   repeatType: "reverse",
          //   repeat: sm ? 1 : Infinity,
          // }}
          className='nav-menu'
          id={showmenu ? "mobile" : "hide"}
          whileHover={controls.stop}
        >
          <motion.li
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.8 }}
            drag
            dragSnapToOrigin
            onHoverStart={(e, i) => {
              console.log(e, i);
            }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={hideMenu}
          >
            <Link to='/'>Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={hideMenu}
            className='flex'
          >
            <Link to='/SamplePacks'>$ounds</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={hideMenu}
          >
            <Link to='./nfts'>NFTs</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={hideMenu}
          >
            <Link to='./songs'>Merch</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "tween", duration: 0.2 }}
            onClick={hideMenu}
          >
            <Link className='opacity-50' to=''>
              $ales
            </Link>
          </motion.li>
        </motion.ul>
      </menu>
      <div>{/* <MusicPlayer /> */}</div>

      <div className='icon flex items-center'>
        {/* <button onClick={connectWallet}>{defaultAccount?`${defaultAccount}`:'Connect'}</button> */}
        <li>
          <Link onClick={connectWallet} to=''>
            {defaultAccount ? (
              <div className='flex flex-col items-center'>
                <TiTick color='var(--primary)' />
                <p className='text-[10px]'>Connected!!</p>
              </div>
            ) : (
              <GiWallet />
            )}
          </Link>
        </li>
        <li>
          <Link to='./songs'>
            <IoMdCart />
          </Link>
        </li>
        <li>
          <Link to='/Join'>
            <FaUserAlt />
          </Link>
        </li>
      </div>
    </motion.nav>
  );
};

export default Navbar;
