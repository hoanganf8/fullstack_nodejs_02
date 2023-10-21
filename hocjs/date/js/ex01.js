//Date: Object xử lý thời gian

const dateStr = "2023-10-21 09:00:00";

//Chuyển thành date object
const date = new Date(dateStr);
// console.log(date, typeof date);
console.log(date.getDay()); //0 đến 6 (0 = Chủ nhật)
console.log(date.getDate());
console.log(date.getMonth()); //Bắt đầu từ 0
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime()); //Số mili giây từ 00:00:00 ngày 1/1/1970 đến thời gian cần lấy

date.setMonth(10); //Tháng 11
console.log(date);

const handleClock = () => {
  const today = new Date();
  const clockEl = document.querySelectorAll(".clock span");
  const minus = today.getMinutes();
  const seconds = today.getSeconds();
  clockEl[0].innerText = minus;
  clockEl[1].innerText = seconds;
};

setInterval(handleClock, 1000);
