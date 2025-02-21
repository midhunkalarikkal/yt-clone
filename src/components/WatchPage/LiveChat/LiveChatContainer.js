import ChatTopBar from "./ChatTopBar";
import ChatMessage from "./ChatMessage";
import React, { useEffect } from "react";
import ChatInputForm from "./ChatInputForm";
import { addMessage } from "../../../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../../utils/theme";
import {
  generateRandomColor,
  generateRandomMessage,
  generateRandomName,
} from "../../../utils/helper";

const LiveChatContainer = () => {

  const dispatch = useDispatch();
  const themeMode = useSelector((store) => store.state?.isDarkTheme);
  const theme = themeMode === false ? lightTheme : darkTheme;
  const messages = useSelector((store) => store.chat?.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          profileImage: null,
          bgColor: generateRandomColor(),
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      className="flex flex-col w-full h-[400px] sm:h-[400px] md:h-[450px] lg:h-[650px] lg:rounded-lg border"
      style={{ color: theme.textOne, borderColor: theme.descriptionBg }}
    >
      <ChatTopBar />
      <div className="flex h-full overflow-y-scroll flex-col-reverse scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-track-rounded-lg" style={{
        "--scrollbar-thumb": theme.descriptionBg,
        "--scrollbar-track": theme.subButtonText,
      }}>
        {messages.length > 0 &&
          messages.map((chat, index) => (
            <ChatMessage key={index} data={chat} />
          ))}
      </div>
        <ChatInputForm theme={theme}/>
    </div>
  );
};

export default LiveChatContainer;
