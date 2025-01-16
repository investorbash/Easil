const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

// #main

// Get the menu items and content containers
const homeLink = document.getElementById('home-link');
const homeContent = document.getElementById('home-content');

const assessmentsLink = document.getElementById('assessments-link');
const assessmentsContent = document.getElementById('assessments-content');

const resultsLink = document.getElementById('results-link');
const resultsContent = document.getElementById('results-content');

// Add event listeners to menu items
homeLink.addEventListener('click', () => {
    // Hide all content containers
    document.querySelectorAll('#main > div').forEach((container) => {
        container.style.display = 'none';
    });
    // Show the home content container
    homeContent.style.display = 'block';
});

assessmentsLink.addEventListener('click', () => {
    // Hide all content containers
    document.querySelectorAll('#main > div').forEach((container) => {
        container.style.display = 'none';
    });
    // Show the assessments content container
    assessmentsContent.style.display = 'block';
});

resultsLink.addEventListener('click', () => {
  // Hide all content containers
  document.querySelectorAll('#main > div').forEach((container) => {
    container.style.display = 'none';
  })
  // Show the results content container
  resultsContent.style.display = 'block';
});


document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u' || event.key === 'U') {
    event.preventDefault(); // Prevent the default action
    alert('Access Denied!!!');
  }
  if (event.key === 'F12') {
    event.preventDefault(); // Prevent the default action
    alert('Access Denied!!!');
  }
});

if (window.innerWidth < 576) {
  // document.body.innerHTML = '<h1>This website is not available on mobile devices.</h1>';
  // document.body.style.display = 'none';
  alert('This website is not available on mobile devices.');
}