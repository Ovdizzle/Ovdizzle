import React, { useState } from "react";
import "./login.css";
import { easeInOut, motion } from "framer-motion";
import Navbar from "../../navbar components/Navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IconBrandGoogle } from "@tabler/icons-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundColor: "rgb(153, 195, 224,.5)",
        }}
        className='flex'
      >
        <section
          style={{
            background: "url(./assets/images/favourite_bear.jfif)",
            backgroundSize: "cover",
          }}
          className='z-20 bg-opacity-70 pic_section w-[50%]'
        >
          <div className='w-full h-full pt-3 bg-gray-900 bg-opacity-50'>
            <motion.img
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{
                // x: ["1vw", "80vw", "1vw", "1vw", "1vw", "1vw"],
                // y: ["1vh", "1vh", "1vh", "1vh", "80vh", "1vh"],
                rotate: [0, 360, 0, 540, 0, 360],
              }}
              transition={{
                duration: 100,
                ease: "easeInOut",
                delay: 3,
                type: "spring",
                repeat: Infinity,
              }}
              className='ml-5 z-10'
              src='./assets/images/Egyptian_jazz.jfif'
              alt=''
            />
          </div>
        </section>
        <section className='login_section relative bg-opacity-20 flex flex-col space-y-20 justify-center items-center  w-[50%]'>
          <h1 className='text-[#adf802] px-5  w-full text-2xl absolute top-5'>
            Join the{" "}
            <span className='text-gray-950 absolute left-[130px] text-3xl'>
              {" "}
              Gang
            </span>
            <motion.div
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [0, 0, 400, 400, 0], rotate: [0, 360, 0, 540, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: 5,
                type: "spring",
                repeatDelay: 10,
                repeatType: "mirror",
              }}
              className='rounded-[50%] w-8 h-8 bg-[#adf802] '
            >
              <p className='text-gray-950 text-[5px] text-center'>Ovd</p>
            </motion.div>
          </h1>
          <div className='input_div space-y-10'>
            <div className='flex flex-col space-y-1 items-center'>
              <label htmlFor='name'>Username</label>
              <input onChange={setUsername} type='text' />
            </div>
            <div className='flex flex-col space-y-1 items-center'>
              <label htmlFor='password'>Password</label>
              <input onChange={setPassword} type='password' />
            </div>
          </div>

          <div className='relative bottom-6 flex flex-col items-center space-y-10'>
            <button>Sign Up</button>
            <button>
              Sign up with Google{" "}
              <IconBrandGoogle
                className='ml-1'
                size={15}
                stroke={2}
                color='#adf802'
              />
            </button>
          </div>
          <motion.img
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
              // x: ["1vw", "80vw", "1vw", "1vw", "1vw", "1vw"],
              // y: ["1vh", "1vh", "1vh", "1vh", "80vh", "1vh"],
              rotate: [0, 360, 0, 540, 0, 360],
            }}
            transition={{
              duration: 100,
              ease: "easeInOut",
              delay: 3,
              type: "spring",
              repeat: Infinity,
            }}
            className='absolute bottom-5 right-5 ml-5 z-10'
            src='./assets/images/colourful_bear.jfif'
            alt=''
          />
          <p>
            Already signed up?{" "}
            <span className='text-[#adf802] underline'>
              <Link to='/login'>Log in </Link>
            </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default Login;
