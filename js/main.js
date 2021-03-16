const loadingScreenHTML = document.getElementById("loading-screen");

function submitAndRedirectToThanks() {
    const sectionForm = document.getElementById("subscribe-form");
    if (sectionForm.checkValidity()) {
        sectionForm.submit();
        window.location = "/thanks/";
    }
}

function footerSubmitAndRedirectToThanks() {
    const footerForm = document.getElementById("footer-subscribe-form");
    if (footerForm.checkValidity()) {
        footerForm.submit();
        window.location = "/thanks/";
    }
}

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

// function fadeIn(el) {
//     var opacity = 0.01;
//     document.querySelector(el).style.display = "flex";
// 	var timer = setInterval(function() {
// 		if(opacity >= 1) {
// 			clearInterval(timer);
// 		}
// 		document.querySelector(el).style.opacity = opacity;
// 		opacity += opacity * 0.1;
// 	}, 10);
// }

const links = document.querySelectorAll(".hero-inner .scroll-btn");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


const toggleButton = document.querySelector('.toggle-button');
const toggleContent = document.querySelector('.hidden-cards');
const toggleArrow = document.querySelector('.toggle-arrow');

toggleButton.addEventListener('click', () => {
  if (toggleContent.classList.contains('cards--active')) {
    toggleContent.classList.remove('cards--active');
    toggleContent.style.maxHeight = 0;
    //setTimeout(() => toggleButton.textContent = 'Show More', 300);
    toggleButton.textContent='Show More';
    toggleArrow.classList.remove('arrow-up');
  } else {
    toggleContent.classList.add('cards--active');
    toggleContent.style.maxHeight = toggleContent.scrollHeight + 'px';
    ///setTimeout(() => toggleButton.textContent = 'Show Less', 300);
    toggleButton.textContent = 'Show Less';
    toggleArrow.classList.add('arrow-up');
  }

  //toggleContent.classList.toggle('cards--active');
});
