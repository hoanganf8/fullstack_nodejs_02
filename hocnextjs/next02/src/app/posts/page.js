"use client";
// export const postApi = `http://localhost:3005/posts`;
export const postApi = `https://jsonplaceholder.typicode.com/posts`;
import useSWR from "swr";
import PostForm from "./PostForm";
const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};
const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
    mutate,
  } = useSWR(postApi, fetcher, {
    // revalidateOnFocus: false,
    // refreshInterval: 2000,
    // revalidateOnReconnect: false,
  });
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Đã có lỗi xảy ra</h3>;
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts?.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
      <PostForm mutate={mutate} />
    </div>
  );
};

export default Posts;
