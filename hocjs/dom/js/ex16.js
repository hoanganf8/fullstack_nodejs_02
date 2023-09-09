var checkAll = document.querySelector(".check-all");
var checkItems = document.querySelectorAll(".check-item");
checkAll.addEventListener("change", function () {
  var checkStatus = this.checked;

  checkItems.forEach(function (checkItem) {
    checkItem.checked = checkStatus;
  });
});
checkItems.forEach(function (checkItem) {
  checkItem.addEventListener("change", function () {
    // var status = checkItem.checked;
    var status = Array.from(checkItems).every(function (checkbox) {
      return checkbox.checked === true;
    });
    checkAll.checked = status;
  });
});
