import React, { useState, useRef } from "react";

import "./video.css";
import { Poster } from "../../components/index";
import Video1 from "../../Assets/video.mp4";
import Pause from "../../Assets/pause.svg";
import Play from "../../Assets/play.svg";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setVideoLoaded] = useState(false); // State to track if video is loaded
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (!isVideoLoaded) {
      // Load video source only if it's not loaded yet
      videoRef.current.src = Video1;
      setVideoLoaded(true);
    }
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePosterPlayPause = () => {
    if (!isVideoLoaded) {
      // Load video source when poster play button is clicked
      videoRef.current.src = Video1;
      setVideoLoaded(true);
    }
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="shawp__video__container">
      <div className="shawp__video">
        {!isPlaying && <Poster onPlayPause={handlePosterPlayPause} />}

        {isPlaying ? (
          <div className="shawp__video-play Pause" onClick={handlePlayPause}>
            <img src={Pause} alt="Pause" />
          </div>
        ) : (
          <div className="shawp__video-play Play" onClick={handlePlayPause}>
            <img src={Play} alt="Play" />
          </div>
        )}

        <video
          onClick={handlePlayPause}
          // src={Video1} // Removed initial src
          ref={videoRef}
          width={1455}
          height={705}
          poster={""}
          className={isPlaying ? "video-playing" : "video-paused"}
          loop
        />
      </div>
    </div>
  );
};

export default Video;
