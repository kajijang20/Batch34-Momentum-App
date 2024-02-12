// Functions for greeting page and input/change username
import {hr} from "./timedate.js";
import {inputname} from "./focus.js";

const userForm = document.getElementById("un-form"),
      unError = document.getElementById("un-error");

function greeting() {   // Function for displaying greeting message along with user's name as well as making it editable and stored on local storage.
  let greets = document.getElementById("greeting");
  let name = window.localStorage.username;

  let iname = document.createElement("input");
  iname.type = "text";
  iname.id = "changename";
  iname.value = name;
  iname.autocomplete = "off";

  let cname = document.createElement("input");
  cname.type = "submit";
  cname.id = "cname";
  cname.hidden = true;

  let ampm = "";
  if (hr == 12) { 
    ampm = "noon"; 
  } else if (hr < 12) { 
    ampm = "morning"; 
  } else if (hr > 12 && hr < 18) { 
    ampm = "afternoon"; 
  } else { 
    ampm = "evening"; 
  }

  let greet = "Good " + ampm + ", ";
  greets.innerHTML = greet;
  greets.appendChild(iname);
  greets.appendChild(cname);

  let newname = document.getElementById("changename");
  newname.style.width = newname.value.length + "ch";

  let newgreets = document.getElementById("greeting");
  newgreets.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (hasValue(newgreets.elements["changename"])) {
      let usertext = newgreets.elements["changename"].value;
      window.localStorage.setItem("username", usertext);
    }
    newgreets.elements["changename"].blur();
  });

  newname.addEventListener("input", function() {
    newname.style.width = newname.value.length + "ch";
  });
}

function hasValue(input) {  // Function for checking if input contains a value
  if (input.value == "" || input.value == null) { 
    return false; 
  } else { 
    return true; 
  }
}

userForm.addEventListener("submit", function(e) {  // Event listener for username input
  e.preventDefault();
  if (hasValue(userForm.elements["username"])) {
    let usertext = userForm.elements["username"].value;
    window.localStorage.setItem("username", usertext);
    greeting();
  } else {
    unError.style.opacity = "1";
  }
  
  if (window.localStorage.username != null) {
    setTimeout(function() {
      inputname.style.display = "none"; 
      mainpage.style.display = "flex";
    }, 300);
    inputname.style.opacity = "0";
    setTimeout(function() {
      mainpage.style.opacity = "1";
    }, 600);
  }
});

window.addEventListener("load", function() {
  greeting();
});

userForm.addEventListener("input", function() {  // Event listener for error fade out
  unError.style.opacity = "0";
});

export {hasValue};
