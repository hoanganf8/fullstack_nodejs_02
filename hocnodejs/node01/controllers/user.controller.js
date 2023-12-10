const userController = {
  index: (req, res) => {
    const { status, keyword } = req.query; //search params
    res.send(`
  <h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>
  `);
  },
  add: (req, res) => {
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
