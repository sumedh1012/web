



const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});

let slideIndex = 0;
showSlides(slideIndex);
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
function toggleList(listId) {
    var list = document.getElementById(listId);

    // If the list is already open, close it
    if (list.classList.contains('show')) {
        list.classList.remove('show');
    } else {
        // Close all other lists first
        var allLists = document.querySelectorAll('.grocery-list-items');
        allLists.forEach(function (otherList) {
            otherList.classList.remove('show');
        });

        // Show the selected list
        list.classList.add('show');
    }
}
    // Wait for the page to fully load
    window.onload = function () {
        // Add a class 'loaded' to the body tag when the page is fully loaded
        document.body.classList.add('loaded');
    };



