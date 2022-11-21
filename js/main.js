$(document).ready(function () {
  var facts = $('.sponser_slider');
  var gold = $('.gold_slider');
  var support = $('.supported_by');
  facts.owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    autoplayTimeout: 5000,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
  gold.owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    autoplayTimeout: 5000,
    items: 4,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      750: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
  support.owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    autoplayTimeout: 5000,
    items: 9,
    smartSpeed: 5000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      750: {
        items: 5,
      },
      900: {
        items: 7,
      },
      1400: {
        items: 8,
      },
    },
  });
});
