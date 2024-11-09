// Mobile Navbar Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// about section

// Smooth scrolling functionality (if not already included)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// services carousel

let currentIndex = 0;

function showSlide(index) {
   const slides = document.querySelectorAll('.carousel-item');
   const totalSlides = slides.length;

   // Loop back to the first slide if at the end
   if (index >= totalSlides) {
       currentIndex = 0;
   } else if (index < 0) {
       currentIndex = totalSlides - 1;
   } else {
       currentIndex = index;
   }

   // Calculate the offset for the carousel
   const offset = -currentIndex * 100; // Move left by current index * width of card
   document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

// Change slide function for manual navigation
function changeSlide(direction) {
   showSlide(currentIndex + direction);
}

// Automatic slide change every few seconds
setInterval(() => {
   showSlide(currentIndex + 1);
}, 4000); // Change slide every 4 seconds