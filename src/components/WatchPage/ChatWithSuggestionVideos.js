import React from 'react'
import LiveChatContainer from './LiveChatContainer'
import SuggestionVideosContainer from './SuggestionVideosContainer'

const ChatWithSuggestionVideos = () => {
  return (
    <div className='w-full lg:w-[27%] px-2 md:px-4'>
        <LiveChatContainer />
        <SuggestionVideosContainer />
    </div>
  )
}

export default ChatWithSuggestionVideos