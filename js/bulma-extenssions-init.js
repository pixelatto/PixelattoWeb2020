bulmaCarousel.attach('#product-carousel', {
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: true,
    breakpoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 768, slidesToShow: 2, slidesToScroll: 2 }
    ]
});

bulmaCarousel.attach('#presskit-carousel', {
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: true
});

bulmaCarousel.attach('#team-carousel', {
    slidesToScroll: 3,
    slidesToShow: 3,
    infinite: true,
    breakpoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 1024, slidesToShow: 2, slidesToScroll: 2 }
    ]
});

bulmaCarousel.attach('#testimonials-carousel', {
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true
});

bulmaCarousel.attach('#blog-carousel', {
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    breakpoints: [
        { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
        { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }
    ]
});

bulmaCollapsible.attach('.is-collapsible');
