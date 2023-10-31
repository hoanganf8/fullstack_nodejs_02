import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        name: "",
        email: "",
      },
      users: [],
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state.form;
    this.setState({
      users: [...this.state.users, { name, email }],
      form: {
        name: "",
        email: "",
      },
    });
  };
  handleChangeValue = (e) => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  render() {
    const { users, form } = this.state;

    return (
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-6">
            <form action="" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label>Tên</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tên..."
                  onChange={this.handleChangeValue}
                  value={form.name}
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email..."
                  onChange={this.handleChangeValue}
                  value={form.email}
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary">Đăng nhập</button>
              </div>
            </form>
            <hr />
            <h2>Danh sách người dùng</h2>
            {users.map(({ name, email }, index) => (
              <div key={index}>
                <h3>{name}</h3>
                <h3>{email}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
