// Hamburger toggle control
function hamburgerControl() {
  // Gather elements by id attributes and assign variables
  let myTopNav = document.getElementById("myTopNav");
  let aboutSection = document.getElementById("aboutSection");
  let waiter = document.getElementById("waiter");

  // This decision displays on and off the nav items in mobile, the class "navControl" is dynamically inserted into the html's element to accomplish this control myTopNav.className stores the elements class name that toggles between "nav" or "nav navControl" when the hamburger icon is clicked.
  if (myTopNav.className === "nav") {
    myTopNav.className += " navControl"; // myTopNav.className changes class to "nav navControl" this removes nav links when the hamburger icon is clicked see main.css
  } else {
    myTopNav.className = "nav"; // myTopNav.className changes class back to "nav" this displays nav links when the hamburger icon is clicked see main.css
  }

  // This decision controls the margin top of the about section in mobile, the class "aboutSectionControl" is dynamically inserted into html's element to accomplish this control aboutSection.className stores the elements class name that could be "about-section-top" or "about-section-top aboutSectionControl" when the hamburger icon is clicked..
  if (aboutSection.className === "about-section-top") {
    aboutSection.className += " aboutSectionControl"; // aboutSection.className changes class to "about-section-top aboutSectionControl" this affects the about section margin-top when the hamburger icon is clicked see main.css
  } else {
    aboutSection.className = "about-section-top"; // aboutSection.className changes class back to "about-section-top" affects margin-top when the hamburger icon is clicked see main.css
  }

  /* This decision displays on and off the waiter logo in mobile, the class "waiterControl" is dynamically inserted into html's element to accomplish this control waiter.className stores the elements class name that could be "waiter" or "waiter waiterControl" when the hamburger icon is clicked.*/
  if (waiter.className === "waiter") {
    waiter.className += " waiterControl"; // waiter.className changes class to "waiter waiterControl" this removes the waiter icon when the hamburger icon is clicked see main.css
  } else {
    waiter.className = "waiter"; // waiter.className changes class back to "waiter" this displays the waiter icon when the hamburger icon is clicked see main.css
  }
}
// Event listeners and Selectors
const menu = document.getElementById("menu");
const button = document.getElementById("getMenu");
button.addEventListener("click", getMenu);

// Get menu from JSON file and insert into the web page
function getMenu() {
  fetch("food.json")
    .then((res) => res.json())
    .then((data) => {
      let items = "";
      // let itemsPic = "";
      data.forEach((user) => {
        if (user.foodPrice === "5.50") {
          const newPrice = 5.5 - 5.5 * 0.2; // 20% off store offer
          items += `

              <h4><img class="img-fluid food-photo img-thumbnail" src="${
                user.photo
              }" alt="${user.foodName}"> ${user.foodHeader}</h4> 
              <p class="text-grey ml-3">${user.foodName} <strong><s>${
            user.foodPrice
          }</s></strong> <strong style = 'color:#1414b0;'>${newPrice.toFixed(2)}
              </strong></p><hr>  
              
              `;
        } else {
          items += `

                    <h4><img class=" img-fluid food-photo img-thumbnail" src="${user.photo}" alt="${user.foodName}"> ${user.foodHeader}</h4>
                    <p class="text-grey ml-3">${user.foodName} <strong>${user.foodPrice}</strong></p><hr>
                    
                    `;
        }
      });

      document.querySelector("main").innerHTML = items;

      button.textContent = "Antonios Cafe Goooood Eating";
    });
}

// JavaScript for store offer
// Declare variables, today stores todays date.
let weekFromToday, day, date, month, year, monthNames, dayNames;
let storeOffer = "";
// creates a new date object with the current date and time:
let today = new Date();

// Create arrays to hold the names of months and days
monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Add 7 days time (added in milliseconds) for the store offer:
// minutes = 60 * 1000
// hours = minutes * 60
// days = hours * 24
// weekFromToday = using getTime() method produces the store offer period 7 days time (added in milliseconds) today.getime() returns today's date + 7 days.
weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

// Collect the parts of the date to show on the page

//  The getDay() method returns the day of the week (from 0 to 6) for the specified date. Note: Sunday is 0, Monday is 1, and so on.
day = dayNames[weekFromToday.getDay()];

//  The getDate() method returns the day of the month (from 1 to 31) for the specified date.
date = weekFromToday.getDate();

// The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time. Note: January is 0, February is 1, and so on.
month = monthNames[weekFromToday.getMonth()];

// The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date. For example 2021
year = weekFromToday.getFullYear();

// Create the message with the parts of the date to show on the page using template literal
storeOffer = `<h4><span style = 'color: #1414b0; font: italic bold 1.5rem "Raleway", Sans-Serif; letter-spacing: .1rem;'>20%</span> Off Bread Basket Items - Offer Expires Next:</h4>
  <p class= "text-blue" style = 'letter-spacing: .1rem; font-weight: bold;'>(${day} ${month} ${date}, ${year} in 7 days!)</p>`;

//The insertAdjacentHTML() method inserts the above text as HTML, into a specified position that being 'beforebegin' - This inserts the storeoffer text before the main element.

document.querySelector("main").insertAdjacentHTML("beforebegin", storeOffer);

// Automatic Continuous Slideshow function
// Declare variables and set initial values to zero and call functions
let myIndexA = 0;
let myIndexB = 0;
let myIndexC = 0;
carouselA();
carouselB();
carouselC();

function carouselA() {
  // This class selection represents an HTMLCollection of array-like objects called mySlides equaling four index items 0-3 four images, this is assigned to mySlidesA
  const mySlidesA = document.getElementsByClassName("mySlidesA");

  // This for loop iterate through the array of objects and the mySlides.length property retrieves the number of items in the collection that the for loop compares to. This part of the code keeps the picture slides from cascading down the web page, using display = none.
  for (let i = 0; i < mySlidesA.length; i++) {
    mySlidesA[i].style.display = "none";
  }

  // This part of the function continuously indexes through each slide item and displays them as the main picture on the web page for 7 seconds.  This is accomplished using the setTimeout() method that calls the function carouselA after 7000 milliseconds or 7 seconds has elasped.
  myIndexA++;
  if (myIndexA > mySlidesA.length) {
    myIndexA = 1; // When the if decision is true myIndexA  is greater than mySlides.length this sets the first slide picture
  }
  mySlidesA[myIndexA - 1].style.display = "block";
  setTimeout(carouselA, 7000);
}

function carouselB() {
  const mySlidesB = document.getElementsByClassName("mySlidesB");

  for (let i = 0; i < mySlidesB.length; i++) {
    mySlidesB[i].style.display = "none";
  }
  myIndexB++;
  if (myIndexB > mySlidesB.length) {
    myIndexB = 1;
  }
  mySlidesB[myIndexB - 1].style.display = "block";
  setTimeout(carouselB, 9000);
}

function carouselC() {
  const mySlidesC = document.getElementsByClassName("mySlidesC");

  for (let i = 0; i < mySlidesC.length; i++) {
    mySlidesC[i].style.display = "none";
  }
  myIndexC++;
  if (myIndexC > mySlidesC.length) {
    myIndexC = 1;
  }
  mySlidesC[myIndexC - 1].style.display = "block";
  setTimeout(carouselC, 5000);
}

// This code selects two of the contact forms input elements and styles the background color lightgrey
const input = document.querySelectorAll(".form-input");
input[0].style.backgroundColor = "lightgrey";
input[0].style.color = "blue";
input[2].style.backgroundColor = "lightgrey";

// Reload the web page every hour to update the store offer
setInterval(() => {
  location.reload();
}, 1000 * 60 * 60);
