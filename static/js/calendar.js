let sliderMenu = false;
let sliderMenuEl = document.querySelector(".sliderArea-hidden");

let closeBtn = false;
let closeBtnEl = document.querySelector(".sliderCloseBtn-hidden");

let topMenu = true;
let topMenuEl = document.querySelector(".topMenu");

function changeSlider() {
  sliderMenu = !sliderMenu;
  sliderMenu
    ? (sliderMenuEl.className = "sliderArea")
    : (sliderMenuEl.className = "sliderArea-hidden");
}

function changecloseBtn() {
  closeBtn = !closeBtn;
  closeBtn
    ? closeBtnEl.classList.replace("sliderCloseBtn-hidden", "sliderCloseBtn")
    : closeBtnEl.classList.replace("sliderCloseBtn", "sliderCloseBtn-hidden");
}
function changetopMenu() {
  topMenu = !topMenu;
  topMenu
    ? (topMenuEl.className = "topMenu")
    : (topMenuEl.className = "topMenu-hidden");
}

function showSlider() {
  console.log("슬라이드 보여지기" + sliderMenu + closeBtn);
  changeSlider();
  changecloseBtn();
  changetopMenu();
}

function closeSlider() {
  console.log("슬라이드 닫기");
  changecloseBtn();
  changeSlider();
  changetopMenu();
}
