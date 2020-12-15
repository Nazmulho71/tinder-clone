import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Lucy",
      image:
        "https://yt3.ggpht.com/ytc/AAUvwnhtKOzRKbQffQnkJFOnJqY3ZubAeKVS6w6R0deUXQ=s900-c-k-c0x00ffffff-no-rj",
      message: "Love you ♥",
    },
    {
      name: "Lucy",
      image:
        "https://yt3.ggpht.com/ytc/AAUvwnhtKOzRKbQffQnkJFOnJqY3ZubAeKVS6w6R0deUXQ=s900-c-k-c0x00ffffff-no-rj",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you Lucy?",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH LUCY ON 15/08/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
