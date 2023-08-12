var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getName: function () {
    // return user.name;
    console.log(this);
    return this.name;
  },
  jobs: {
    name: "Giảng viên",
    salary: 5000000,
    histories: [
      {
        year: 2020,
        name: "Công việc 1",
      },
      {
        year: 2021,
        name: "Công việc 2",
      },
      {
        year: 2022,
        name: "Công việc 3",
      },
    ],
  },
};

console.log(user.getName());
console.log(user.jobs.name);
console.log(user.jobs.histories[0].name);

//Kiểm tra 1 biến có phải object không?

Object.isObject = function (variable) {
  return (
    typeof variable === "object" &&
    !Array.isArray(variable) &&
    variable !== null
  );
};

var a = [];

// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("Đây là object");
// } else {
//   console.log("Đây không phải object");
// }

if (Object.isObject(a)) {
  console.log("Đây là object");
} else {
  console.log("Đây không phải object");
}

//Function Constructor, Prototype, Combine Object, Xử lý tham chiếu
//Toán tử: Optional Chaining (?.)
//Thực hành: Viết lại hàm map trong Array
