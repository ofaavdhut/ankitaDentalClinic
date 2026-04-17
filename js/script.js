// ================= HAMBURGER MENU =================
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav');

  if (hamburger && navMenu) {
    // Toggle menu
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Set active link based on current page
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const currentPage = currentLocation.split('/').pop() || 'index.html';
    
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// ================= CONTACT FORM HANDLING =================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    
    // Wait for form submission (Formspree will handle it)
    setTimeout(() => {
      // Reset button after submission
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}