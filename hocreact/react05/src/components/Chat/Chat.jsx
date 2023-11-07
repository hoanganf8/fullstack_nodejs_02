import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
const Chat = () => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="chat-box p-2">
            <ChatMessage />
            <ChatForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
