


// JavaScript to toggle the navbar on mobile view
const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
 // Simulate page loading
 window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.querySelector('.main-content');

    // Hide the loading screen and show the main content after a delay
    setTimeout(() => {
      loadingScreen.style.opacity = '0'; // Fade out loading screen
      loadingScreen.style.transition = 'opacity 0.3s ease-in-out';
      
      // Remove loading screen after fade-out
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
        mainContent.classList.add('fade-in'); // Fade in main content
      }, 500);
    }, 2500); // Adjust delay to match animation duration
  });

  // script.js
// Smooth scrolling for anchor links 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
