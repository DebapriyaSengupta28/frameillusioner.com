// Status window animation
// Easing function: easeOutQuart
function easeOutQuart(t) {
    return 1 - (--t) * t * t * t;
  }
  
  // Function to start count-up animation with a delay and easing
  function startCountUpAnimationWithDelay(target, endValue, delay) {
    setTimeout(() => {
      let startTime;
      const animationDuration = 4000; // Adjust the duration for a slower animation
  
      const updateValue = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / animationDuration;
  
        const easedProgress = easeOutQuart(Math.min(progress, 1));
  
        const currentValue = Math.ceil(easedProgress * endValue);
        target.textContent = currentValue;
  
        if (progress < 1) {
          requestAnimationFrame(updateValue);
        }
      };
  
      requestAnimationFrame(updateValue);
    }, delay);
  }
  
  // Function to handle intersection changes
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // If the section is in view, start count-up animations with a delay of 500 milliseconds
        startCountUpAnimationWithDelay(yearsCount, 4, 500); // Adjust the end value and delay as needed
        startCountUpAnimationWithDelay(projectsCount, 40, 500); // Adjust the end value and delay as needed
        observer.unobserve(entry.target);
      }
    });
  }
  
  // Get elements
  const yearsCount = document.querySelector('.status-section .status-box:nth-child(1) .count');
  const projectsCount = document.querySelector('.status-section .status-box:nth-child(2) .count');
  
  // Set up Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
  // Observe the status section
  const statusSection = document.querySelector('.status-section');
  observer.observe(statusSection);
  
  
  //^^ status section ^^