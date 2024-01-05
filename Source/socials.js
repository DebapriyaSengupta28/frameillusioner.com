  // Social Tabs
  var timer;
  var socialTab = document.querySelector('.social-tab');

  function showSocialTab() {
    clearTimeout(timer);
    socialTab.classList.add('show');

    timer = setTimeout(function() {
      socialTab.classList.remove('show');
    }, 2000);
  }

  function checkScreenWidth() {
    if (window.innerWidth > 768) { // Adjust the breakpoint as needed
      showSocialTab();
    }
  }

  window.addEventListener('mousemove', function() {
    checkScreenWidth();
  });

  window.addEventListener('resize', function() {
    checkScreenWidth();
  });

  // Initial check on page load
  checkScreenWidth();
