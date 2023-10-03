const getUser = (id) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 5000000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 6000000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 7000000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 8000000,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id: _id }) => id === _id);
      resolve(user);
    }, 1000);
  });
};

const lists = [1, 3, 4];
//Tính tổng thu nhập của 3 user có trong mảng lists
// let salary = 0;
// const getSalary = () => {
//   for (let index in lists) {
//     const promise = getUser(lists[index]).then((user) => {
//       salary += user.salary;
//       return salary;
//     });
//     if (+index === lists.length - 1) {
//       return promise;
//     }
//   }
// };

// getSalary().then((data) => {
//   console.log(data);
// });

//Promise.all() => Giải quyết các bài toán sử dụng nhiều promise cùng 1 lúc

//Tạo ra 1 mảng chứa tất cả các promise
const requests = lists.map(
  (id) =>
    new Promise((resolve) => {
      resolve(getUser(id));
    }),
);

//Đưa mảng chứa promise vào Promise.all()
Promise.all(requests).then((users) => {
  const salary = users.reduce((total, user) => total + user.salary, 0);
  console.log(salary);
});

const promise = Promise.resolve("F8");
promise.then((data) => {
  console.log(data);
});

const promise2 = Promise.reject("Error");
promise2.catch((error) => {
  console.log(error);
});
