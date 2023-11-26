const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  const data = await response.json();
  return data;
};
const PostDetail = async ({ id }) => {
  const post = await getPost(id);
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
};

export default PostDetail;
