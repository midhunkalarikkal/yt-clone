import ButtonList from './ButtonList';
import React, { useEffect } from 'react';
import VideoContainer from './VideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { openSmallSidebar } from '../utils/stateSlice';
import useGetPopularVideos from '../utils/hooks/useGetPopularVideos';

const MainContainer = () => {
  const dispatch = useDispatch()
  const sideMenuOpen = useSelector((store) => store.state.isSidebarOpen);

  // useGetPopularVideos();

  useEffect(() => {
    dispatch(openSmallSidebar());
  },[])

  return (
    <div className={`px-4 overflow-y-auto mt-14 ${sideMenuOpen ? "w-[86%] ml-[14%]" : "w-[95%] ml-[5%]"}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;