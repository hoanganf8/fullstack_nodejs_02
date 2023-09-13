// var inputEl = document.querySelector(".name");
// // console.log(inputEl.defaultValue);
// var handleBeforeUnload = function (event) {
//   event.returnValue = 1;
// };

// inputEl.addEventListener("keyup", function () {
//   console.log("value:" + this.value);
//   console.log("default" + this.defaultValue);
//   if (this.value !== this.defaultValue) {
//     window.addEventListener("beforeunload", handleBeforeUnload);
//   } else {
//     window.removeEventListener("beforeunload", handleBeforeUnload);
//   }
// });

var loginForm = document.querySelector(".login-form");

var handleBeforeUnload = function (event) {
  event.returnValue = 1;
};

loginForm.addEventListener("input", function (e) {
  if (e.target.type === "checkbox" || e.target.type === "radio") {
    if (e.target.defaultChecked !== e.target.checked) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  } else {
    if (e.target.defaultValue !== e.target.value) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }
});

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.removeEventListener("beforeunload", handleBeforeUnload);
  this.submit();
});
