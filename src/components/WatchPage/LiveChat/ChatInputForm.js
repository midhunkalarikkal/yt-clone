import { toast } from "react-toastify";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { addMessage } from "../../../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ChatInputForm = React.memo(({ theme }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.state?.user);
  const [liveMessage, setLiveMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    if (!user) {
      toast.info("Please login.");
      return;
    }

    if (!liveMessage.trim()) {
      toast.info("Empty message.");
      return;
    }

    if (liveMessage.length > 150) {
      toast.info("Message is too long.");
      return;
    }

    dispatch(
      addMessage({
        profileImage: user.photoURL,
        bgColor: null,
        name: user.displayName,
        message: liveMessage.trim(),
      })
    );

    setLiveMessage("");
  };

  return (
    <div
      className="flex border-t p-3 justify-between"
      style={{ borderColor: theme.descriptionBg }}
    >
      <form onSubmit={submitForm} className="w-full flex justify-between">
        <div className="relative w-[85%] ">
          <textarea
            type="text"
            rows="1"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            placeholder="Chat"
            className="w-full rounded-3xl py-2 pl-3 pr-10 focus:outline-none focus:ring-0 border-none resize-none no-scrollbar"
            style={{ backgroundColor: theme.descriptionBg }}
          />
          <TagFacesIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
        </div>
        <div
          className="flex w-10 h-10 rounded-full justify-center items-center cursor-pointer"
          style={{ backgroundColor: theme.descriptionBg }}
        >
          {liveMessage.length > 0 ? (
            <button type="submit">
              <SendIcon />
            </button>
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
      </form>
    </div>
  );
});

export default ChatInputForm;
