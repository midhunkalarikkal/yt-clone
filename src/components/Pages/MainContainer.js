import React, { useEffect } from 'react';
import ButtonList from '../MainContainer/ButtonList';
import { useDispatch, useSelector } from 'react-redux';
import { openSmallSidebar } from '../../utils/stateSlice';
import VideosContainer from '../MainContainer/VideosContainer';

const MainContainer = () => {
  const dispatch = useDispatch()
  const sideMenuOpen = useSelector((store) => store.state.isSidebarOpen);

  useEffect(() => {
    dispatch(openSmallSidebar());
  },[dispatch])

  return (
    <div className={`px-4 overflow-y-auto mt-14 ${sideMenuOpen ? "md:w-[86%] md:ml-[14%]" : "md:w-[94%] md:ml-[6%]"}`}>
        <ButtonList />
        <VideosContainer />
    </div>
  )
}

export default MainContainer;