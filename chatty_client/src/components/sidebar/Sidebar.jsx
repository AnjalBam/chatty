import { useState } from "react";
import Button from "../button/Button";

import Modal from "../modal/Modal";
import AllUsers from "../allusers/AllUsers";
import { useContext } from "react";
import { SocketContext } from "../../context/socket";

const Sidebar = ({ conversations }) => {
  const [shown, setShown] = useState(false);

  const socket = useContext(SocketContext);

  if (!conversations) conversations = [];

  return (
    <div id="sidebar" className="d-none d-md-block col-md-3 p-0 pe-3">
      <div className="sidebar-header">
        <h3>All Chats</h3>
        <Button onClick={() => setShown(true)}> + Add Conversation</Button>
        <Modal isShown={shown} setIsShown={setShown}>
          <AllUsers />
        </Modal>
      </div>
      <div className="sidebar-list">
        {conversations.length !== 0 ? (
          conversations.map((conv) => {
            const participants = (conv.participants || []).filter(
              (participant) => participant._id !== socket.userId
            );
            const convDetails = {
              name: conv.name || participants?.[0]?.fullName,
              convImage: `https://joeschmoe.io/api/v1/${participants?.[0]?.username || conv._id}`,
              subHead: "----"
            }
            if (participants.length === 0) {
              convDetails.name = "You"
            }
            return (
              <div className="sidebar-list-item">
                <div className="sidebar-list-item-image">
                  <div className="active-status active"></div>
                  <img
                    src={convDetails.convImage}
                    alt="user"
                  />
                </div>
                <div className="sidebar-list-item-name">
                  <h4>{convDetails.name}</h4>
                  <p>{convDetails.subHead}</p>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className="text-muted text-center mt-3">No Conversations.</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
