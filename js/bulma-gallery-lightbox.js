function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function ClickOpenedModal(e){
  var clickedElement = e.target;
  if(clickedElement.tagName != "IMG" && clickedElement.tagName != "A")
    closeModal();
}

document.onkeydown = function(e) {
  switch(e.key) {
    case "Escape":
      closeModal();
    break;
    
    case "Left":
    case "ArrowLeft":
      plusSlides(-1);
    break;

    case "Right":
    case "ArrowRight":
      plusSlides(1);
    break;

    default: return; // exit this handler for other keys
  }
  e.preventDefault();
}