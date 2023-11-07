import { useDispatch, useSelector } from "../core/hook";

const Message = () => {
  const state = useSelector();
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{state.message}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "message/update",
            payload: "Học React không khó",
          });
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Message;
