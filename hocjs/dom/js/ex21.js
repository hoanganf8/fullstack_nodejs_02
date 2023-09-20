var header = document.querySelector(".header");
var nav = document.querySelector("nav");

var h1Height = header.children[0].clientHeight;
var navHeight = nav.clientHeight;

var paddingHeader = window
  .getComputedStyle(header)
  .getPropertyValue("padding-bottom");

paddingHeader = parseInt(paddingHeader);

window.addEventListener("scroll", function () {
  var y = this.scrollY;
  if (y >= h1Height + paddingHeader) {
    nav.classList.add("fixed");
    document.body.style.paddingTop = `${navHeight}px`;
  } else {
    nav.classList.remove("fixed");
    document.body.style.paddingTop = 0;
  }
});

var navItems = nav.children;
Array.from(navItems).forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    var hash = this.getAttribute("href");

    var section = document.querySelector(hash);

    if (section) {
      var offsetTop = section.offsetTop;
      window.scroll(0, offsetTop - navHeight - paddingHeader);
    }
  });
});
