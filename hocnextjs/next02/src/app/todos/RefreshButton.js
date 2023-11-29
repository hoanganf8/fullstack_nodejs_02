"use client";
import { useRouter } from "next/navigation";
const RefreshButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.refresh();
  };
  return <button onClick={handleClick}>Refresh</button>;
};

export default RefreshButton;
