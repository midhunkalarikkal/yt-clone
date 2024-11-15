import React from "react";
import { darkTheme, lightTheme } from "./theme";

export const parseDescription = (text, themeMode) => {
  const theme = themeMode === false ? lightTheme : darkTheme;
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
            <a href={match} target="_blank" rel="noopener noreferrer" className="px-4 rounded-full" style={{ color: theme.textOne, backgroundColor: theme.descriptionLinkBg }}>
              {url.pathname}
            </a>
          </React.Fragment>
        );
      }
      return processedPart;
    });
  
    return parts;
  };