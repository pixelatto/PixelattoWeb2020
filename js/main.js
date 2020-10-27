const sendOwlKey = "e673fe7e8bf201f";
const sendOwlSecret = "c48f162eeeb51126494a";

const loadingScreenHTML = document.getElementById("loading-screen");

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

function submitAndRedirectToThanks() {
    document.getElementById("subscribe-form").submit();
    window.location="/thanks/";
}

bulmaCollapsible.attach('.is-collapsible');

function loginUser(e){
    var username = document.getElementById("nick").value;
    var password = document.getElementById("password").value;
    var errordiv = document.getElementById("error");

    loadingScreenHTML.hidden = false;
    AWSLogin(username,password);
}