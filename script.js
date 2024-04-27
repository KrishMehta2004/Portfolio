// add class navbarDark on navbar scroll
// Function to check if an element is in the viewport
// Function to handle scroll event

function handleScroll() {
  console.log("Scroll event triggered.");
  var imageContainer = document.querySelector('.image-container');
  if (isInViewport(imageContainer)) {
    console.log("Image is in viewport.");
    imageContainer.classList.add('appear');
    // Remove the event listener to avoid unnecessary checks
    window.removeEventListener('scroll', handleScroll);
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
document.addEventListener("DOMContentLoaded", function() {
  var images = ['images/space_1.jpg', 'images/space_2.jpg', 'images/space_3.jpg', 'images/space_4.jpg', 'images/space_5.jpg']; // Add your image URLs here
  var currentIndex = 0;
  var bgimageElement = document.getElementById('home'); // Get the element by its ID

  function changeBackground() {
      bgimageElement.style.backgroundImage = "url('" + images[currentIndex] + "')";
      currentIndex = (currentIndex + 1) % images.length; // Loop through the images
  }

  setInterval(changeBackground, 5000); // Change background every 5 seconds
});