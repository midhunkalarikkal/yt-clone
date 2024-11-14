import { toast } from "react-toastify";
import HeaderNavMenu from "./HeaderNavMenu";
import MicIcon from "@mui/icons-material/Mic";
import MenuIcon from "@mui/icons-material/Menu";
import { auth, provider } from "../utils/firebase";
import React, { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { DEFAULT_PROFILE_IMG, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { setUser, toggleSidebar, toggleUserSideMenu, updateUserLoggedIn } from "../utils/stateSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [signInLoading, setSignInLoading] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const userLoggedIn = useSelector((store) => store.state?.isUserLoggedIn);
  const userSideMenuOpen = useSelector(
    (store) => store.state?.isUserSideMenuOpen
  );
  const user = useSelector((store) => store.state.user);
  const dispatch = useDispatch();

  // Methods
  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  
  const handleSideBar = () => {
    dispatch(toggleSidebar());
  };
  
  const handleUserSideMenu = () => {
    dispatch(toggleUserSideMenu());
  }
  // Methods

  useEffect(() => {
    if (!searchQuery.trim()) return;
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if(user){
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        };
        localStorage.setItem("user", JSON.stringify(userData));
        dispatch(updateUserLoggedIn(true));
        dispatch(setUser(userData));
      }else{
        localStorage.removeItem("user");
        dispatch(updateUserLoggedIn(false));
        dispatch(setUser(null));
      }
    });

    return (() => {
      unSubscribe()
    })
  },[dispatch])

  const handleLogin = () => {
    setSignInLoading(true);
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        };
        localStorage.setItem(
          "user",
          JSON.stringify(userData)
        );

        dispatch(updateUserLoggedIn(true));
        dispatch(setUser(userData));
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          toast.error("Login popup closed. Please try again.");
        } else {
          toast.error("Login failed, please try again!");
        }
      }).finally(() => {
        setSignInLoading(false);
      })
  };


  return (
    <div className="flex w-full h-14 py-4 px-4 bg-white fixed top-0">
      <div className="flex w-3/12 items-center justify-start">
        <MenuIcon
          fontSize="large"
          className="cursor-pointer"
          onClick={handleSideBar}
        />
        <img
          className="w-8 ml-6 cursor-pointer"
          src="/icons/ytlogo.png"
          alt="ytlogo"
        />
        <h1 className="text-2xl font-bold cursor-pointer">
          Youtube<sup className="text-xs font-normal opacity-60">IN</sup>
        </h1>
      </div>
      <div className="flex w-6/12 items-center justify-center relative">
        <input
          className="w-7/12 h-10 rounded-l-full px-3"
          style={{ border: "1px solid gray", outline: "none" }}
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="w-1/12 h-10 bg-[#f0f0f0] rounded-r-full"
          style={{
            borderTop: "1px solid gray",
            borderRight: "1px solid gray",
            borderBottom: "1px solid gray",
          }}
        >
          <SearchIcon className="" />
        </button>
        <button className="w-[40px] ml-2 h-10 bg-[#f0f0f0] rounded-full">
          <MicIcon />
        </button>
        {suggestions.length > 0 && (
          <div className="absolute top-8 left-[124px] w-[57%] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="py-2 px-4">
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="p-1 hover:bg-[#f0f0f0] cursor-default"
                >
                  <SearchIcon /> {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex w-3/12 items-center justify-end relative">
        {userLoggedIn ? (
          <>
            <VideoCallIcon fontSize="large" className="mr-6 cursor-pointer" />
            <NotificationsNoneIcon
              fontSize="large"
              className="mr-6 cursor-pointer"
            />
            <img
              className="w-8 h-8 cursor-pointer rounded-full"
              src={ user.photoURL || DEFAULT_PROFILE_IMG}
              alt="userProfile"
              onClick={handleUserSideMenu}
              disabled={signInLoading}
            />
          </>
        ) : (
          <>
            <MoreVertOutlinedIcon />
            <button
              className="flex items-center justify-center text-[#065fd4] hover:bg-[#def1ff] px-4 py-2 rounded-full"
              style={{ border: "1px solid #f0f0f0" }}
              onClick={handleLogin}
            >
              <AccountCircleOutlinedIcon />
              <span className="ml-1 font-semibold">Sign in</span>
            </button>
          </>
        )}
      </div>
      {userSideMenuOpen && <HeaderNavMenu />}
    </div>
  );
};

export default Header;
