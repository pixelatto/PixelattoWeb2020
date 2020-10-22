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

function testAjax() {
    $.ajax({
        url: "/api/",
        type: "GET",
        crossDomain: true,
        dataType: "json",
        headers: {
            "accept": "application/json",
            "Authorization": "Basic ZTY3M2ZlN2U4YmYyMDFmOmM0OGYxNjJlZWViNTExMjY0OTRh"
        },
        success: function (response) {
            console.log(response);
        },
        error: function (xhr, status) {
            console.error("error");
        }
    });
};