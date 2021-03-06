import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Amanda"
        message="Hey! What's up?"
        timestamp="35 minutes ago"
        profilePic="data:image/jpeg;base64,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"
      />
      <Chat
        name="Lucy"
        message="Love you ♥"
        timestamp="50 minutes ago"
        profilePic="https://yt3.ggpht.com/ytc/AAUvwnhtKOzRKbQffQnkJFOnJqY3ZubAeKVS6w6R0deUXQ=s900-c-k-c0x00ffffff-no-rj"
      />
      <Chat
        name="Jessica"
        message="Nice to meet you!"
        timestamp="4 days ago"
        profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F0cd934b4c7b6065496ba00e1f5f826d4%2F0x0.jpg"
      />
      <Chat
        name="Sarah"
        message="How are you... 🙂"
        timestamp="1 week ago"
        profilePic="https://4.bp.blogspot.com/-eUHYCVj6AmY/TYGBGTPjNLI/AAAAAAAABwI/MIJSB6gvtz8/s1600/sarah%2Bwalker%2B6.jpg"
      />
    </div>
  );
}

export default Chats;
