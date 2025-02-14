import React from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import GoogleIcon from "@mui/icons-material/Google";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";
import { DEFAULT_PROFILE_IMG } from "../../utils/constants";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { appearanceMenuOpen, setUser, toggleUserSideMenu, updateUserLoggedIn } from "../../utils/stateSlice";


const UserSideMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.state.user);
  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;

  const handleSignOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      dispatch(updateUserLoggedIn(false));
      dispatch(toggleUserSideMenu())
      dispatch(setUser(null));
      toast.success("Logged out successfully.")
    }).catch((error) => {
      toast.error("Logout failed, please try again.")
    })
  }

  const handleAppearanceMenu = () => {
    dispatch(appearanceMenuOpen());
    dispatch(toggleUserSideMenu());
  }

  return (
    <div className="absolute top-12 right-8 py-4 px-6 rounded-lg shadow-xl" style={{ background: theme.sideMenuBg }}>
      <div className="flex py-2" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="w-3/12">
          <img className="w-10 h-10 rounded-full" src={user?.photoURL || DEFAULT_PROFILE_IMG} alt="Profile" />
        </div>
        <div className="9/12">
          <h1 className="text-lg" style={{ color: theme.menuText }}>{user?.displayName || "UserName"}</h1>
          <p className="text-sm" style={{ color: theme.textThree }}>View your channel</p>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <GoogleIcon fontSize="medium" />
            <span className="ml-4 text-sm">Google Account</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <SwitchAccountIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Switch account</span>
            <KeyboardArrowRightOutlinedIcon className="ml-auto"/>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}} onClick={handleSignOut}>
            <LogoutIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Sign out</span>
          </li>
        </ul>
      </div>

      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <img
              className="w-6 h-6"
              src={themeMode ?'/icons/yt-studio-white.png' : '/icons/ytStudio-black.png'}
              alt="yt_studio"
            />
            <span className="ml-4 text-sm">YouTube Studio</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <PaidOutlinedIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Purchase and membership</span>
          </li>
        </ul>
      </div>

      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <AdminPanelSettingsOutlinedIcon fontSize="medium" />
            <span className="ml-4 text-sm">Your data in YouTube</span>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}} onClick={handleAppearanceMenu}>
            <ModeNightOutlinedIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Appearance Light</span>
            <KeyboardArrowRightOutlinedIcon className="ml-auto"/>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <TranslateOutlinedIcon fontSize="medium" />
            <span className="ml-4 text-sm">Language British English</span>
            <KeyboardArrowRightOutlinedIcon className="ml-auto"/>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <AddModeratorOutlinedIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Restricted Mode off</span>
            <KeyboardArrowRightOutlinedIcon className="ml-auto"/>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <LanguageOutlinedIcon fontSize="medium" />
            <span className="ml-4 text-sm">Location India</span>
            <KeyboardArrowRightOutlinedIcon className="ml-auto"/>
          </li>
          <li className="custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <KeyboardAltOutlinedIcon fontSize="medium" />{" "}
            <span className="ml-4 text-sm">Keyboard shortcuts</span>
          </li>
        </ul>
      </div>

      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <SettingsOutlinedIcon />
            <span className="ml-4 text-sm">Settings</span>
          </li>
        </ul>
      </div>

      <div style={{ borderBottom: `1px solid ${theme.border}` }}>
        <ul style={{ color: theme.menuText }}>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <HelpOutlineOutlinedIcon />
            <span className="ml-4 text-sm">Help</span>
          </li>
          <li className="flex custom-list-item" style={{ "--hover-bg": theme.sideMenuHover}}>
            <AnnouncementOutlinedIcon />
            <span className="ml-4 text-sm">Send Feedback</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserSideMenu;
