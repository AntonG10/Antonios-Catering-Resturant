// Event listeners and Selectors
const menu = document.getElementById("menu");
const button = document.getElementById("getMenu");
button.addEventListener("click", getMenu);

// Get menu from JSON file and insert into the web page

function getMenu() {
  fetch("./food.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let items = "";
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
      button.textContent = "Antonios Cafe Goooood Eatin";
    });
}
