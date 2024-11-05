import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import VideoStableOutlinedIcon from '@mui/icons-material/VideoStableOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeblurRoundedIcon from '@mui/icons-material/DeblurRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';

const Sidebar = () => {
  return (
    <div className='w-[14%] bg-slate-300 p-4'>
      <div className='p-4' style={{borderBottom:"1px solid #f0f0f0"}}>
        <ul className=''>
          <li><HomeIcon /> Home</li>
          <li><VideoStableOutlinedIcon /> Shorts</li>
          <li><SubscriptionsOutlinedIcon /> Subscriptions</li>
        </ul>
      </div>
      <div className='' style={{borderBottom:"1px solid #f0f0f0"}}>
        <ul>
          <li>You <KeyboardArrowRightOutlinedIcon /></li>
          <li><HistoryOutlinedIcon /> History</li>
          <li><PlaylistPlayOutlinedIcon /> Playlist</li>
          <li><SmartDisplayOutlinedIcon /> Your videos</li>
          <li><WatchLaterOutlinedIcon /> Watch Later</li>
          <li><ThumbUpOutlinedIcon /> Liked videos</li>
        </ul>
      </div>
      <div className='' style={{borderBottom:"1px solid #f0f0f0"}}>
        <h3>Subscriptions</h3>
        <ul>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
          <li><DeblurRoundedIcon /> Cahnnel Name</li>
        </ul>
      </div>
      <div className='' style={{borderBottom:"1px solid #f0f0f0"}}>
        <h3>Explore</h3>
        <ul>
          <li><WhatshotIcon /> Trending</li>
          <li><LocalMallOutlinedIcon /> Shopping</li>
          <li><MusicNoteOutlinedIcon /> Music</li>
          <li><MovieCreationOutlinedIcon />Films</li>
          <li><LiveTvOutlinedIcon /> Live</li>
          <li><SportsEsportsOutlinedIcon /> Gaming</li>
          <li><NewspaperOutlinedIcon />News</li>
          <li><EmojiEventsOutlinedIcon /> Sport</li>
          <li><LightbulbOutlinedIcon /> Courses</li>
          <li><DiamondOutlinedIcon /> Fashion & beauty</li>
          <li><PodcastsOutlinedIcon /> Podcasts</li>
        </ul>
      </div>
      <div className='' style={{borderBottom:"1px solid #f0f0f0"}}>
        <h3>More from YouTube</h3>
        <ul>
          <li className='flex'><img src='/icons/youtubeLogo.png' alt='youtubeLogo' /> YouTube Premium</li>
          <li className='flex items-center'><img className='w-9 h-9' src='/icons/youtubeStudioLogo.png' alt='youtubeLogo' />YouTube Studio</li>
          <li className='flex'><img src='/icons/youtubeMusicLogo.png' alt='youtubeLogo' />YouTube Music</li>
          <li className='flex'><img src='/icons/youtubeKidsLogo.png' alt='youtubeLogo' />YouTube Kids</li>
        </ul>
      </div>
      <div className='' style={{borderBottom:"1px solid #f0f0f0"}}>
        <ul>
          <li><SettingsOutlinedIcon /> Sttings</li>
          <li><OutlinedFlagOutlinedIcon />Report History</li>
          <li><HelpOutlineOutlinedIcon /> Help</li>
          <li><AnnouncementOutlinedIcon /> Send Feedback</li>
        </ul>
      </div>
      <div className='text-[#606060]'>
        <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
        <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p>© 2024 Google LLC</p>
      </div>
    </div>
  )
}

export default Sidebar