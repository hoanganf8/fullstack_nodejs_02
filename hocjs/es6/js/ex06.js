//Xử lý bất đồng bộ
/*
a()
b()
c()
*/

// const getA = () => {
//   console.log("getA");
// };

// const getB = () => {
//   setTimeout(() => {
//     console.log("getB");
//   }, 1000);
// };

// const getC = () => {
//   console.log("getC");
// };

// getA();
// getB();
// getC();

// alert("Hello F8");
// console.log("Học lập trình không khó");

//Ví dụ:
//Download ảnh => Khi nào ảnh download xong => Hiển thị thông báo

/*
3 cách xử lý bất đồng bộ
- Callback (ES5)
- Promise (ES6)
- Async Await Function (ES7)
*/

// const downloadImage = (callback) => {
//   setTimeout(() => {
//     console.log("Download xong");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };

// const showMessage = (type) => {
//   console.log("Download " + type);
// };

// downloadImage(() => {
//   showMessage("Thành công");
// });

//Promise
/*
Object để xử lý các tác vụ bất đồng bộ

Promise State
- pending -> Chờ xử lý
- fulfilled -> Xử lý thành công
- reject -> Xử lý thất bại
*/

const downloadImage = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        url: "https://fullstack.edu.vn",
        size: 30,
      };
      //Chỉ tồn tại resolve hoặc reject
      //Nếu resolve được gọi trước -> Không chạy reject nữa và ngược lại
      //   reject("Lỗi mạng");
      resolve(data);
    }, 2000);
  });

  return promise;
};

downloadImage()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Đã xong");
  });

//Promise Hell
//Promise Chaining
//Promise.all()
