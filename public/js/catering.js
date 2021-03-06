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

//Digital Clock function and welcome greeting
const offerCalendar = document.querySelector(".offerCalendar");
const mainCalendar = document.querySelector(".calendar");
const timeClock = document.querySelector(".time");

const mainGreeting = (welcome, oneweek, calendar) => {
  const tick = () => {
    const now = new Date();
    // console.log(dateFns.isToday(now));
    const time = dateFns.format(now, "hh:mm:ss A");
    const htmlTime = `
  <span>${time}</span>
 `;
    timeClock.innerHTML = htmlTime;
  };
  setInterval(tick, 1000);

  const htmlCalendar = `
    <p>${welcome} ${calendar}</p>
    
  `;
  const htmlOfferCalendar = `
    <p > <strong style = ' font: italic bold 1.7rem "Raleway", Sans-Serif; letter-spacing: .1rem;'>20% Off</strong> Store Offer Ends <strong>${oneweek}</strong></p>
  `;
  mainCalendar.innerHTML = htmlCalendar;
  offerCalendar.innerHTML = htmlOfferCalendar;
};
const now = new Date();
const sevenDays = dateFns.addDays(now, 7);
const oneWeek = dateFns.format(sevenDays, "ddd MMM-Do, YYYY");
const calendar = dateFns.format(now, "ddd MMM-Do, YYYY");

mainGreeting("Welcome to the Cafe", oneWeek, calendar);

// Automatic Continuous Slideshow function
// Declare variables and set initial values to zero and call functions
let myIndexA = 0;
let myIndexB = 0;
let myIndexC = 0;
let myIndexD = 0;
carouselA();
carouselB();
carouselC();
carouselD();

function carouselA() {
  // This class selection returns array-like objects called mySlides equaling four index items 0-3 four images, this is assigned to mySlidesA
  const mySlidesA = [...document.getElementsByClassName("mySlidesA")];

  // This forEach loop iterates through the array of objects. This part of the code keeps the picture slides from cascading down the web page, using display = none.

  mySlidesA.forEach((slides) => (slides.style.display = "none"));

  // This part of the function continuously indexes through each slide item and displays them as the main picture on the web page for 7 seconds.  This is accomplished using the setTimeout() method that calls the function carouselA after 7000 milliseconds or 7 seconds has elasped.
  myIndexA++;
  if (myIndexA > mySlidesA.length) {
    myIndexA = 1; // When the if decision is true myIndexA  is greater than mySlides.length this sets the first slide picture
  }
  mySlidesA[myIndexA - 1].style.display = "block";
  setTimeout(carouselA, 7000);
}

function carouselB() {
  const mySlidesB = [...document.getElementsByClassName("mySlidesB")];

  mySlidesB.forEach((slides) => (slides.style.display = "none"));

  myIndexB++;
  if (myIndexB > mySlidesB.length) {
    myIndexB = 1;
  }
  mySlidesB[myIndexB - 1].style.display = "block";
  setTimeout(carouselB, 9000);
}

function carouselC() {
  const mySlidesC = [...document.getElementsByClassName("mySlidesC")];

  mySlidesC.forEach((slides) => (slides.style.display = "none"));

  myIndexC++;
  if (myIndexC > mySlidesC.length) {
    myIndexC = 1;
  }
  mySlidesC[myIndexC - 1].style.display = "block";
  setTimeout(carouselC, 5000);
}

function carouselD() {
  const mySlidesD = [...document.getElementsByClassName("mySlidesD")];

  mySlidesD.forEach((slides) => (slides.style.display = "none"));

  myIndexD++;
  if (myIndexD > mySlidesD.length) {
    myIndexD = 1;
  }
  mySlidesD[myIndexD - 1].style.display = "block";
  setTimeout(carouselD, 5000);
}

// Form selectors and regex patterns
const form = document.querySelector(".signup-form");
const nameFeedback = document.querySelector(".nameFeedback");
const emailFeedback = document.querySelector(".emailFeedback");
const telephoneFeedback = document.querySelector(".telephoneFeedback");
const usernamePattern = /^[a-z A-Z]{6,20}$/;
const emailPattern = /^[^@]+@[^@.]+\.[a-z]+$/i;
const telephonePattern = /^\D*(\d{3})\D*(\d{3})\D*(\d{4})\D*$/;

// This code selects two of the contact forms input elements and styles the background color lightgrey
form[0].style.backgroundColor = "lightgrey";
form[2].style.backgroundColor = "lightgrey";
form[4].style.backgroundColor = "lightgrey";

// form uersname validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;
  //Test to see if username input value is true or false and then display deciding bootstrap alert
  if (usernamePattern.test(username)) {
    nameFeedback.setAttribute(
      "class",
      "alert alert-success  form-input padding-16 "
    );
    nameFeedback.textContent = "That name is valid!";
  } else {
    nameFeedback.setAttribute(
      "class",
      "alert alert-danger form-input padding-16 "
    );
    nameFeedback.innerHTML = `Name must contain only <strong>letters/spaces</strong> & be between <strong>6 & 20</strong> characters`;
  }
});

// form email validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  //Test to see if email input value is true or false and then display deciding bootstrap alert
  if (emailPattern.test(email)) {
    emailFeedback.setAttribute(
      "class",
      "alert alert-success  form-input padding-16 "
    );
    emailFeedback.textContent = "That email is valid!";
  } else {
    emailFeedback.setAttribute(
      "class",
      "alert alert-danger form-input padding-16 "
    );
    emailFeedback.innerHTML = `Email is <strong>not valid!</strong>`;
  }
});

// form telephone validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const telephone = form.telephone.value;
  //Test to see if telephone input value is true or false and then display deciding bootstrap alert
  if (telephonePattern.test(telephone)) {
    telephoneFeedback.setAttribute(
      "class",
      "alert alert-success  form-input padding-16 "
    );
    telephoneFeedback.textContent = "That phone number is valid!";
  } else {
    telephoneFeedback.setAttribute(
      "class",
      "alert alert-danger form-input padding-16 "
    );
    telephoneFeedback.innerHTML = `The telephone number must be in the format of <br/><strong>(123) 456-7890</strong><br/>
          <strong>123-456-7890</strong><br/>
          <strong>123.456.7890</strong><br/>
          <strong>1234567890</strong>`;
  }
});

//form username live feedback
//Test to see if username input is true or false if true turn form field green if false turn red
form.username.addEventListener("keydown", (e) => {
  // console.log(e.target.value, form.username.value);
  if (usernamePattern.test(e.target.value)) {
    //console.log('passed');
    form.username.setAttribute(
      "class",
      "bg-success text-white form-input padding-16 "
    );
  } else {
    //console.log('failed');
    form.username.setAttribute(
      "class",
      "bg-danger text-white form-input padding-16"
    );
  }
});

//form email live feedback
//Test to see if email input is true or false if true turn form field green if false turn red
form.email.addEventListener("keydown", (e) => {
  // console.log(e.target.value, form.username.value);
  if (emailPattern.test(e.target.value)) {
    //console.log('passed');
    form.email.setAttribute(
      "class",
      "bg-success text-white form-input padding-16 "
    );
  } else {
    //console.log('failed');
    form.email.setAttribute(
      "class",
      "bg-danger text-white form-input padding-16"
    );
  }
});

//form telephone live feedback
//Test to see if telephone input is true or false if true turn form field green if false turn red
form.telephone.addEventListener("keyup", (e) => {
  // console.log(e.target.value, form.username.value);

  if (telephonePattern.test(e.target.value)) {
    //console.log('passed');
    form.telephone.setAttribute(
      "class",
      "bg-success text-white form-input padding-16 "
    );
  } else {
    //console.log('failed');
    form.telephone.setAttribute(
      "class",
      "bg-danger text-white form-input padding-16"
    );
  }
});

// Bootstrap tooltip using jquery
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "toggle",
  });
});

// Reload the web page every hour to update the store offer
setInterval(() => {
  location.reload();
}, 1000 * 60 * 60);
