const ChatForm = () => {
  return (
    <form>
      <div className="input-group input-group-sm">
        <input type="text" className="form-control" placeholder="Tin nhắn..." />
        <button className="btn btn-primary">Gửi</button>
      </div>
    </form>
  );
};

export default ChatForm;
