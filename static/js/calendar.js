let sliderMenu = false;
let sliderMenuEl = document.querySelector(".sliderArea-hidden");

let closeBtn = false;
let closeBtnEl = document.querySelector(".sliderCloseBtn-hidden");

let topMenu = true;
let topMenuEl = document.querySelector(".topMenu");

let backgroundEl = document.querySelector(".background-hidden");

function showSlider(num) {
  console.log("슬라이드 보여지기" + sliderMenu + closeBtn);
  console.log(num);
  changeSlider(num);
}
let selects = [];

function changeSlider(num) {
  selects.push(num);

  let sliderAreaEl = document.querySelector(`.sliderArea${num}`);
  backgroundEl.className = "background";
  closeBtnEl.classList.replace("sliderCloseBtn-hidden", "sliderCloseBtn");
  topMenuEl.className = "topMenu-hidden";

  if (selects.length !== 1) {
    if (selects[selects.length - 2] === selects[selects.length - 1]) {
      /* 클릭한 캘린더 또 클릭했을 떄*/
      console.log("마지막 배열과 앞이 같음");

      sliderAreaEl.classList.add("sliderArea-hidden");
      backgroundEl.className = "background-hidden";
      closeBtnEl.classList.replace("sliderCloseBtn", "sliderCloseBtn-hidden");
      topMenuEl.className = "topMenu";

      selects = [];
    } else if (selects[selects.length - 2] !== selects[selects.length - 1]) {
      /* 클릭한 캘린더가 아닌 다른 캘린더 클릭했을 떄*/
      console.log("다름");

      lastFront = selects[selects.length - 2];
      last = selects[selects.length - 1];

      sliderAreaEl = document.querySelector(`.sliderArea${lastFront}`);
      sliderAreaEl.classList.add("sliderArea-hidden");
      topMenuEl.className = "topMenu-hidden";

      let sliderAreaEl2 = document.querySelector(`.sliderArea${last}`);
      sliderAreaEl2.className = `sliderArea${last}`;

      closeBtnEl.classList.replace("sliderCloseBtn-hidden", "sliderCloseBtn");
    }
  } else {
    sliderAreaEl.className = `sliderArea${num}`;
  }
}

function closeSlider() {
  console.log("슬라이드 닫기");

  let sliderAreaEl = document.querySelector(
    `.sliderArea${selects[selects.length - 1]}`
  );
  sliderAreaEl.classList.add("sliderArea-hidden");
  backgroundEl.className = "background-hidden";
  closeBtnEl.classList.replace("sliderCloseBtn", "sliderCloseBtn-hidden");
  topMenuEl.className = "topMenu";
  selects = [];
}

$(".year_menu").each(function () {
  $(this).click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  });
});

/* slick js*/
$(function () {
  $(".slick-slider").slick({
    slide: "div",
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  });
});
