//Trong express, middleware là 1 hàm
const authMiddleware = (req, res, next) => {
  const isLogin = false;
  //Logic nghiệp vụ
  if (!isLogin) {
    return res.redirect("/dang-nhap");
  }
  next();
};

export default authMiddleware;
