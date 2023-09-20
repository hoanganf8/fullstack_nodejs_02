//Định nghĩa các event cho các element
var inputRangeList = document.querySelectorAll('input[type="range"]');

// var overEvent = new Event("over");
var overEvent = new CustomEvent("over", {
  detail: "F8",
});

if (inputRangeList.length) {
  inputRangeList.forEach(function (input) {
    input.addEventListener("mousemove", function (e) {
      var offsetX = e.offsetX;
      var value = (offsetX * 100) / input.clientWidth;
      value = value.toFixed(2);
      this.data = value;
      overEvent.offsetX = offsetX;
      overEvent.clientX = e.clientX;
      input.dispatchEvent(overEvent);
    });
  });
}
