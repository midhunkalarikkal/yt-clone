import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const sideMenuOpen = useSelector((store) => store.state.sideMenuOpen);

  return (
    <div className={`px-4 ${sideMenuOpen ? 'w-[86%]' : "w-[100%]"}`}>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer