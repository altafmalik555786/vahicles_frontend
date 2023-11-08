import { observer } from "mobx-react";
import { memo, useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import { io } from "socket.io-client";
import { CommonInput } from "@components/common-components/input";
import CustomButton from "@components/common-components/custom-button";
import ScrollToBottom from "react-scroll-to-bottom"

interface Props {}
const Chat: React.FC<Props> = observer(({ ...props }) => {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const socketRef = useRef(null);
        
  useEffect(() => {
    socketRef.current = io("http://localhost:8080");
    const socket = socketRef.current;

    socket.on('connect', () => {
      console.log('Connected to the WebSocket server');
    });

    return () => {
      // Use the socket instance from the ref for disconnection
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    }
  }, []);

      useEffect(() => {
        console.log('receive_message')
        const socket = socketRef.current;
        socket.on("receive_message", (data) => {
          console.log('data', data)
          setMessageList((list) => [...list, data]);
        });
      }, [socketRef.current]);
    

  const sendMessage = async () => {
    const socket = socketRef.current;
    if (currentMessage !== "") {
      const messageData = {
        room: roomId,
        author: userName,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("chat_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  const chatHandler = async() => {
    const socket = socketRef.current;
    if(userName && roomId){
      await socket.emit("join_room", roomId);
      setShowChat(true);
    }
  }


  return (
    <div className={style.mainWrapper}>
        {showChat ? 
         <div className={style.chatWindow}>
         <div className={style.chatHeader}>
           <p>Live Chat</p>
         </div>
         <div className={style.chatBody}>
           <ScrollToBottom className={style.messageContainer}>
             {messageList?.map((messageContent) => {
               return (
                 <div
                   className={`${style.message} ${userName === messageContent.author ? style.you : style.other}`}
                 >
                   <div>
                     <div className={style.messageContent}>
                       <p>{messageContent.message}</p>
                     </div>
                     <div className={style.messageMeta}>
                       <p className={style.time}>{messageContent.time}</p>
                       <p className={style.author}>{messageContent.author}</p>
                     </div>
                   </div>
                 </div>
               );
             })}
           </ScrollToBottom>
         </div>
         <div className={style.chatFooter}>
           <input
             type="text"
             value={currentMessage}
             placeholder="Hey..."
             onChange={(event) => {
               setCurrentMessage(event.target.value);
             }}
             onKeyPress={(event) => {
               event.key === "Enter" && sendMessage();
             }}
           />
           <button onClick={sendMessage}>&#9658;</button>
         </div>
       </div>
        :<>
        <div className={style.fieldWrapper}>
          <label>Enter your name</label>
          <CommonInput onChange={(e) => setUserName(e.target.value)}/>
        </div>
        <div className={style.fieldWrapper}>
          <label>Enter your Id</label>
          <CommonInput onChange={(e) => setRoomId(e.target.value)}/>
        </div>
        <div>
          <CustomButton title="Create chat" onClick={() => chatHandler()}/>
        </div></>}
    </div>
  );
});

export default memo(Chat);
 