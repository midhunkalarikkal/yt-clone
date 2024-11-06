import React from "react";

const ButtonList = () => {
  
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
        <button key={index}className="px-4 py-1 rounded-lg bg-[#f0f0f0] mx-1">{button}</button>
      ))}
    </div>
  );
};

export default ButtonList;
