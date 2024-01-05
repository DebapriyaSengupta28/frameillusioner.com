// Smooth scroll to section
function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  document.querySelectorAll('#navigation-menu a').forEach(link => {
    link.addEventListener('click', scrollToSection);
  });
  
  
  
  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';