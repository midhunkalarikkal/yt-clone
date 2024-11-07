import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularVideos } from '../videoSlice';
import { YOUTUBE_POPULARVIDEOS_API } from '../constants';

const useGetPopularVideos = () => {
    const dispatch = useDispatch()
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_POPULARVIDEOS_API);
        const json = await data.json();
        dispatch(addPopularVideos(json.items));
      };

      useEffect(() => {
        getVideos();
      },[])

      return getVideos()
}

export default useGetPopularVideos;