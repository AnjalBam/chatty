import React from "react";
import { useContext } from "react";
import { SocketContext } from "../../context/socket";

const Message = ({ message }) => {
  const socket = useContext(SocketContext);
  return (
    <>
      <div
        className={`message ${
          message?.sentBy?._id === socket.userId ? "sent" : ""
        }`}
      >
        <p className="message-content">{message.content}</p>
        <div className="message-stamp">
          <p>
            {message?.sentBy?._id === socket.userId
              ? "You"
              : message?.sentBy?.fullName}
          </p>
          <p
            className={`time ${
              message?.sentBy?._id === socket.userId ? "sent" : ""
            }`}
          >
            {new Date(message.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default Message;
