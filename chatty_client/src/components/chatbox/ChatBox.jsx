import React from "react";

const ChatBox = () => {
  return (
    <div className="ps-3 chatbox" id="chatbox">
      <div className="chatbox-header">
        <div className="chatbox-header-image">
          <div className="active-status active"></div>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pinclipart.com%2Fpicdir%2Fmiddle%2F379-3797946_programming-clipart.png&f=1&nofb=1&ipt=78e2a371d91a9000d2d8a0daef5faac97bea981734b21086d3e0a86c36940a4b&ipo=images"
            alt="user"
          />
        </div>
        <div className="chatbox-header-name">
          <h4>John Doe</h4>
          <p>Active now</p>
        </div>
      </div>

      <div id="messages">
        {[1, 2, 3, 4, 5, 6].map(() => {
          return (
            <>
              <div className="message">
                <p className="message-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam illo animi tenetur ducimus enim perspiciatis ullam
                  ipsum accusamus et, error sed.
                </p>
                <div className="message-stamp">
                  <p>John Doe</p>
                  <p className="time">9:16pm</p>
                </div>
              </div>

              <div className="message sent">
                <p className="message-content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam illo animi tenetur ducimus enim perspiciatis ullam
                  ipsum accusamus et, error sed.
                </p>
                <div className="message-stamp">
                  <p>John Doe</p>
                  <p className="time sent">9:16pm</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="message-footer d-flex align-items-center">
        <form>
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Type message..."
          />
          <input type="submit" value={"⤴ "} />
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
