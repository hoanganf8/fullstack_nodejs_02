import { NextResponse } from "next/server";
const isLogin = false;
export const middleware = (request) => {
  const pathname = request.nextUrl.pathname;
  const cookie = request.cookies.get("username");
  //   console.log(cookie);
  const userAgent = request.headers.get("user-agent");
  console.log(userAgent);

  const response = NextResponse.next();

  response.cookies.set({
    name: "username",
    value: "hoangan.web",
    httpOnly: true,
  });

  //Set Header
  response.headers.set("x-api-key", "123");

  return response;
  //   if (pathname.startsWith("/admin/nguoi-dung")) {
  //     const oldUrl = new URL("users", request.url);
  //     return NextResponse.rewrite(oldUrl);
  //   }
  //   if (pathname.startsWith("/admin")) {
  //     if (!isLogin) {
  //       //Chưa đăng nhập --> Chuyển hướng về trang chủ
  //       const homeUrl = new URL("/", request.url);
  //       return NextResponse.redirect(homeUrl.toString());
  //     }
  //   }
};

export const config = {
  matcher: ["/admin/:path*", "/san-pham/:path*"],
};

/*
Request --> Middleware --> Route --> Layout --> Page
*/
