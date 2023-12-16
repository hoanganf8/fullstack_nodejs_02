const userController = {
  index: (req, res) => {
    const { status, keyword } = req.query; //search params
    //set session
    req.session.message = "F8";
    req.session.count = 1;
    res.send(`
  <h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>
  `);
  },
  add: (req, res) => {
    //get session
    delete req.session.message;
    console.log(req.session.message);
    console.log(req.session.count);
    res.send("<h1>Thêm người dùng</h1>");
  },
  active: (req, res) => {
    const userId = req.params.userId; //params
    res.send(`
    <h1>Kích hoạt người dùng: ${userId}</h1>
    `);
  },
};

export default userController;
