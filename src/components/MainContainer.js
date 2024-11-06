import React from 'react';
import ButtonList from './ButtonList';
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  const sideMenuOpen = useSelector((store) => store.state.isMenuOpen);

  return (
    <div className={`px-4 overflow-y-auto h-screen ${sideMenuOpen ? "w-[86%] ml-[14%]" : "w-[95%] ml-[5%]"}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;