/*
Try catch => Xử lý các lỗi ngoại lệ

Block Try: Chứa đoạn code muốn bắt lỗi

Block Catch: Chứa thông tin lỗi

Block finally: Chạy cuối cùng

Try có lỗi => Catch sẽ hoạt động
*/
console.log("Hello F8");
let a = 10;
try {
  //getA(); // -> Gặp lỗi => Chuyển xuống catch
  //console.log(a);
  if (a < 20) {
    //Hiển thị thông báo lỗi
    throw new Error("Biến a phải từ 20 trở lên");
  }
} catch (exception) {
  console.log(exception.message);
} finally {
  //   console.log("Hoàn thành");
}
// console.log("Hoàng An");

//Async Await
/*
Async Function luôn trả về 1 promise
*/
const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hoàng An");
      //   reject("Lỗi mạng");
    }, 1000);
  });
};

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sản phẩm");
    }, 1000);
  });
};

// const showUser = async () => {
//   try {
//     const user = await getUser();
//     console.log(user);
//     const products = await getProducts();
//     console.log(products);
//   } catch (e) {
//     console.log(e);
//   }
// };

// showUser();

//IIFE
(async () => {
  try {
    const user = await getUser();
    console.log(user);
    const products = await getProducts();
    console.log(products);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("Hoàn thành việc lấy dữ liệu");
  }
})();

/*
Buổi sau: API

- API là gì?
- Web API: Chuẩn RESTFul API
+ Cấu trúc của 1 url API
+ Các HTTP Method, ý nghĩa từng cái
+ Thế nào gọi là Endpoint?
+ Quy tắc về đặt status code: 200, 201, 404,...

...

Các cách gọi API từ Client (Sử dụng Javascript)
- XMLHttpRequest
- fetch() => Trả về 1 promise
- Thư viện hỗ trợ: axois, node-fetch,...

Thực hành các thao tác: CRUD
- C = Create
- R = Read
- U = Update
- D = Delete

Authentication => Xác thực
Authorization => Phân quyền
*/
