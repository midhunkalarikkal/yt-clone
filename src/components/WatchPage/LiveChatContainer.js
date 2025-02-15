import React from "react";
import { useSelector } from "react-redux";
import ClearIcon from '@mui/icons-material/Clear';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { darkTheme, lightTheme } from "../../utils/theme";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatMessage from "./ChatMessage";

const LiveChatContainer = () => {

    const themeMode = useSelector((store) => store.state?.isDarkTheme);
    const theme = themeMode === false ? lightTheme : darkTheme;
  return (
    <div className="flex flex-col w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[650px] lg:rounded-lg border" style={{ color : theme.textOne , borderColor: theme.descriptionBg }}>
        <div className="flex justify-between border-b p-3" style={{ borderColor : theme.descriptionBg }}>
            <h5>Top chat <ExpandMoreIcon /></h5>
            <span className="">
            <MoreVertIcon  className=""/>
            <ClearIcon  className=""/>
            </span>
        </div>
        <div className="flex-grow">
            <ChatMessage />
        </div>
        <div className="flex border-t p-3 justify-between" style={{ borderColor: theme.descriptionBg }}>
            <div className="flex justify-between rounded-3xl w-[85%] py-2 px-3" style={{ backgroundColor : theme.descriptionBg }}>
                <p className="text-sm">Chat...</p>
                <TagFacesIcon />
            </div>
            <div className="flex w-[11%] rounded-full justify-center items-center" style={{ backgroundColor: theme.descriptionBg }}>
                <FavoriteBorderIcon />  
            </div>
        </div>
    </div>
  );
};

export default LiveChatContainer;
