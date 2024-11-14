import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularVideos } from '../videoSlice';
import { YOUTUBE_POPULARVIDEOS_API } from '../constants';
import { setYoutubeLimitReached } from '../stateSlice';

const useGetPopularVideos = () => {
    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_POPULARVIDEOS_API);
        const json = await data.json();
        if (data.error && data.error.errors.some(err => err.reason === "quotaExceeded")) {
          dispatch(setYoutubeLimitReached(true));
        } else {
          dispatch(setYoutubeLimitReached(false));
          dispatch(addPopularVideos(json.items));
        }
      };

      useEffect(() => {
        getVideos();
      },[])

      return getVideos()
}

export default useGetPopularVideos;