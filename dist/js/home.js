console.log("시작");let sidebar=!1,sidebarEl=document.querySelector(".nav-menu"),workMenu=!1,workMenuEl=document.querySelector(".work-menu"),workMenuUl=document.querySelector(".work-menu-ul");function setworkMenu(){workMenu=!0}function showSidebar(){console.log("햄버거 버튼 클릭"+sidebar),sidebar=!sidebar,sidebarEl.className=sidebar?"nav-menu active":"nav-menu"}function showworkMenu(){console.log("work 버튼 클릭"+workMenu),workMenu=!workMenu,workMenuEl.className=workMenu?"work-menu active":"work-menu",workMenuUl.className=workMenu?"work-menu-ul active":"work-menu-ul"}let path=window.location.pathname;console.log(path),!0===sidebar&&(setworkMenu(!1),setworkMenu());let artgoodsEl=document.querySelector(".a_artgoods"),calendarEl=document.querySelector(".a_calendar"),diaryEl=document.querySelector(".a_diary"),packageEl=document.querySelector(".a_package"),cardEl=document.querySelector(".a_card"),catalogueEl=document.querySelector(".a_catalogue");"/artgoods.html"==path?(showworkMenu(),artgoodsEl.className="detailMenu active"):"/calendar.html"==path?(showworkMenu(),calendarEl.className="detailMenu active"):"/diary.html"==path?(showworkMenu(),diaryEl.className="detailMenu active"):"/package.html"==path?(showworkMenu(),packageEl.className="detailMenu active"):"/card.html"==path?(showworkMenu(),cardEl.className="detailMenu active"):"/catalogue"==path&&(showworkMenu(),catalogueEl.className="detailMenu active");