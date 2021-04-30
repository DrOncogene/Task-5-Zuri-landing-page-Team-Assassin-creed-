import categories from "./data.js";

//Navbar Responsiveness
const navToggle = document.querySelector(".navToggle");
const navContainer = document.querySelector(".nav-container");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-active");
  navContainer.classList.toggle("show-nav-container");
});

//readmore functionality
const dots = document.querySelector("#dots");
const more = document.querySelector("#more");
const readMore = document.querySelector("#readmore");

readMore.addEventListener("click", () => {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMore.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    readMore.innerHTML = "Read less";
    more.style.display = "inline";
  }
});

//get the why-us section parent Element
const whyUs = document.querySelector(".why-us");

const createTracts = () => {
  //create a div with grid-section class
  const Tracts = document.createElement("div");
  Tracts.classList.add("grid-section");
  //create a function that wil loop through our categories data and create
  const Category = categories
    .map((category) => {
      return `
    <div class="grid-items">
            <div class="img-container">
              <img src=${category.img} alt=${category.alt} />
            </div>
            <p>${category.text}</p>
          </div>
    `;
    })
    .join("");

  //then assign Category to the div 'Tracts' element created
  Tracts.innerHTML = Category;

  //append Tracts into why-us parent
  whyUs.appendChild(Tracts);

  //use js to set copyright year
  const year = document.querySelector("#copyright");
  const newYear = new Date().getFullYear();
  year.innerHTML = newYear;
};

//make this run only on ContentLoaded
window.addEventListener("DOMContentLoaded", () => createTracts());
