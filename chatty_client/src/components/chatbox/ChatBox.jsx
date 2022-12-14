import { useContext } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { SocketContext } from "../../context/socket";
import axiosInstance from "../../utils/axios";
import Message from "../message/Message";

const ChatBox = () => {
  const socket = useContext(SocketContext);
  const [convId, setConvId] = useState("");

  const [messages, setMessages] = useState([]);
  const [conversationDetails, setConversationDetails] = useState({});

  // message box data
  const [msz, setMsz] = useState('');

  const [searchParams] = useSearchParams();

  useEffect(() => {
    socket.on('new_message', data => {
      console.log('new_message data', data)
    })
  }, [])

  useEffect(() => {
    const c = searchParams.get("c");
    if (c) {
      setConvId(c);
    }
  }, [searchParams]);

  useEffect(() => {
    if (convId) {
      axiosInstance
        .get(`/messages/${convId}/`)
        .then((res) => setMessages(res.data?.data))
        .catch((err) => {
          console.log(err);
          toast.error(
            err?.response?.message || err.toString() || "Some Error occurred!!"
          );
        });
    }
  }, [convId]);

  if (!convId) {
    return (
      <>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-chat-heart"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                />
              </svg>
            </div>
            <div className="fw-bold mt-2">Select a conversation</div>
          </div>
        </div>
      </>
    );
  }

  function handleMessageSubmit(event) {
    event.preventDefault();
    const dataToSend = {
      convId,
      message: msz,
    }
    socket.emit('new_message', dataToSend);
  }

  return (
    <div className="ps-3 chatbox" id="chatbox">
      <div className="chatbox-header">
        <div className="chatbox-header-image">
          <div className="active-status active"></div>
          <img
            src={`${"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F379-3797946_programming-clipart.png&f=1&nofb=1&ipt=78e2a371d91a9000d2d8a0daef5faac97bea981734b21086d3e0a86c36940a4b&ipo=images"}`}
            alt="user"
          />
        </div>
        <div className="chatbox-header-name">
          <h4>John Doe</h4>
          <p>Active now</p>
        </div>
      </div>

      <div id="messages">
        {messages.map((message) => {
          return (
            <Message message={message} />
          );
        })}
      </div>
      <div className="message-footer d-flex align-items-center">
        <form onSubmit={handleMessageSubmit}>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Type message..."
            value={msz}
            onChange={event => setMsz(event.target.value)}
          />
          <input type="submit" value={"??? "} />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
