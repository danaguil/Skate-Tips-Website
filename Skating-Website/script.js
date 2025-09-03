
// Array of image URLs
const images = ["Media/1.png", "Media/2.png", "Media/3.png", "Media/4.png"];

// Initialize current image index
let currentIndex = 0;

// Function to rotate images with fade effect
function rotateImages() {
    
    const headerImages = document.querySelectorAll('.header-img');
    const imageDescriptions = document.querySelectorAll('.description');


    // Fade out the current image
    headerImages[currentIndex].classList.remove('show'); // Remove the 'show' class
    // Update image description
    imageDescriptions.forEach((description, index) => {
    
      if (index - 1 === currentIndex) {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    });

    // Show the next image with fade-in effect
    currentIndex = (currentIndex + 1) % images.length;
    headerImages[currentIndex].classList.add('show'); // Add the 'show' class to the next image
}

// Initially show the first image
document.querySelector('.header-img').classList.add('show');

// Set interval to rotate images every 5 seconds
setInterval(rotateImages, 8000);
