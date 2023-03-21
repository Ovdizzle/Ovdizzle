import { useEffect, useRef, useState } from "react";
import "./SamplePacks.css";
//  import { SamplePacksdata } from './SamplePacksdata'
import axios from "axios";
import PacksCard from "./Components/PacksCard";
import Typography from "@mui/material/Typography";
import PlayBar from "./Components/PlayBar";
import { BsSearch } from "react-icons/bs";
//  import Guit from './images/guit.jpg'

const SamplePacks = () => {
  const [packsdb, setPacksdb] = useState([]);
  const [pack, setPack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [search, setSearch] = useState("");

  // const [songs, setSongsdata] = useState(songsdata);
  const [src, setSrc] = useState("");
  const [durate, setDurate] = useState({});
  // const [imgSrc, setImgSrc] = useState("");
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const keyword = pack !== null ? pack.keywords.toString().split(",") : [];
  const audioElem = useRef();
  // console.log(pack);

  useEffect(() => {
    try {
      axios.get("/uploader").then((res) => {
        // console.log(res);
        const SamplePacksdata = res.data;
        setPacksdb(SamplePacksdata);
        // console.log(SamplePacksdata);
      });
    } catch (err) {
      if (err.response.staus === 500) {
        console.log("there was a problem with the server");
      } else {
        console.log(err.response.data.msg || "error from post");
      }
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
    // console.log(isPlaying);
    // console.log(audioElem);
    // return () => {
    //   cleanup
    // };
  }, [isPlaying, audioElem]);

  const clickRef = useRef();

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setDurate({ progress: (ct / duration) * 100, length: duration });
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;

    src === `http://localhost:5000/assets/uploads/${filename}`
      ? (audioElem.current.currentTime = (divprogress / 100) * Durate.length)
      : null;
  };

  const PlayPause = (song) => {
    setSrc(song);
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* <Typography
        variant='h4'
        display={"flex"}
        // border={"2px solid white"}
        color='var(--binance_ash)'
        marginLeft={2}
      >
        SamplePacks
      </Typography> */}
      <div
        className='space-x-1 pl-1 relative left-[550px] bg-slate-600 '
        style={{
          marginTop: 50,
          display: "inline-flex",
          alignItems: "center",
          borderRadius: 20,

          backgroundColor: "white",
        }}
      >
        <BsSearch size={12} />
        <input
          style={{ borderRadius: 20, outline: "none", paddingLeft: 2 }}
          type='text'
          placeholder='search sounds'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className='flex flex-col md:flex-row max-w-[100vw] justify-around h-[100vh]'>
        {/* <hr /> */}
        <div className='w-[25%] bg-transparent'>
          {pack !== null ? (
            <>
              <img
                src={`http://localhost:5000/assets/images/${pack.imagename}`}
                alt=''
                className='w-[300px] h-[241px] mx-auto mt-5 rounded-t-[10px]'
              />
              <div className='details mt-10 text-left p-3  space-y-2'>
                <p>Name: {pack.name}</p>
                <p>Artiste: {pack.artiste}</p>
                <p>Genre: {}</p>
                <p>Release Date:{}</p>
                <p>
                  Tags:
                  {keyword.map((keys, index) => (
                    <span
                      key={index}
                      className='inline-block  bg-amber-300 rounded-full px-[10px] text-[15px] text-primary mr-[5px]'
                    >
                      #{keys}
                    </span>
                  ))}
                </p>
                <p>Price: {}</p>
              </div>
            </>
          ) : null}
          <PlayBar
            isPlaying={isPlaying}
            filename={pack !== null ? pack.filename : null}
            Durate={durate}
            src={src}
            checkWidth={checkWidth}
            clickRef={clickRef}
            PlayPause={PlayPause}
          />
        </div>
        <div className='w-full md:w-[70%] flex justify-center md:justify-start flex-wrap content-start'>
          {packsdb.map((packs) => (
            <PacksCard
              setPack={setPack}
              PlayPause={PlayPause}
              key={packs._id}
              pack={packs}
              src={src}
              audioElem={audioElem}
              Durate={durate}
              checkWidth={checkWidth}
              clickRef={clickRef}
              isPlaying={isPlaying}

              // setImgSrc={setImgSrc}
            />
          ))}
        </div>
      </div>
      <audio
        // controls
        // src={`http://localhost:5000/assets/uploads/${filename}`}
        src={src}
        ref={audioElem}
        onTimeUpdate={onPlaying}
      ></audio>
    </>
  );
};
//  console.log(data);
export default SamplePacks;
