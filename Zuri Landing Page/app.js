import categories from "./data.js";

//Navbar Responsiveness
const navToggle = document.querySelector(".navToggle");
const navContainer = document.querySelector(".nav-container");
const inputText = document.querySelectorAll(".input-wrapper .input-text");
const email = document.querySelector("#Email");
const selectItem = document.querySelectorAll(".input-text");
const registerBtn = document.querySelector("#reg");

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

const validateInPut = () => {
  let mailFormat =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  for (let index = 0; index < inputText.length; index++) {
    const inputFocus = inputText[index];
    const nextElement = inputFocus.parentElement.nextElementSibling;
    inputFocus.addEventListener("blur", () => {
      if (!inputFocus.value) {
        inputFocus.parentElement.classList.add("danger");
        nextElement.style.display = "block";
        inputFocus.nextElementSibling.style.backgroundImage = "none";

        if (inputFocus.id === "Email" && !inputFocus.value.match(mailFormat)) {
          inputFocus.nextElementSibling.style.backgroundImage =
            "url('./img/cancel.png')";
        }
      } else {
        inputFocus.parentElement.classList.remove("danger");
        nextElement.style.display = "none";
        inputFocus.nextElementSibling.style.backgroundImage =
          "url('./img/Right.png')";

        if (inputFocus.id === "Email" && inputFocus.value.match(mailFormat)) {
          inputFocus.nextElementSibling.style.backgroundImage =
            "url('./img/Right.png')";
        }
      }
    });
  }
};

const validateSelect = () => {
  selectItem.forEach((selectBox) => {
    if (selectBox.tagName === "SELECT") {
      selectBox.addEventListener("blur", () => {
        if (selectBox.selectedIndex === 0) {
          selectBox.classList.add("danger");
          selectBox.nextElementSibling.style.display = "block";
        } else {
          selectBox.classList.remove("danger");
          selectBox.nextElementSibling.style.display = "none";
        }
      });
    }
  });
};

// const isEmailValid = (mail) => {
//   let mailFormat =
//     "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
//   if (mail.value.match(mailFormat)) {
//     return true;
//   }
//   return false;
// };

validateInPut();
validateSelect();

registerBtn.addEventListener("submit", (e) => {
  e.preventDefault();
  let mailFormat =
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
  for (let index = 0; index < inputText.length; index++) {
    const inputFocus = inputText[index];
    const nextElement = inputFocus.parentElement.nextElementSibling;
    if (!inputFocus.value) {
      inputFocus.parentElement.classList.add("danger");
      nextElement.style.display = "block";
      inputFocus.nextElementSibling.style.backgroundImage = "none";

      if (inputFocus.id === "Email" && !inputFocus.value.match(mailFormat)) {
        inputFocus.nextElementSibling.style.backgroundImage =
          "url('./img/cancel.png')";
      }
      return;
    } else {
      inputFocus.parentElement.classList.remove("danger");
      nextElement.style.display = "none";
      inputFocus.nextElementSibling.style.backgroundImage =
        "url('./img/Right.png')";

      if (inputFocus.id === "Email" && inputFocus.value.match(mailFormat)) {
        inputFocus.nextElementSibling.style.backgroundImage =
          "url('./img/Right.png')";
      }
    }

    selectItem.forEach((selectBox) => {
      if (selectBox.tagName === "SELECT") {
        if (selectBox.selectedIndex === 0) {
          selectBox.classList.add("danger");
          selectBox.nextElementSibling.style.display = "block";
          return;
        } else {
          selectBox.classList.remove("danger");
          selectBox.nextElementSibling.style.display = "none";
        }
      }
    });
  }
});

//make this run only on ContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  createTracts();
  inputText.forEach((inputBox) => {
    inputBox.nextElementSibling.style.backgroundImage = "none";
  });
});
