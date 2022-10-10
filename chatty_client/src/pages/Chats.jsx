import React from "react";
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/chatbox/ChatBox";
import Sidebar from "../components/sidebar/Sidebar";

import { io } from "socket.io-client";
import { useContext } from "react";
import { SocketContext } from "../context/socket";

const Chats = () => {
  const navigate = useNavigate();
  const [conversations, setConversations] = React.useState([]);

  const socket = useContext(SocketContext);

  React.useEffect(() => {
    // Socket io
    socket.on("session", (data) => {
      socket.userId = data.userId;
    });

    socket.on("all_conversations", (data) => {
      setConversations(data);
    });

    // If any socket middleware returns an error, it catches here...
    socket.on("connect_error", (err) => {
      console.log("", err.message, err.data?.type);
      if (err.data?.type === "unauthorized") {
        localStorage.removeItem("token");
        localStorage.removeItem('sessionUserId');
        navigate("/login");
      }
    });

    return () => {
      socket.off("connect_error");
      socket.off("all_conversations");
    };
  }, []);

  return (
    <div className="d-flex p-3 m-3 mx-auto w-100 chats bg-light chat-wrapper">
      
      <Sidebar conversations={conversations} />
      <ChatBox />
    </div>
  );
};

export default Chats;
