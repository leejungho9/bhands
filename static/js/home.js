/*header js*/

console.log("시작");
let sidebar = false;
let sidebarEl = document.querySelector(".nav-menu");

let workMenu = false;
let workMenuEl = document.querySelector(".work-menu");
let workMenuUl = document.querySelector(".work-menu-ul");

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
  workMenu = !workMenu;
  workMenu
    ? (workMenuEl.className = "work-menu active")
    : (workMenuEl.className = "work-menu");

  workMenu
    ? (workMenuUl.className = "work-menu-ul active")
    : (workMenuUl.className = "work-menu-ul");
}

let path = window.location.pathname;
console.log(path);
if (sidebar === true) {
  setworkMenu(false);
  setworkMenu();
}

let artgoodsEl = document.querySelector(".a_artgoods");
let calendarEl = document.querySelector(".a_calendar");
let diaryEl = document.querySelector(".a_diary");
let packageEl = document.querySelector(".a_package");
let cardEl = document.querySelector(".a_card");
let catalogueEl = document.querySelector(".a_catalogue");

if (path == "/artgoods.html") {
  showworkMenu();
  artgoodsEl.className = "detailMenu active";
} else if (path == "/calendar.html") {
  showworkMenu();
  calendarEl.className = "detailMenu active";
} else if (path == "/diary.html") {
  showworkMenu();
  diaryEl.className = "detailMenu active";
} else if (path == "/package.html") {
  showworkMenu();
  packageEl.className = "detailMenu active";
} else if (path == "/card.html") {
  showworkMenu();
  cardEl.className = "detailMenu active";
} else if (path == "/catalogue") {
  showworkMenu();
  catalogueEl.className = "detailMenu active";
}
