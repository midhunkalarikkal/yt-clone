import React from 'react'

const SuggestionContainer = () => {
  return (
    <div className="w-[30%] px-2">
        <div className="flex h-[120px]">
          <div className="w-[40%]">
          <iframe
            className="w-full h-full lg:rounded-lg"
            src={
              "https://www.youtube.com/embed/8r_ap3t49FY?controls=0&modestbranding=1&rel=0&autohide=1&showinfo=0&si=axB2wPjrFHkbGZFr"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
          <div className="w-[60%] px-2">
            <h3 className="text-md">this keyword in JavaScript 🔥 | Ep.06 - Namaste JavaScript</h3>
            <p className="text xs text-[#707070]">Akshay Saini</p>
            <div className="flex items-center justify-start">
              <p className="text-xs text-[#707070]">222k views</p>
              <p className="ml-4 text-xs text-[#707070]">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SuggestionContainer