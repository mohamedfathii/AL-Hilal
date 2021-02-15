window.addEventListener('load', function () {
  sliders()
})

function sliders() {
  $('#vertical').lightSlider({
    item: 3,
    loop: true,
    vertical: true,
    verticalHeight: 295,
    vThumbWidth: 50,
    thumbItem: 8,
    thumbMargin: 4,
    slideMargin: 0,
    cssEasing: 'ease',
    easing: 'linear',
    prevHtml: "<i class='fas fa-arrow-up'></i>",
    nextHtml: "<i class='fas fa-arrow-down'></i>",
  }),
    $('.clubsOwl').owlCarousel({
      stagePadding: 80,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>",
      ],
      margin: 40,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 4,
        },
        1000: {
          items: 7,
        },
      },
    }),
    $('.newsOwl').owlCarousel({
      stagePadding: 0,
      responsiveClass: true,
      nav: true,
      dots: false,
      navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>",
      ],
      margin: 20,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    })
}
