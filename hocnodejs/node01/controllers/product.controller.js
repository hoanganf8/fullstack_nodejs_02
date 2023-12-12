const productController = {
  index: (req, res) => {
    res.render("products/index", {
      layout: false,
    });
  },
};

export default productController;
