export const reducer = (prevState, action = {}) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...prevState, count: prevState.count + action.payload };
    }
    case "counter/decrement": {
      return { ...prevState, count: prevState.count - action.payload };
    }
    case "todo/add": {
      return { ...prevState, todo: [...prevState.todo, action.payload] };
    }
    default: {
      return prevState;
    }
  }
};
