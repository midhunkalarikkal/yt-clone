import React from 'react'
import { useDispatch } from 'react-redux';
import MicIcon from '@mui/icons-material/Mic';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { toggleSidebar } from '../utils/stateSlice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import useGetPopularVideos from '../utils/hooks/useGetPopularVideos';

const Header = () => {
  useGetPopularVideos();
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(toggleSidebar());
  }
  
  return (
    <div className='flex w-full h-14 py-4 px-4 bg-white fixed top-0'>
        <div className='flex w-3/12 items-center justify-start'>
            <MenuIcon fontSize='large'className='cursor-pointer'onClick={handleSideBar}/>
            <img className='w-8 ml-6 cursor-pointer' src='/icons/ytlogo.png' alt='ytlogo' />
            <h1 className='text-2xl font-bold cursor-pointer'>Youtube<sup className='text-xs font-normal opacity-60'>IN</sup></h1>
        </div>
        <div className='flex w-6/12 items-center justify-center'>
          <input className='w-7/12 h-10 rounded-l-full px-3' style={{border:'1px solid gray'}} type='text' placeholder='Search' />
          <button className='w-1/12 h-10 bg-[#f0f0f0] rounded-r-full' style={{borderTop:"1px solid gray", borderRight:"1px solid gray", borderBottom:"1px solid gray"}}><SearchIcon className=''/></button>
          <button className='w-[40px] ml-2 h-10 bg-[#f0f0f0] rounded-full'><MicIcon /></button>
        </div>
        <div className='flex w-3/12 items-center justify-end'>
          <VideoCallIcon fontSize='large' className='mr-6'/>
          <NotificationsNoneIcon fontSize='large' className='mr-6'/>
          <img className='w-8 h-8' src='/icons/userProfile.png' alt='userProfile' />
        </div>
    </div>
  )
}

export default Header