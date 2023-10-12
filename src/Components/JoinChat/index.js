import "./joinChat.css";
import { useState } from "react";

import Dashboard from "../Dashboard"
const JoinChat = (props) => {
  const { socket } = props;
  const [username, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
 
  
  const [showChat, setShowChat] = useState(false);

  const sendMessage = async () => {
   
    if (query !== "") {
      const messagePayload = {
        messages: query,
        author: username,
      
        time: `${new Date(Date.now()).getHours()} : ${new Date(
          Date.now()
        ).getMinutes()}`,
      };

      await socket.emit("message", messagePayload);
      setMessages((list) => [...list, messagePayload]);
      setQuery("");
      socket.emit('message', 'Connection started.');
      setShowChat(true);
      
      
    }
  };

 
  return (
    <div>
      {!showChat?(
        <div className="joinchat-container">
          <h2>Create Query</h2>
          <input
            type="text"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your query"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
            <button onClick={sendMessage}>create query</button>
         
        </div>
      ):(<Dashboard socket={socket} messages={messages} username={username}/>)
     }
    </div>
  );
};

export default JoinChat