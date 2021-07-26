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

// Wrapper for hidden testimonials [https://jsbin.com/fabenotino/edit?html,js,output]
const wrapAll = (nodes, wrapper) => {
  // Cache the current parent and previous sibling of the first node.
  const parent = nodes[0].parentNode;
  const previousSibling = nodes[0].previousSibling;
  // Place each node in wrapper.
  for (let i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
    wrapper.appendChild(nodes[i]);
  }
  // Place the wrapper just after the cached previousSibling
  parent.insertBefore(wrapper, previousSibling.nextSibling);
  return wrapper;
};

const isPresentOnPage = document.querySelector('.tile-hidden');
if (isPresentOnPage) {
  const feedbacks = document.querySelectorAll('.tile-hidden');
  const feedWrapper = document.createElement('div');
  feedWrapper.classList.add('hidden-cards');
  wrapAll(feedbacks, feedWrapper);
}

// Show more/less testimonials
const toggleButton = document.querySelector('.toggle-button');
const toggleContent = document.querySelector('.hidden-cards');
const toggleArrow = document.querySelector('.toggle-arrow');

if (toggleButton && toggleContent) {
  toggleButton.addEventListener('click', () => {
    if (toggleContent.classList.contains('cards--active')) {
      toggleContent.classList.remove('cards--active');
      toggleContent.style.maxHeight = 0;
      toggleButton.textContent='Show More';
      toggleArrow.classList.remove('arrow-up');
    } else {
      toggleContent.classList.add('cards--active');
      toggleContent.style.maxHeight = toggleContent.scrollHeight + 'px';
      toggleButton.textContent = 'Show Less';
      toggleArrow.classList.add('arrow-up');
    }
  });
}

// Hover for product card
const toggleLinks = document.querySelectorAll('.link--abs');

for (const link of toggleLinks) {
  const targetElem = link.parentElement.querySelector(".is-scaled");
  link.addEventListener("mouseenter", () => {
    targetElem.classList.add("active-scale");
  });
  link.addEventListener("mouseleave", () => {
    targetElem.classList.remove("active-scale");
  });
}


// Custom play button
const videoPoster = document.querySelector(".js-videoPoster");

if (videoPoster) {
  videoPoster.addEventListener("click", (event) => {
    event.preventDefault();
    const wrapper = document.querySelector(".js-videoWrapper");
    videoPlay(wrapper);
  });

  const videoPlay = (wrapper) => {
    const iframe = wrapper.querySelector(".js-videoIframe");
    const src = iframe.dataset.src;
    wrapper.classList.add("videoWrapperActive");
    iframe.setAttribute("src", src);
  };
}
