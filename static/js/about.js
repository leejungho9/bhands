let detailMenuEl = document.querySelectorAll(".detialMenu");
console.log(detailMenuEl);

for (var i = 0; i < detailMenuEl.length; i++) {
  detailMenuEl[i].addEventListener("click", function () {
    console.log("클릭");
  });
}
