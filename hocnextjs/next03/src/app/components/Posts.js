const Posts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {posts.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default Posts;
