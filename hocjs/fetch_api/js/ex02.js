import { client } from "./client.js";

const render = (posts) => {
  const stripHtmlTag = (html) => html.replace(/<[^>]*>?/gm, "");
  const postsEl = document.querySelector(".posts");
  postsEl.innerHTML = `
  <div class="row g-3">
    ${posts
      .map(
        ({ title, excerpt }) => `<div class="col-6 col-lg-4">
    <div class="border p-3">
      <h2><a href="#" class="text-decoration-none">${stripHtmlTag(
        title,
      )}</a></h2>
      <p>
        ${stripHtmlTag(excerpt)}
      </p>
    </div>
  </div>`,
      )
      .join("")}
  </div>`;
};

const getPosts = async (query = {}) => {
  //Chuyển object query => query string
  const queryString = new URLSearchParams(query).toString();
  const { data: posts } = await client.get(`/posts?${queryString}`);
  render(posts);
};

getPosts({
  _sort: "id",
  _order: "desc",
});

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;

  getPosts({
    q: keyword,
  });

  keywordEl.value = "";
});
