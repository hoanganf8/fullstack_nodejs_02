//Cắt chuỗi

// const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the https://fullstack-nodejs.fullstack.edu.vn industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic HTTPS://VNEXPRESS.NET typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

// const pattern =
//   /(http|https):\/\/[\w\-\.]*[\w\-\.]+\.[a-z]{2,}(:\d{2,})?(\/?|\/[\w\-\/?=&+#\.]+)/gi;

// const urlList = content.match(pattern);
// console.log(urlList);

//Capturing Group -> Kỹ thuật gom nhóm để lấy 1 phần của biểu thức chính quy (Dùng cặp ngoặc tròn). Không áp dụng với global

//Non-Capturing Group -> Loại bỏ kết quả trong cặp ngoặc tròn -> ?:

// const url = `https://fullstack-nodejs.fullstack.edu.vn/tracking-khoa-hoc.html`;

// const pattern =
//   /^(?:http|https):\/\/[\w\-\.]*[\w\-\.]+\.([a-z]{2,})(?::\d{2,})?(?:\/?|\/[\w\-\/?=&+#\.]+)$/i;

// const result = url.match(pattern);
// console.log(result);

//Greedy, Lazy -> Chỉ áp dụng với dấu chấm (.)

// const html = `<img title="F8" src="https://fullstack.edu.vn/images/abc.jpg" alt="Trang chính thức F8" height="200"/>`;

// const pattern = /<img.*src="(.+?)"/;

// const result = html.match(pattern);
// console.log(result);

//Thay thế
let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the https://fullstack-nodejs.fullstack.edu.vn industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic HTTPS://VNEXPRESS.NET typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

const pattern =
  /((?:http|https):\/\/([\w\-\.]*[\w\-\.]+\.[a-z]{2,})(?::\d{2,})?(?:\/?|\/[\w\-\/?=&+#\.]+))/gi;

// content = content.replace(
//   pattern,
//   "<button>Vui lòng nạp vip để xem link</button>",
// );

//Đối sánh chuỗi: lấy giá trị mà regex khớp được đưa vào phần thay thế (Dựa vào capturing group)
/*
- Capturing 1 -> $1
- Capturing 2 -> $2
- Capturing n -> $n
*/

content = content.replace(
  pattern,
  `<a href="$1" title="Website $2" target="_blank">$1</a>`,
);

document.body.innerHTML = content;
