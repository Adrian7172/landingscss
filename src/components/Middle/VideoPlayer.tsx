import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

const VideoPlayer = () => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };
  const opts = {
    height: "500",
    width: "740",
    playerVars: {
      autoplay: 1,
      mute: 1,
    },
  };

  return (
    <YouTube
      videoId="KI2lsdXJQ40"
      opts={opts}
      onReady={onPlayerReady}
      className="realVideo"
    />
  );
};

export default VideoPlayer;
