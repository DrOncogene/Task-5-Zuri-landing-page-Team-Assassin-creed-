import categories from "./data.js";

//Navbar Responsiveness
const navToggle = document.querySelector(".navToggle");
const navContainer = document.querySelector(".nav-container");

//get the why-us section parent Element
const whyUs = document.querySelector(".why-us");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-active");
  navContainer.classList.toggle("show-nav-container");
});

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
};

//make this run only on ContentLoaded
window.addEventListener("DOMContentLoaded", () => createTracts());
