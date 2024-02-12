// Functions for displaying quotes randomly and being able to add own quotes
import {hasValue} from "./greet.js";

const url = "https://api.quotable.io/random";
let quotes = [{ quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
                author: "Neil Gaiman"}, 
              { quote: "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart",
                author: "Helen Keller"}];
let qtinput = document.getElementById("qt-input"),
    qainput = document.getElementById("qa-input"),
    aqform = document.getElementById("aq-form"),
    quotetxt = document.getElementById("quotetxt");

function storeStuff(idxname, idx) {  // Store quotes to localstorage
  window.localStorage.setItem(idxname, JSON.stringify(idx));
}
  
function loadQuotes(idxname) {  // Immediately update quotes dictionary using the locally stored quotes when loading the page
  window.addEventListener("load", function () {
    quotes = JSON.parse(window.localStorage.getItem(idxname));
  });
} 

function randQuotes() {  // Display quotes and get one random from API, limit the array to only get ~20 from API
  window.addEventListener("load", function () {
    let flipcoin = Math.floor(Math.random() * 2);   // Code with pick either 1 or 0, 0 for displaying outsourced quotes, 1 for displaying user input quotes
    if(flipcoin == 0){
      fetch(url)
      .then(data => data.json())
      .then(item => {
        document.getElementById("quotetxt").innerHTML = '"' + item.content + '"';
        document.getElementById("qauthor").innerHTML = item.author; 
      })
    } else {
      let num = Math.floor(Math.random() * quotes.length);
      document.getElementById("quotetxt").innerHTML = '"' + quotes[num].quote + '"';
      document.getElementById("qauthor").innerHTML = quotes[num].author; 
    }
  });
}

// Styling for hovering and adding quote(s)
let addquote = document.getElementById("addquote"), 
    qauthor = document.getElementById("qauthor"), 
    aqinput = document.getElementById("aq-input"), 
    qerror = document.getElementById("qerror");

addquote.addEventListener("click", function() {
  qauthor.style.opacity = "0"; 
  quotetxt.style.opacity = "0"; 
  addquote.style.opacity = "0";
  setTimeout(function() {
    qtinput.style.display = "block"; 
    qainput.style.display = "block"; 
    aqinput.style.display = "block";
  }, 299); 
  setTimeout(function() {
    qtinput.style.opacity = "1"; 
    qainput.style.opacity = "1"; 
    aqinput.style.opacity = "1";
  }, 600);
  qtinput.value = "";
  qainput.value = "";
});

aqinput.addEventListener("click", function() {
  setTimeout(function() {
    qtinput.style.display = "none"; 
    qainput.style.display = "none"; 
    aqinput.style.display = "none";
  }, 300); 
  qtinput.style.opacity = "0"; 
  qainput.style.opacity = "0"; 
  aqinput.style.opacity = "0";
  setTimeout(function() {
    qtinput.style.display = "block"; 
    qainput.style.display = "block"; 
    aqinput.style.display = "block";
  }, 299); 
  setTimeout(function() {
    qauthor.style.opacity = ""; 
    quotetxt.style.opacity = "1"; 
    addquote.style.opacity = "";
  }, 600);
}); 

aqform.addEventListener("submit", function(e) {
  e.preventDefault();
  if (hasValue(aqform.elements["qt-input"]) && hasValue(aqform.elements["qa-input"])) {
    quotes.push({quote: aqform.elements["qt-input"].value, author: aqform.elements["qa-input"].value,});

    qauthor.innerHTML = aqform.elements["qa-input"].value;
    quotetxt.innerHTML = '"' + aqform.elements["qt-input"].value + '"';
    storeStuff("quotes", quotes);

    setTimeout(function() {
      qtinput.style.display = "none"; 
      qainput.style.display = "none"; 
      aqinput.style.display = "none";
    }, 300); 
    qtinput.style.opacity = "0"; 
    qainput.style.opacity = "0"; 
    aqinput.style.opacity = "0";
    setTimeout(function() {
      qauthor.style.display = "block"; 
      quotetxt.style.display = "block"; 
      addquote.style.display = "block";
    }, 299);
    setTimeout(function () {
      qauthor.style.opacity = ""; 
      quotetxt.style.opacity = "1"; 
      addquote.style.opacity = "";
    }, 600);
  } else if (hasValue(aqform.elements["qt-input"])) {
    qerror.innerHTML = "Please enter the author's name.";
    qerror.style.opacity = "1";
  } else if (hasValue(aqform.elements["qa-input"])) {
    qerror.innerHTML = "Please enter a quote by the author.";
    qerror.style.opacity = "1";
  } else {
    qerror.innerHTML = "Please enter a quote and an author.";
    qerror.style.opacity = "1";
  }
});

// Defaults

aqform.addEventListener("input", function() {
    qerror.style.opacity = "0";
  });

if (window.localStorage.quotes != null) {
  loadQuotes("quotes");
}

randQuotes();

export {storeStuff};
