bulmaCarousel.attach('#product-carousel', {
    slidesToScroll: 4,
    slidesToShow: 4,
    infinite: true
});

bulmaCarousel.attach('#store-carousel', {
    slidesToScroll: 2,
    slidesToShow: 2,
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

function submitAndRedirectToThanks() {
    document.getElementById("subscribe-form").submit();
    window.location="/thanks/";
}

bulmaCollapsible.attach('.is-collapsible');