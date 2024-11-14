import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useDispatch, useSelector } from "react-redux";
import { makeDarkTheme, makeLightTheme, toggleAppearanceMenu, toggleUserSideMenu } from "../utils/stateSlice";
import { lightTheme, darkTheme } from "../utils/theme";

const AppearanceMenu = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector((store) => store.state.isDarkTheme);
    const theme = themeMode === false ? lightTheme : darkTheme;

  const handleAppearanceMenu = () => {
    dispatch(toggleAppearanceMenu());
    dispatch(toggleUserSideMenu());
};

const handleDarkTheme = () => {
      dispatch(toggleAppearanceMenu());
      dispatch(makeDarkTheme());
    };
    
    const handleLightTheme = () => {
        dispatch(toggleAppearanceMenu());
        dispatch(makeLightTheme());
  };

  return (
    <div className="absolute top-12 right-8 py-4 px-8 rounded-lg shadow-xl bg-white">
      <div>
        <div
          className="p-2 cursor-pointer"
          style={{ borderBottom: "1px solid #f0f0f0" }}
          onClick={handleAppearanceMenu}
        >
          <span className="font-semibold" styel={{color: theme.menuText}}>
            <ArrowBackOutlinedIcon /> Appearance
          </span>
        </div>
        <ul>
          <li>
            <span className="text-[#666666] text-xs">
              Setting applies to this browser only
            </span>
          </li>
          <li className="custom-list-item" onClick={handleDarkTheme}>
            <span className="ml-4 text-sm">Dark theme</span>
          </li>
          <li className="custom-list-item" onClick={handleLightTheme}>
            <span className="ml-4 text-sm">Light theme</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppearanceMenu;
