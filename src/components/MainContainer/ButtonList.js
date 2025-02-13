import React from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../utils/theme";

const ButtonList = () => {
  console.log("ButtonList rendered")

  const themeMode = useSelector((store) => store.state.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;
  
  const buttonNames = [
    "All",
    "Live",
    "Cinema",
    "News",
    "APIs",
    "Music",
    "Web pages",
    "Google",
    "Gaming",
    "Tech",
    "Shows",
    "Sports",
    "TV Shows",
    "Trailer",
    "Comedy",
    "Space",
    "Cooking",
    "Travel",
    "Car",
  ];

  return (
    <div className="p-4 overflow-x-scroll whitespace-nowrap no-scrollbar">
      {buttonNames.map((button, index) => (
        <button key={index}className="px-4 py-1 text-sm font-semibold rounded-lg mx-1" style={{ background : theme.buttonOneBg, color: theme.textOne}}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonList;
