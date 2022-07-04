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
