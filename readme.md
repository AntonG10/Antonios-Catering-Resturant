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

\*I use Express to create a web server that connects a route or handler to the html.index web page.

Steps to load the html webpage open a command terminal in the project directory:

1. Load node.js onto your computer that will include the npm package  
   manager.
2. From the project folder - Antonios-Catering-Resturant, open a command terminal and  
   Type:

   npm install

   That will install package.json dependencies.

3. Start the Server:
   In the opened terminal in the project directory run the following command:

   node app

   The server it is serving from:

   http://localhost:3000
   Type that url into your web browser to display the webpage.

\*I use java script to calculate and populate the store offer on the food menu section of the web page showing the remaining seven days of the store offer based on the current date.

\*I Created a month and day array and use these to populate the day and date of the store offer.

\*I use the AccuWeather API to generate Louisville weather conditions inserting this into the webpages main image.

\*I've implemented regex to validate and display correctly form name, email and telephone inputs. I use bootstrap tool tips as form field guides and alerts if fields are entered correctly or not.

\* I've created a food.json external file that is read and that populates the food items in the web pages food menu section. The javascript that codes this is in the food.js file.
