import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../utils/theme";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { appearanceMenuClose, makeDarkTheme, makeLightTheme, toggleUserSideMenu } from "../../utils/stateSlice";

const AppearanceMenu = () => {
    const dispatch = useDispatch();
    const themeMode = useSelector((store) => store.state.isDarkTheme);
    const theme = themeMode === false ? lightTheme : darkTheme;

  const handleAppearanceMenu = () => {
    dispatch(appearanceMenuClose());
    dispatch(toggleUserSideMenu());
  };
  
  const handleDarkTheme = () => {
    dispatch(makeDarkTheme());
    dispatch(appearanceMenuClose());
  };
  
  const handleLightTheme = () => {
    dispatch(makeLightTheme());
    dispatch(appearanceMenuClose());
  };

  return (
    <div className={`absolute top-12 right-8 py-4 px-8 rounded-lg shadow-xl`} style={{ backgroundColor: theme.sideMenuBg}}>
      <div>
        <div
          className="p-2"
          style={{ borderBottom: `1px solid ${theme.border}` }}
          onClick={handleAppearanceMenu}
        >
          <span className="font-semibold cursor-pointer" style={{color: theme.menuText}}>
            <ArrowBackOutlinedIcon /> Appearance
          </span>
        </div>
        <ul>
          <li className="text-xs font-semibold p-2" style={{color: theme.textTwo}}>
              Setting applies to this browser only
          </li>
          <li className="custom-hover" style={{ color: theme.menuText, "--hover-bg": theme.sideMenuHover}} onClick={handleDarkTheme}>
            <span className="ml-4 text-sm">Dark theme</span>
          </li>
          <li className="custom-hover" style={{ color: theme.menuText, "--hover-bg": theme.sideMenuHover }} onClick={handleLightTheme}>
            <span className="ml-4 text-sm">Light theme</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppearanceMenu;
