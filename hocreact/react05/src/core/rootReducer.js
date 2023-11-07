export const initialState = {
  message: "Hello F8",
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "message/update": {
      return { ...state, message: action.payload };
    }

    default: {
      return state;
    }
  }
};
