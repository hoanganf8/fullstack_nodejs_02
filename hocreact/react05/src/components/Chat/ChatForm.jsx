import { useState } from "react";
import { useDispatch } from "../../core/hook";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "chat/sendMessage",
      payload: message,
    });

    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm">
        <input
          type="text"
          name="message"
          className="form-control"
          placeholder="Tin nhắn..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button className="btn btn-primary">Gửi</button>
      </div>
    </form>
  );
};

export default ChatForm;
