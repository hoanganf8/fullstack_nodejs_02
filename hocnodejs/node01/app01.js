/*
Request => Thông qua HTTP => Server ==> Xử lý ==> Thông qua Http => Response

NodeJS: Mặc định import bằng CommonJS (Dùng hàm require)
*/
// const http = require("http"); //http là 1 module có sẵn của NodeJS
import http from "http";
import url from "url";
// const { getName, getEmail } = require("./utils/functions");
import { getName, getEmail } from "./utils/functions.js";

const server = http.createServer((req, res) => {
  //req: Nhận request từ client
  const parse = url.parse(req.url);
  const path = parse.pathname;
  //   const url = req.url;
  //   console.log(url);
  //   const method = req.method;
  //   const userAgent = req.headers["user-agent"];
  let content;
  if (path === "/") {
    content = `<h1>Học NodeJS không khó - Hoàng An F8</h1>
      <h2>Name: ${getName()}</h2>
      <h2>Email: ${getEmail()}</h2>
      `;
    res.setHeader("Set-Cookie", "name=hoangan;path=/;max-age=86400;HttpOnly");
  } else if (path === "/gioi-thieu") {
    content = `<h1>Giới thiệu F8</h1>`;
  } else if (path === "/san-pham") {
    const searchParams = new URLSearchParams(parse.search);
    const cookie = req.headers["cookie"];
    content = `<h1>Sản phẩm: ${cookie}</h1>
    <h2>Status: ${searchParams.get("status")}</h2>
    <h2>Keyword: ${searchParams.get("keyword")}</h2>
    `;
  } else {
    res.statusCode = 404;
    content = `<h1>Page Not Found</h1>`;
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(content);
  //res: Trả về response cho client
  //   res.setHeader("Content-Type", "text/html; charset=utf-8");
  //   res.setHeader("x-api-key", "123");
  //   res.statusCode = 404;
  //   res.end(`
  //   <h1>Học NodeJS không khó - Hoàng An F8</h1>
  //   <h2>Url: ${url}</h2>
  //   <h2>Method: ${method}</h2>
  //   <h2>User Agent: ${userAgent}</h2>
  //   `);
});

const hostname = "localhost";
const port = 8080;
server.listen(port, hostname, () => {
  //Chạy thành công --> callback sẽ được gọi
  console.log("Đã chạy thành công với Port: " + port);
});
