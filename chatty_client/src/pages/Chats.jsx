import React from "react";
import { useNavigate } from "react-router-dom";
import ChatBox from "../components/chatbox/ChatBox";
import Sidebar from "../components/sidebar/Sidebar";

import { io } from "socket.io-client";
import Modal from "../modal/Modal";
import AllUsers from "../components/allusers/AllUsers";

const Chats = () => {
  let socket;
  const navigate = useNavigate();
  const [conversations, setConversations] = React.useState({});

  React.useEffect(() => {
    console.log("connect to socketio");
    const token = localStorage.getItem("token");
    socket = io("http://localhost:4000/", {
      autoConnect: false,
    });

    socket.on("session", (data) => {
      socket.userId = data.userId;
    });

    socket.auth = { token };

    socket.connect();

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

    socket.connect();

    return () => {
      socket.off("connect_error");
      socket.off("all_conversations");
    };
  }, []);

  return (
    <div className="d-flex p-3 m-3 mx-auto w-100 chats bg-light chat-wrapper">
      <Modal isShown={true}>
        <AllUsers />
      </Modal>
      <Sidebar conversations={conversations} />
      <ChatBox socket={socket} />
    </div>
  );
};

export default Chats;
