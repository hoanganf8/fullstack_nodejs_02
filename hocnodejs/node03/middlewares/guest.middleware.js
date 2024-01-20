module.exports = (req, res, next) => {
  const pathname = req.baseUrl + req.path;
  // /auth/logout
  if (req.user && pathname !== "/auth/logout") {
    return res.redirect("/");
  }
  return next();
};
