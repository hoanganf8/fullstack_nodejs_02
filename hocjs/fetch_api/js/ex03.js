/*
Authentication
- Xác thực
- Xác minh xem bạn là ai?

Authorization
- Ủy quyền
- Cho biết bạn sẽ được làm gì?
*/

import { client } from "./client.js";
import { requestRefresh } from "./token.js";

client.setUrl("https://api.escuelajs.co/api/v1");

const root = document.querySelector("#root");

const isLogin = () => {
  //Kiểm tra trạng thái đăng nhập
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    return true;
  }
  return false;
};

const handleLogout = () => {
  localStorage.removeItem("login_token");
  render();
};

const getProfile = async () => {
  const tokens = localStorage.getItem("login_token");
  if (tokens) {
    const { access_token: accessToken, refresh_token: refreshToken } =
      JSON.parse(tokens);
    if (!accessToken) {
      //Xử lý logout
      handleLogout();
    } else {
      //set token vào header của request
      client.setToken(accessToken);
      const { response, data } = await client.get("/auth/profile");
      if (!response.ok) {
        const { data: newToken } = await requestRefresh(refreshToken);
        //Gửi yêu cầu cấp lại accessToken mới

        //Lấy được token mới -> Trả về cả refresh và access mới
        if (newToken) {
          localStorage.setItem("login_token", JSON.stringify(newToken));
          getProfile(); //Gọi lại profile
        } else {
          //Xử lý logout -> 401
          handleLogout();
        }
      } else {
        const profileName = document.querySelector(".profile .name");
        profileName.innerText = data.name;
      }
    }
  }
};

const eventLogin = () => {
  const loginForm = document.querySelector(".login");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailEl = e.target.querySelector(".email");
      const passwordEl = e.target.querySelector(".password");

      const email = emailEl.value;
      const password = passwordEl.value;

      handleLogin({ email, password });
    });
  }
};

const eventLogout = () => {
  const logout = document.querySelector(".profile .logout");
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      handleLogout();
    });
  }
};

const render = () => {
  if (isLogin()) {
    root.innerHTML = `<div class="container py-3">
    <h2>Chào mừng bạn đã quay trở lại</h2>
    <ul class="list-unstyled d-flex gap-3 profile">
        <li>Chào bạn: <span class="name">Loading...</span></li>
        <li><a href="#" class="logout">Đăng xuất</a></li>
    </ul>
    </div>
    `;
    getProfile();
  } else {
    root.innerHTML = `<div class="container py-3">
    <div class="row justify-content-center">
      <div class="col-7">
        <h2 class="text-center">Đăng nhập</h2>
        <form action="" class="login">
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control email" placeholder="Email..." />
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control password" placeholder="Password..." />
          </div>
          <div class="d-grid">
            <button class="btn btn-primary">Đăng nhập</button>
          </div>
        </form>
        <div class="msg text-danger mt-2 text-center"></div>
      </div>
    </div>
    </div>`;
  }

  eventLogin();
  eventLogout();
};

render();

/*
Logic đăng nhập
- Lấy dữ liệu từ Form
- Send API
- Trả về Token hoặc lỗi
- Nếu thành công => Lưu vào Storage
- Render
*/

const loading = (mode = "add") => {
  const loginForm = document.querySelector(".login");
  if (loginForm) {
    const btn = loginForm.querySelector(".btn");
    if (mode === "add") {
      btn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Loading`;
      btn.disabled = true;
    } else {
      btn.innerText = "Đăng nhập";
      btn.disabled = false;
    }
  }
};

const handleLogin = async (data) => {
  const msg = document.querySelector(".msg");
  msg.innerText = ``;
  loading();
  const { data: tokens, response } = await client.post("/auth/login", data);
  if (response.ok) {
    //Cập nhật vào Storage (localStorage)
    localStorage.setItem("login_token", JSON.stringify(tokens));
    render(); //Render lại giao diện
  } else {
    msg.innerText = `Thông tin đăng nhập không hợp lệ`;
  }
  loading("remove");
};

//Xử lý lấy lại accessToken khi hết hạn (expired) -> Gửi lên 1 refreshToken -> trả về access mới

// let token = "Token";
// let isExpired = false; //Có 1 request check expire
// let refreshPromise = null;
// const requestRefresh = () => {
//   //Trả về accessToken mới
//   if (!refreshPromise) {
//     refreshPromise = new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Request Refresh Token: " + Math.random());
//         resolve(`New Token`);
//       }, 3000);
//     });
//   }

//   return refreshPromise;
// };

// const requestApi = async (url) => {
//   if (url === "/pro") {
//     isExpired = true;
//   }

//   if (isExpired) {
//     token = await requestRefresh();
//   }

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Call API: ${url} với ${token}`);
//     }, 1000);
//   });
// };

// (async () => {
//   const slider = await requestApi("/slider");
//   console.log(slider);
// })();

// (async () => {
//   const pro = await requestApi("/pro");
//   console.log(pro);
// })();

// (async () => {
//   const free = await requestApi("/free");
//   console.log(free);
// })();

/*
request1 -> Chưa hết hạn -> Trả về data
request2 -> hết hạn -> Cấp lại access mới
request3 -> hết hạn -> Cấp lại access mới

Cần xử lý:
request1 -> request 2 -> cấp lại access mới -> request 3 đợi khi nào có access mới

Xử lý khi Logout: -> Call API Logout -> Đưa token vào Blacklist (Nằm trên Server) và xóa refresh khỏi server

Refresh Token và accessToken lưu như thế nào?

- Refresh Token -> Lưu Server và Client
- Access Token -> Lưu ở Client
+ Cookie -> Dễ bị tấn công CSRF
+ localStorage, sessionStorage -> Dễ bị tấn công XSS
*/
