const ProductDetail = ({ params, searchParams, ...rest }) => {
  console.log(params);
  console.log(searchParams);
  console.log(rest);
  return (
    <div>
      <h1>Chi tiết sản phẩm: {params.id}</h1>
      <h2>Page: {searchParams.page}</h2>
    </div>
  );
};

export default ProductDetail;
