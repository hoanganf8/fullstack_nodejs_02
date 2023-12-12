const authController = {
  login: (req, res) => {
    // return res.send("<h1>Đăng nhập</h1>");
    res.render("auth/login", {
      layout: "auth/layout",
    });
  },

  handleLogin: (req, res) => {
    const data = req.body;
    console.log(data);
    // res.send("Submit");
    res.json(data);
  },
};

export default authController;

/*
Buổi sau: 
- session
- flash session
- validate
- upload file
- database
*/
