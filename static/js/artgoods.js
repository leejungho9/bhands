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
let path = window.location.pathname;
console.log(path);

let artgoodsEl = document.querySelector(".a_artgoods");
let calendarEl = document.querySelector(".a_calendar");
let diaryEl = document.querySelector(".a_diary");
let packageEl = document.querySelector(".a_package");
let cardEl = document.querySelector(".a_card");
let catalogueEl = document.querySelector(".a_catalogue");

if (path == "/html/artgoods.html") {
  workMenu = true;
  artgoodsEl.className = "detailMenu active";
} else if (path == "/calendar.html") {
  calendarEl.className = "detailMenu active";
  setworkMenu();
} else if (path == "/diary") {
  diaryEl.className = "detailMenu active";
  setworkMenu();
} else if (path == "/package") {
  packageEl.className = "detailMenu active";
  setworkMenu();
} else if (path == "/card") {
  cardEl.className = "detailMenu active";
  setworkMenu();
} else if (path == "/catalogue") {
  catalogueEl.className = "detailMenu active";
  setworkMenu();
}
