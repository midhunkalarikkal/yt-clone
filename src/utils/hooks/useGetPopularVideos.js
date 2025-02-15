import { useEffect } from "react";
import { addPopularVideos } from "../videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { setYoutubeLimitReached } from "../stateSlice";
import { YOUTUBE_POPULARVIDEOS_API } from "../constants";

const useGetPopularVideos = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.videos?.items);

  useEffect(() => {
    if (videos && videos.length){
      return;
    } 
    const getVideos = async () => {
      try{
      const data = await fetch(YOUTUBE_POPULARVIDEOS_API);
      const json = await data.json();

        if (json.error?.errors?.some((err) => err.reason === "quotaExceeded")) {
          dispatch(setYoutubeLimitReached(true));
        } else {
          dispatch(setYoutubeLimitReached(false));
          dispatch(addPopularVideos(json.items));
        }
      } catch (error) {
        dispatch(setYoutubeLimitReached(true));
      }
    };
    getVideos();
  }, [dispatch, videos]);
};

export default useGetPopularVideos;
