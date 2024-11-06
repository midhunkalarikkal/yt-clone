import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULARVIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULARVIDEOS_API);
    const json = await data.json();
    console.log("json : ", json.items);
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 p-4">
      {videos.length > 0 ? (
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default VideoContainer;
