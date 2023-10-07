import { client } from "./client.js";

const getPosts = async () => {
  const { data: posts } = await client.get(`/posts`);
  const { data: users } = await client.get("/users");
  console.log(posts);
  console.log(users);
};

// getPosts();

const postUser = async () => {
  const { response } = await client.post("/users", {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
  });
  console.log(response);
};

// postUser();
