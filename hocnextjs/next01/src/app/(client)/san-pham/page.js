import Form from "./Form";

export const metadata = {
  title: "Danh sách sản phẩm",
};
const Products = ({ searchParams }) => {
  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <h2>Từ khóa: {searchParams.keywords}</h2>
      <h2>Trạng thái: {searchParams.status}</h2>
      <Form />
    </div>
  );
};

export default Products;
