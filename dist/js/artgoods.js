function setworkMenu(){workMenu=!0}function showSidebar(){console.log("햄버거 버튼 클릭"+sidebar),sidebar=!sidebar,sidebar?sidebarEl.className="nav-menu active":sidebarEl.className="nav-menu"}function showworkMenu(){console.log("work 버튼 클릭"+workMenu),workMenu?workMenuEl.className="work-menu active":workMenuEl.className="work-menu",workMenu?workMenuUl.className="work-menu-ul active":workMenuUl.className="work-menu-ul",workMenu=!workMenu}!0===sidebar&&(setworkMenu(!1),setworkMenu()),sliderEl=$(".slider-wrap");let slickOptions={slide:"div",fade:!0,dots:!0,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};$(window).on("load resize",(function(){$(window).width()<767?sliderEl.not(".slick-initialized").slick(slickOptions):sliderEl.slick("unslick")}));