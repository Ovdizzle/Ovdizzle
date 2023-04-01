import React from "react";
import Play from "@mui/icons-material/PlayCircle";
import { Audio } from "ts-audio";

const Playlist = () => {
  const audio = Audio({
    file: "http://localhost:5000/assets/uploads/packs/125_Gmaj_trap_jazz/guitar_riff.wav",
    loop: true,
    volume: 1,
  });

  const PlaySong = () => {
    audio.play();
  };
  const Pause = () => {
    audio.play();
  };

  return (
    <div>
      {/* <audio
        controls
        src='http://localhost:5000/assets/uploads/packs/125_Gmaj_trap_jazz/african_vocals.wav'
      ></audio> */}
      <div onClick={PlaySong} className='play_icon mt-2'>
        <Play />
      </div>
      <div className='nav_div'>
        <div className='seekbar'></div>
      </div>
    </div>
  );
};

export default Playlist;
