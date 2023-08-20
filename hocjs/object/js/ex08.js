var posts = [
  {
    title: "Tiêu đề bài viết 1",
    excerpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quos amet omnis sunt. Necessitatibus nulla cumque praesentium aperiam? Sapiente laboriosam dolor odio maxime quas molestiae ipsam eaque vel totam?`,
    thumbnail:
      "https://fastly.picsum.photos/id/308/500/300.jpg?hmac=u4pkT5kChL7mhWOhAMTxo3gkjiHA9nVzXWdT94fkrjI",
  },

  {
    title: "Tiêu đề bài viết 2",
    excerpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quos amet omnis sunt. Necessitatibus nulla cumque praesentium aperiam? Sapiente laboriosam dolor odio maxime quas molestiae ipsam eaque vel totam?`,
    thumbnail:
      "https://fastly.picsum.photos/id/308/500/300.jpg?hmac=u4pkT5kChL7mhWOhAMTxo3gkjiHA9nVzXWdT94fkrjI",
  },
  {
    title: "Tiêu đề bài viết 3",
    excerpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quos amet omnis sunt. Necessitatibus nulla cumque praesentium aperiam? Sapiente laboriosam dolor odio maxime quas molestiae ipsam eaque vel totam?`,
    thumbnail:
      "https://fastly.picsum.photos/id/308/500/300.jpg?hmac=u4pkT5kChL7mhWOhAMTxo3gkjiHA9nVzXWdT94fkrjI",
  },

  {
    title: "Tiêu đề bài viết 4",
    excerpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor quos amet omnis sunt. Necessitatibus nulla cumque praesentium aperiam? Sapiente laboriosam dolor odio maxime quas molestiae ipsam eaque vel totam?`,
    thumbnail:
      "https://fastly.picsum.photos/id/308/500/300.jpg?hmac=u4pkT5kChL7mhWOhAMTxo3gkjiHA9nVzXWdT94fkrjI",
  },
];

var html = `<div class="posts">
${
  posts?.length
    ? posts
        .map?.(function (post, index) {
          return `<div class="post-item ${index % 2 !== 0 ? "post-right" : ""}">
        <img src="${post.thumbnail}" alt="${post.title}">
        <div>
          <h2>${post.title}</h2>
          <p>
            ${post.excerpt}
          </p>
        </div>
      </div>
      `;
        })
        .join("")
    : "Không có bài viết nào"
}
</div>`;

document.write(html);

//Destructuring
