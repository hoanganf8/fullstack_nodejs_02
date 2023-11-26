import Link from "next/link";

const getPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return data;
};
const Posts = async () => {
  const postList = await getPosts();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {postList.map(({ id, title }) => (
        <div key={id}>
          <h3>{title}</h3>
          <Link href={`/posts/${id}`}>Chi tiết</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;

//Call API --> Trả về giao diện
