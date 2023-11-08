/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "../../core/hook";
import { useEffect } from "react";
const ChatMessage = () => {
  const { chatMessages } = useSelector();
  const dispatch = useDispatch();
  //Tạo state nội bộ để lấy giá trị của localStorage và lưu lại
  // const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log(1);
    if (chatMessages?.length) {
      localStorage.setItem("chat_messages", JSON.stringify(chatMessages));
    }
  }, [chatMessages?.length]);

  useEffect(() => {
    setTimeout(() => {
      const messageData =
        JSON.parse(localStorage.getItem("chat_messages")) ?? [];
      dispatch({
        type: "chat/fetchMessages",
        payload: messageData,
      });
    }, 100);
  });

  return (
    <div className="chat-message">
      {chatMessages.map((item, index) => (
        <div className="message-item mb-3" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
