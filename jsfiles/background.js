// Function to display a different set of background images based on the time of day
import {hr} from "./timedate.js";

const imgs1 = ["images/morning/morning1.jpg", 
               "images/morning/morning2.png", 
               "images/morning/morning3.jpg", 
               "images/morning/morning4.jpg", 
               "images/morning/morning5.jpg", 
               "images/morning/morning6.jpg",
               "images/morning/morning7.jpg"];
const imgs2 = ["images/afternoon/afternoon1.jpg", 
               "images/afternoon/afternoon2.png", 
               "images/afternoon/afternoon3.jpg", 
               "images/afternoon/afternoon4.jpg", 
               "images/afternoon/afternoon5.jpg", 
               "images/afternoon/afternoon6.jpg", 
               "images/afternoon/afternoon7.jpg"];
const imgs3 = ["images/sunset/sunset1.jpg", 
               "images/sunset/sunset2.jpg", 
               "images/sunset/sunset3.jpg", 
               "images/sunset/sunset4.jpg", 
               "images/sunset/sunset5.jpg"];
const imgs4 = ["images/night/night1.jpg", 
               "images/night/night2.jpg", 
               "images/night/night3.jpg", 
               "images/night/night4.jpg",
               "images/night/night5.jpg", 
               "images/night/night6.jpg", 
               "images/night/night7.jpg"];

// if-else for displaying background images
const num1 = Math.floor(Math.random() * 7),
      num2 = Math.floor(Math.random() * 5);
if (hr >= 6 && hr <= 11) {
  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${imgs1[num1]})`;
} else if (hr >= 12 && hr <= 16) {
  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${imgs2[num1]})`;
} else if (hr >= 17 && hr <= 18) {
  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${imgs3[num2]})`;
} else {
  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.4) 100%), url(${imgs4[num1]})`;
}
