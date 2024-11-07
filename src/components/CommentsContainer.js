import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

const CommentsContainer = () => {
  return (
    <div className="w-full flex items-start mt-6 rounded-lg">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src="https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000"
        alt="Your_profile_image"
      />
      <div>
        <h4 className="text-lg font-semibold">Commenter Name</h4>
        <p className="text-gray-700 mt-1">
          This is the comment text that the user has posted.
        </p>
        <div className="flex gap-2 mt-2">
          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
            <ThumbUpOutlinedIcon />
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
            <ThumbDownOutlinedIcon />
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentsContainer;
