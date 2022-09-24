import React from 'react'
import ChatBox from '../components/chatbox/ChatBox'
import Sidebar from '../components/sidebar/Sidebar'

const Chats = () => {
  return (
      <div className="d-flex p-3 m-3 mx-auto h-100 w-100 chats bg-light">
        <Sidebar />
        <ChatBox />
    </div>
  )
}

export default Chats