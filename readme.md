This website project is called Antonio's Catering Resturant, a food and fine dinning restaurant.  
 I use CSS flex box to control the navigation items and logo in the header banner as well as control  
 and organize the content and images in the about, menu and contact sections of the web page.

I use CSS positioning properties to position the Chef, Food Cart and waiter svg images on the header banner.
I use the CSS calc medthod to change the position of the hamburger icon and waiter svg based on viewport width size in mobile.

Media queries are used to control the layout and content for large, medium and mobile sizes.
When the hamburger icon is displayed and clicked on in mobile view I use java script as well as CSS to display on and off the nav items as well as the waiter svg image icon.
I use java script to control an automatic continuous image slide show for the main and menu pictures.
I use java script to style two of the contact form input fields name and date turning them lightgrey.
I use Java script to reload the web page every hour to update the store offer.

JavaScript Feature List.

*To load the food menu on my webpage with a external json file: 
 I use the JSONServer package installed on a computer with npm.  You will need to have nodejs installed to use it. This package allows us to easily create a dummy local rest api to mimic a backend server for web development and prototyping. We can then just create a simple json file to store our data and then the json server will take that file and wrap it with api endpoints on a local server for us to interact with so we can send get, post delete and patch requests etc... to interact with the json file.

Steps to load the json-server in a command terminal:
1. Load node.js onto your computer that will include the npm package     
   manager.
2. Install JSON Server with the following terminal command:

   npm install -g json-server 

3. Start JSON Server:
   Open a terminal in the project directory and run the following command to watch the foodDb.json file:

   json-server --watch data/foodDb.json

   Then you will see in the terminal resources you can interact with. The server it is serving from is with the foodDb endpoint:

   http://localhost:3000/foodDb

   If you alt + click or copy the  path of the localhost server into a web brower you will see the foodDb json file.

4. Next when you load the website and click on the View The Menu button   
   it loads the foodDb json file using template literals to inject it into the webpage in the menu section showing the food menu with images.    



*I use java script to calculate and populate the store offer on the food menu section of the web page showing the remaining days of the store offer.

*I Created a month and day array and use these to populate the store offer.
