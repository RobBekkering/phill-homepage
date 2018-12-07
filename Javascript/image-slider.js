var slideIndex = 0;
showSlides();

function showSlides() {
    var index;
    var slides = document.querySelectorAll('.image-slider-image');
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    console.log('switched')
}

setInterval(showSlides, 2000);
