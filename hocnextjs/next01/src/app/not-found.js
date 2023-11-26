import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Lạc đường rồi. Anh em quay về trang chủ đi</p>
      <Link href="/">Về trang chủ</Link>
    </div>
  );
};

export default NotFound;
