import React from 'react'
import { useSelector } from 'react-redux';
import ClearIcon from "@mui/icons-material/Clear";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { darkTheme, lightTheme } from '../../../utils/theme';

const ChatTopBar = () => {

    const themeMode = useSelector((store) => store.state?.isDarkTheme);
    const theme = themeMode === false ? lightTheme : darkTheme;
    
  return (
    <div
        className="flex justify-between border-b p-3"
        style={{ borderColor: theme.descriptionBg }}
      >
        <h5 className="cursor-pointer">
          Top chat <ExpandMoreIcon />
        </h5>
        <span className="cursor-pointer">
          <MoreVertIcon />
          <ClearIcon />
        </span>
      </div>
  )
}

export default ChatTopBar