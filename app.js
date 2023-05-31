const toggleMenu = document.querySelector('#toggle-menu');
const mainMenu = document.querySelector('.main-menu');
const hamburger = document.querySelector('.hamburger');

toggleMenu.addEventListener('click', () => {
  if (toggleMenu.checked) {
    mainMenu.classList.remove('translate-x-[-400px]');
    hamburger.classList.add('active');
  } else {
    mainMenu.classList.add('translate-x-[-400px]');
    hamburger.classList.remove('active');
  }
});


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.nextElementSibling;

  dropdown.addEventListener('click', function() {
    
    dropdowns.forEach((otherDropdown) => {
      if (otherDropdown !== dropdown) {
        otherDropdown.classList.remove('active');
        otherDropdown.nextElementSibling.classList.add('hidden');
      }
    });

    dropdown.classList.toggle('active');
    dropdownContent.classList.toggle('hidden');
  });

  dropdown.addEventListener('dblclick', function() {
    dropdown.classList.remove('active');
    dropdownContent.classList.add('hidden');
  });

  dropdown.parentElement.style.position = 'relative'; // add relative positioning to the parent element
  dropdownContent.style.position = 'absolute'; // add absolute positioning to the dropdown content element
});
































const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

if (slides.length > 0 && prevButton && nextButton) {
  // Show the first slide
  slides[currentIndex].style.display = "block";

  // Click event listener for previous button
  prevButton.addEventListener("click", () => {
    slides[currentIndex].style.display = "none";
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    slides[currentIndex].style.display = "block";
  });

  // Click event listener for next button
  nextButton.addEventListener("click", () => {
    slides[currentIndex].style.display = "none";
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    slides[currentIndex].style.display = "block";
  });
}