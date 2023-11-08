export const initialState = {
  message: "Hello F8",
  chatMessages: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "message/update": {
      return { ...state, message: action.payload };
    }

    case "chat/sendMessage": {
      return {
        ...state,
        chatMessages: [...state.chatMessages, action.payload],
      };
    }

    case "chat/fetchMessages": {
      return { ...state, chatMessages: action.payload }; //Đọc localStorage -> dispatch lên action chat/fetchMessage
    }

    default: {
      return state;
    }
  }
};
