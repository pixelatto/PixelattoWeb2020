bulmaCarousel.attach('#product-carousel', {
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true
});

bulmaCarousel.attach('#presskit-carousel', {
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: true
});

bulmaCarousel.attach('#testimonials-carousel', {
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true
});

if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
    bulmaCarousel.attach('#fans-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    bulmaCarousel.attach('#helpus-products-carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
} else {
    bulmaCarousel.attach('#fans-carousel', {
        slidesToScroll: 4,
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
}
bulmaCollapsible.attach('.is-collapsible');