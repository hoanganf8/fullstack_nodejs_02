"use client";
import { useRouter } from "next/navigation";
const Button = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/admin");
  };
  return <button onClick={handleClick}>Vào quản trị</button>;
};

export default Button;
