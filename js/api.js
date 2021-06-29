// Event listeners and Selectors
const menu = document.getElementById("menu");
const button = document.getElementById("getMenu");
// button.addEventListener("click", getMenu);
// window.addEventListener('DOMContentLoaded', () => getMenu());
button.addEventListener("click", () =>
  getMenu().catch((err) => alert(err.message))
);

// function to get the food menu asynchronously non blocking code.
const getMenu = async () => {
  // Setup a request using fetch to the local server with food data endpoint
  let uri = "http://localhost:3000/food";

  // Wait until the promise has resolved and then get the data response object back and asign it to the response const variable
  const response = await fetch(uri);
  console.log("This is response", response);

  if (response.status !== 200) {
    throw new Error("Cannot fetch the data.");
  }

  // Wait until the promise has resolved and then using the json() method get the response object, and then pass or convert that into a javascript array object and store that in const foodMenu
  const foodMenu = await response.json();
  console.log("This is foodMenu", foodMenu);

  //This part of the code sets up a template stored in the variabe items then iterates the foodMenu array using the forEach method and outputing the foodMenu items into the DOM or the menu section of the webpage.
  let items = "";
  foodMenu.forEach((food) => {
    if (food.foodPrice === "5.50") {
      const newPrice = 5.5 - 5.5 * 0.2; // 20% off store offer
      items += `

              <h4><img class="img-fluid food-photo img-thumbnail" src="${
                food.photo
              }" alt="${food.foodName}"> ${food.foodHeader}</h4>
              <p class="text-grey ml-3">${food.foodName} <strong><s>${
        food.foodPrice
      }</s></strong> <strong style = 'color:#1414b0;'>${newPrice.toFixed(2)}
              </strong></p><hr>

              `;
    } else {
      items += `

                    <h4><img class=" img-fluid food-photo img-thumbnail" src="${food.photo}" alt="${food.foodName}"> ${food.foodHeader}</h4>
                    <p class="text-grey ml-3">${food.foodName} <strong>${food.foodPrice}</strong></p><hr>

                    `;
    }
  });

  document.querySelector("main").innerHTML = items;
  button.innerText = "Antonio's Cafe Goooood Eatin";
};

// Code to fetch AccWeather API
const temp = document.querySelector(".temp");
const icon = document.querySelector(".iconWeather img");

// AccWeather authorization key
const key = "Eb1NlT5byCyGoBYO8yQht4VU0RTn7Uym";

// funtion to update weather conditions and insert into the webpage
const updateWeather = (data) => {
  const weather = data;
  const htmlTemp = `
  <span>${weather.Temperature.Imperial.Value}</span><span>&deg;F ${weather.WeatherText}</span>
 `;
  temp.innerHTML = htmlTemp;

  // update icon images
  const iconSrc = `img/imgIcon/icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute("src", iconSrc);

  // console.log(weather);
  // console.log(weather.Temperature.Imperial.Value);
  // console.log(weather.WeatherIcon);
};

// get weather information
const getWeather = async () => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/348428?apikey=${key}`;

  // Wait until the promise has resolved and then get the data response object back and asign it to the response const variable
  const response = await fetch(base);

  // Wait until the promise has resolved and then using the json() method get the response object, and then pass or convert that into a javascript array object and store that in const data
  const data = await response.json();
  console.log(data[0]);
  return data[0];
};

getWeather()
  .then((data) => updateWeather(data))
  .catch((err) => console.log(err));
