import Category from "@/components/Posts/Category";
import PostDetail from "@/components/Posts/PostDetail";
import PostList from "@/components/Posts/Posts";
// import { useState } from "react";

const Posts = ({ params }) => {
  // console.log(params.slug);
  // const [count, setCount] = useState();
  if (!params?.slug) {
    return <PostList />;
  }
  return (
    <div>
      <h1>Posts</h1>
      {params.slug[1] ? (
        <PostDetail post={params.slug[1]} />
      ) : (
        <Category category={params.slug[0]} />
      )}
    </div>
  );
};

export default Posts;
