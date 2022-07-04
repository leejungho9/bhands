function setworkMenu() {
  workMenu = true;
}

function showSidebar() {
  console.log("햄버거 버튼 클릭" + sidebar);
  sidebar = !sidebar;
  sidebar
    ? (sidebarEl.className = "nav-menu active")
    : (sidebarEl.className = "nav-menu");
}

function showworkMenu() {
  console.log("work 버튼 클릭" + workMenu);
  workMenu
    ? (workMenuEl.className = "work-menu active")
    : (workMenuEl.className = "work-menu");

  workMenu
    ? (workMenuUl.className = "work-menu-ul active")
    : (workMenuUl.className = "work-menu-ul");
  workMenu = !workMenu;
}
if (sidebar === true) {
  setworkMenu(false);
  setworkMenu();
}

/* slick js*/
sliderEl = $(".slider-wrap");

let slickOptions = {
  slide: "div",
  fade: true,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

$(window).on("load resize", function () {
  if ($(window).width() < 767) {
    sliderEl.not(".slick-initialized").slick(slickOptions);
  } else {
    sliderEl.slick("unslick");
  }
});
