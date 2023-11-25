"use client"; //Chuyển về client component
import "@/assets/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  //Lấy pathname --> Thao tác ở client
  const pathname = usePathname();
  return (
    <nav>
      <ul>
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li className={clsx(pathname === "/posts" && "active")}>
          <Link href="/posts">Tin tức</Link>
        </li>
        <li className={clsx(pathname === "/san-pham" && "active")}>
          <Link href="/san-pham">Sản phẩm</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
