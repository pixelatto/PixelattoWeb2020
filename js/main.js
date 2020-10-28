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
    window.location = "/thanks/";
}

bulmaCollapsible.attach('.is-collapsible');

function loginUser(e) {
    var username = document.getElementById("nick").value;
    var password = document.getElementById("password").value;

    loadingScreenHTML.hidden = false;
    AWSLogin(username, password);
}

function registerUser(e) {
    var username = document.getElementById("nick").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var suscribed = document.getElementById("suscribed").value;
    if (username.length <3) {
        alert('Your username should have at least 3 characheres')
    }
    else if (password != password2) {
        alert('Passwords do not match');
    }
    else if (password.length < 6) {
        alert('Your password should have at least 6 characters')
    }
    else {
        AWSSignUp(username, email, password);
         window.location = "/";
    }

}