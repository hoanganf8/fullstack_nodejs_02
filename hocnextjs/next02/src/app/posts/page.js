"use client";
const postApi = `https://jsonplaceholder.typicode.com/posts`;
import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch(postApi);
  return await response.json();
};
const Posts = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR("/posts", fetcher, {
    revalidateOnFocus: true,
  });
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <h3>Đã có lỗi xảy ra</h3>;
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {posts?.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default Posts;
