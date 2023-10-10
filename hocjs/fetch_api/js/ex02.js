import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const renderPaginate = (totalPages) => {
  const { _page } = query;
  const paginateNav = document.querySelector(".paginate-nav");
  const range = [...Array(totalPages).keys()];

  paginateNav.innerHTML = `<ul class="pagination">
  <li class="page-item"><a class="page-link" href="#">Trước</a></li>
  ${range
    .map(
      (index) =>
        `<li class="page-item ${
          _page === index + 1 ? "active" : ""
        }"><a class="page-link page-number" href="#">${index + 1}</a></li>`,
    )
    .join("")}
  <li class="page-item"><a class="page-link" href="#">Sau</a></li>
</ul>`;

  paginateNav.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("page-number")) {
      goPage(e.target.innerText);
    }
  });
};

const goPage = (page) => {
  query._page = +page;
  getPosts(query);
};

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
  const { data: posts, response } = await client.get(`/posts?${queryString}`);

  //Tính tổng số trang = Tổng số bài viết / Số bài viết ở 1 trang (limit)
  const totalPosts = response.headers.get("x-total-count");

  const totalPages = Math.ceil(totalPosts / PAGE_LIMIT);

  render(posts);
  renderPaginate(totalPages);
};

const query = {
  _sort: "id",
  _order: "desc",
  _limit: PAGE_LIMIT,
  _page: 1,
};

getPosts(query);

const searchForm = document.querySelector(".search");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keywordEl = e.target.querySelector(".keyword");
  const keyword = keywordEl.value;

  query.q = keyword;

  getPosts(query);

  keywordEl.value = "";
});

const sortByEl = document.querySelector(".sort-by");
sortByEl.addEventListener("change", (e) => {
  const order = e.target.value;
  query._order = order;
  getPosts(query);
});
