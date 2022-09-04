$(document).ready(function () {
  $('.customer-review-list.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        nav: false,
      },
      768: {},
    },
  });
  $('.banner-list.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items : 1,
      },
      // 768: {},
    },
  });
 
  $('.service-list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
        nav: false,
      },
    },
  });
  $('.achievement-list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
        nav: false,
      },
    },
  });
  $('.course-list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    // stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $('.event-list.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items : 1,
      },
      // 768: {},
    },
  });
  $('.handbook-list.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
  $('.customer-brand-list').owlCarousel({
    items: 6,
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    stagePadding: 15,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: true,
    navText: [
      "<i class='fal fa-angle-left'></i>",
      "<i class='fal fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      425:{
        items: 2,
        margin: 15,
      },
      768: {
        items: 4,
        margin: 15,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  });
});

