// Function to add animation class to the About section
function animateAboutSection() {
  var aboutSection = document.querySelector('.about-section');
  aboutSection.classList.add('animate');
}

// Trigger the animation when the page loads
window.addEventListener('load', animateAboutSection);

// Navigation menu function
function toggleNavigation(x) {
  x.classList.toggle("change");
  document.getElementById("navigation-menu").classList.toggle("open");

  // Remove the conditional check for larger screens
  if (document.getElementById("navigation-menu").classList.contains("open")) {
    document.addEventListener("click", closeMenu);
  } else {
    document.removeEventListener("click", closeMenu);
  }
}

function closeMenu(event) {
  if (!event.target.closest("#navigation-container")) {
    document.getElementById("navigation-container").classList.remove("change");
    document.getElementById("navigation-menu").classList.remove("open");
    document.removeEventListener("click", closeMenu);
  }
}

// logo image refresh
document.addEventListener('DOMContentLoaded', function() {
  var logoElements = document.getElementsByClassName('logo');
  for (var i = 0; i < logoElements.length; i++) {
      logoElements[i].addEventListener('click', function() {
          window.location.href = window.location.href; // Force a full page reload
      });
  }
});

//team function
window.onload = function() {
  document.getElementById('overlay').style.display = 'none';

  // Team function
  document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
      document.getElementById('overlay').style.display = 'flex';
      document.getElementById('modal-img').src = this.querySelector('.team-img').src;
      document.getElementById('modal-description').textContent = this.querySelector('.description').textContent;
    });
  });

  document.getElementById('overlay').addEventListener('click', function() {
    this.style.display = 'none';
  });
}

// contact gmail
function openGmailCompose() {
  var email = "production@frameillusioner.com"; // Replace with the actual Gmail address
  var subject = "Your Subject Here";
  var body = "Your email body here.";

  var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(email) +
            "&su=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

  // Open the Gmail compose window in a new tab
  window.open(url, "_blank");
}

