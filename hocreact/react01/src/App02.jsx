import React from "react";
import User from "./components/User";
import Image from "./components/Image";
import Posts from "./components/Posts";

const App = () => {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
      image:
        "https://fastly.picsum.photos/id/291/536/354.jpg?hmac=bfJIaH0FmtH4w44We3rF30m4Kd8zK4jsOAbLFVh2E20",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
      image:
        "https://fastly.picsum.photos/id/772/536/354.jpg?hmac=38B75EbsaQHn52_ldOKpyXApyB-7lFVnhSdzbmcSiIQ",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
      image:
        "https://fastly.picsum.photos/id/404/536/354.jpg?hmac=BVbZ4ixcfdCrcGHOT7Zg6As4TTJ9YlHvB5UhVOv0Wvw",
    },
  ];
  const handleGetData = (value) => {
    console.log(value);
  };
  return (
    <div>
      <h1>Danh sách user</h1>
      {/* {users.map((user) => (
        <React.Fragment key={user.id}>
          <User {...user}>
            <Image src={user.image} width="200" />
            <p>Ảnh của {user.name}</p>
          </User>
          <hr />
        </React.Fragment>
      ))} */}
      <Posts onGetData={handleGetData} />
    </div>
  );
};

export default App;

/*
Props
- Props là 1 object
- Truyền dữ liệu từ component cha -> component con
- Props sẽ nhận ở tham số của hàm, class
- Props chỉ truyền từ cha -> con
- Props không thể thay đổi chính nó

Render Props
*/
