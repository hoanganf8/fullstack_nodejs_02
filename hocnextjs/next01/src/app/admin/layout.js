export const metadata = {
  title: "Trang quản trị",
};
const AdminLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>HEADER ADMIN</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h1>FOOTER ADMIN</h1>
      </footer>
    </>
  );
};

export default AdminLayout;
