
import React from 'react'
import { DEFAULT_PROFILE_IMG } from '../../utils/constants'

const ChatMessage = () => {
  return (
    <div className='flex p-2 m-1'>
        <img className='rounded-full w-4' src={DEFAULT_PROFILE_IMG} alt='profile_image'/>
        <p className='text-xs ml-2'>Chat message</p>
    </div>
  )
}

export default ChatMessage