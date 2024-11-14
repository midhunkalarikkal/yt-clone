import React from "react";

export const parseDescription = (text) => {
    const urlRegex = /https?:\/\/[^\s]+/g;
    const parts = text.split(urlRegex).map((part, index, array) => {
      const match = text.match(urlRegex)?.[index];
      const processedPart = part.split("\n").map((line, i) => (
        <React.Fragment key={`${index}-${i}`}>
          {line}
          {i < part.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
      
      if (match) {
        const url = new URL(match);
        return (
          <React.Fragment key={index}>
            {processedPart}
            <a href={match} target="_blank" rel="noopener noreferrer" className="text-black bg-[#e6e6e6] px-4 rounded-full">
              {url.pathname}
            </a>
          </React.Fragment>
        );
      }
      return processedPart;
    });
  
    return parts;
  };

  export const renderTextWithLinks = (text, extractTimestampFromLink, onTimeClick) => {
    const linkRegex = /<a href="([^"]+)">([^<]+)<\/a>/g;
    const parts = [];
    let lastIndex = 0;
    let match;
  
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const plainText = text.substring(lastIndex, match.index).replace(/<br\s*\/?>/g, "\n");
        parts.push(plainText);
      }
  
      const link = match[1];
      const linkText = match[2];
      const seconds = extractTimestampFromLink(link);
  
      if (seconds !== null) {
        parts.push(
          <a
            key={seconds}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onTimeClick(seconds);
            }}
            className="text-[#065fd4]"
          >
            {linkText}
          </a>
        );
      } else {
        parts.push(linkText);
      }
  
      lastIndex = linkRegex.lastIndex;
    }
  
    if (lastIndex < text.length) {
      const remainingText = text.substring(lastIndex).replace(/<br\s*\/?>/g, "\n");
      parts.push(remainingText);
    }
  
    return parts.map((part, index) =>
      typeof part === "string"
        ? part.split("\n").map((line, i) => (
            <React.Fragment key={`${index}-${i}`}>
              {line}
              {i < part.split("\n").length - 1 && <br />}
            </React.Fragment>
          ))
        : part
    );
  };