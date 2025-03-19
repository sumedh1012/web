let slideIndex = 0;
showSlides(slideIndex);

// Function to show slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Show the current slide and add active class to the corresponding dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Function to change slide by clicking dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Auto slideshow (optional)
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 5000); // Change slide every 5 seconds

// Add event listener to each dot
let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentSlide(i);
    });
}
