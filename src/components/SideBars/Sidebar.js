import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import DeblurRoundedIcon from "@mui/icons-material/DeblurRounded";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import VideoStableOutlinedIcon from "@mui/icons-material/VideoStableOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import OutlinedFlagOutlinedIcon from "@mui/icons-material/OutlinedFlagOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { darkTheme, lightTheme } from "../../utils/theme";

const Sidebar = () => {

  const isSidebarOpen = useSelector((store) => store.state.isSidebarOpen);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  return (
    <div className={`hidden md:block py-2 px-2 h-screen overflow-y-scroll fixed top-14 ${
      isSidebarOpen ? 'w-[14%]' : 'w-0 opacity-0 no-scrollbar'
    } transition-all duration-300`} style={{ backgroundColor: theme.mainBg }}>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <Link to={"/"}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <HomeIcon fontSize="medium" />
            <span className="ml-4">Home</span>
          </li>
          </Link>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <VideoStableOutlinedIcon fontSize="medium" /> <span className="ml-4">Shorts</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <SubscriptionsOutlinedIcon fontSize="medium" />{" "}
            <span className="ml-4">Subscriptions</span>
          </li>
        </ul>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <span className="font-semibold">You</span> <KeyboardArrowRightOutlinedIcon />
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <HistoryOutlinedIcon />
            <span className="ml-4">History</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <PlaylistPlayOutlinedIcon />
            <span className="ml-4">Playlist</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <SmartDisplayOutlinedIcon />
            <span className="ml-4">Your videos</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <WatchLaterOutlinedIcon />
            <span className="ml-4">Watch Later</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <ThumbUpOutlinedIcon />
            <span className="ml-4">Liked videos</span>
          </li>
        </ul>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <h3 className="my-1 px-4 py-2 flex items-center justify-start font-semibold" style={{ color: theme.menuText }}>Subscriptions</h3>
        <ul style={{ color: theme.menuText }}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DeblurRoundedIcon />
            <span className="ml-4">Channel Name</span>
          </li>
        </ul>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <h3 className="my-1 px-4 py-2 flex items-center justify-start font-semibold" style={{ color: theme.menuText }}>Explore</h3>
        <ul style={{ color: theme.menuText }}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <WhatshotIcon />
            <span className="ml-4">Trending</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <LocalMallOutlinedIcon />
            <span className="ml-4">Shopping</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <MusicNoteOutlinedIcon />
            <span className="ml-4">Music</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <MovieCreationOutlinedIcon />
            <span className="ml-4">Films</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <LiveTvOutlinedIcon />
            <span className="ml-4">Live</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <SportsEsportsOutlinedIcon />
            <span className="ml-4">Gaming</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <NewspaperOutlinedIcon />
            <span className="ml-4">News</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <EmojiEventsOutlinedIcon />
            <span className="ml-4">Sport</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <LightbulbOutlinedIcon />
            <span className="ml-4">Courses</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <DiamondOutlinedIcon />
            <span className="ml-4">Fashion & beauty</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <PodcastsOutlinedIcon />
            <span className="ml-4">Podcasts</span>
          </li>
        </ul>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <h3 className="my-1 px-4 py-2 flex items-center justify-start font-semibold" style={{ color: theme.menuText }}>More from YouTube</h3>
        <ul style={{ color: theme.menuText }}>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <img src="/icons/youtubeLogo.png" alt="youtubeLogo" />{" "}
            <span className="ml-4">YouTube Premium</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <img
              className="w-6 h-6"
              src="/icons/youtubeStudioLogo.png"
              alt="youtubeLogo"
            />
            <span className="ml-4">YouTube Studio</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <img src="/icons/youtubeMusicLogo.png" alt="youtubeLogo" />
            <span className="ml-4">YouTube Music</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <img src="/icons/youtubeKidsLogo.png" alt="youtubeLogo" />
            <span className="ml-4">YouTube Kids</span>
          </li>
        </ul>
      </div>
      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <SettingsOutlinedIcon />
            <span className="ml-4">Settings</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <OutlinedFlagOutlinedIcon />
            <span className="ml-4">Report History</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <HelpOutlineOutlinedIcon />
            <span className="ml-4">Help</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.menuHover}}>
            <AnnouncementOutlinedIcon />
            <span className="ml-4">Send Feedback</span>
          </li>
        </ul>
      </div>
      <div className="p-4 pb-16 text-[#606060]">
        <p className="text-sm font-bold">About Press Copyright Contact us Creator Advertise Developers</p>
        <p className="text-sm font-bold py-2">Terms Privacy Policy & Safety How YouTube works Test new features</p>
        <p className="text-xs py-2">© 2024 Google LLC</p>
      </div>
    </div>
  );
};

export default Sidebar;
