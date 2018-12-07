var slideIndex = 0;

function showSlides() {12
    const images = document.querySelectorAll('.image-slider-image');
    const dots = document.querySelectorAll('.image-slider-dot');

    for (let index = 0; index < images.length; index++) {
        images[index].style.display = "none";
        dots[index].style.backgroundColor = "#eee";
    }

    slideIndex++;

    if (slideIndex > images.length) {slideIndex = 1}

    images[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor = "black";
}

showSlides()
setInterval(showSlides, 5000);
