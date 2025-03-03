const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("#sidebar").classList.toggle("expand");
});

// #main
// Get the menu items and content containers
const homeLink = document.getElementById('home-link');
const homeContent = document.getElementById('home-content');

const coursesLink = document.getElementById('courses-link');
const coursesContent = document.getElementById('courses-content');

const lecturersLink = document.getElementById('lecturers-link');
const lecturersContent = document.getElementById('lecturers-content');

const studentsLink = document.getElementById('students-link');
const studentsContent = document.getElementById('students-content');


// Add event listeners to menu items
homeLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide all content containers
  document.querySelectorAll('#main > div').forEach((container) => {
    container.style.display = 'none';
  });
  // Show the home content container
  homeContent.style.display = 'block';
});

coursesLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide all content containers
  document.querySelectorAll('#main > div').forEach((container) => {
    container.style.display = 'none';
  });
  // Show the courses content container
  coursesContent.style.display = 'block';
});

lecturersLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide all content containers
  document.querySelectorAll('#main > div').forEach((container) => {
    container.style.display = 'none';
  })
  // Show the  lecturers content container
  lecturersContent.style.display = 'block';
});

studentsLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Hide all content containers
  document.querySelectorAll('#main > div').forEach((container) => {
    container.style.display = 'none';
  })
  // Show the students content container
  studentsContent.style.display = 'block';
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