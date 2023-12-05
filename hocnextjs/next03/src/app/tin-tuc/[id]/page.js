const getPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return response.json();
};

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return {
    title: post.title.slice(0, 65),
    description: post.body.slice(0, 150),
  };
};

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h1 className="text-3xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
