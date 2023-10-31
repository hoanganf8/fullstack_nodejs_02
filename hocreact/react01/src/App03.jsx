/*
State, Lifecycle -> Học bằng class component (Có sẵn state, lifecycle)
*/
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    // this.state.count--; -> Sai
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;

/*
State là gì? 
- Lưu trạng thái của nội bộ component -> Thể hiện là dữ liệu
- Trong 1 component -> state là 1 object -> Muốn lưu nhiều thông tin, tạo các thuộc tính trong object state
- Bất kỳ 1 thuộc tính nào trong object state thay đổi -> Component sẽ bị re-render (Cập nhật lại giao diện)
- Không được thay đổi trực tiếp object state, mà phải thông qua hàm
*/
