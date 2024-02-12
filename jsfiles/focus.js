// Focus form and username input
import {hasValue} from "./greet.js";

const mainpage = document.querySelector("main"),
      inputname = document.querySelector("#nameinput"),
      focusForm = document.getElementById("f-frm"),
      focuscont = document.getElementById("focuscont"),
      focuslist = document.getElementById("focuslist"),
      fmenu = document.getElementById("fmenu"),
      flist = document.getElementById("f-list");

if (window.localStorage.username == null) {   // Checks if the username key in localstorage is populated and displays elements accordingly
  inputname.style.display = "flex"; inputname.style.opacity = "1";
} else {
  mainpage.style.display = "flex"; mainpage.style.opacity = "1";
}

if (window.localStorage.focus == null) {  // Checks if the focus key in localstorage is populated and displays elements accordingly
  focuscont.style.display = "flex"; focuscont.style.opacity = "1";
} else {
  focuslist.style.display = "flex"; focuslist.style.opacity = "1";
}

if (window.localStorage.focus != null) {  // When changing the focus, places the current focus on the input bar
  document.getElementById("listtxt").innerHTML = window.localStorage.focus;
}

flist.elements["focusbox"].addEventListener("change", function() {   // Event listener for the focus, strike-through text
  if (this.checked) {
    document.getElementById("listtxt").style.textDecoration = "line-through";
  } else {
    document.getElementById("listtxt").style.textDecoration = "none";
  }
});

fmenu.addEventListener("click", function() {   // Event listener for clicking on the menu button to change the focus
  setTimeout(function() {
    focuslist.style.display = "none"; focuscont.style.display = "flex";
  }, 300);
  focuslist.style.opacity = "0";
  setTimeout(function () {
    focuscont.style.opacity = "1";
  }, 600);

  if (flist.elements["focusbox"].checked) {   // Removes the finished focus from local storage when changing
    localStorage.removeItem("focus");
    focusForm.elements["focustxtform"].value = "";
  } else {
    focusForm.elements["focustxtform"].value = window.localStorage.focus;
  }
});

focusForm.addEventListener("submit", function(e) {   // Event listener for focus text input
  e.preventDefault();
  if (hasValue(focusForm.elements["focustxtform"])) {
    const ftxt = focusForm.elements["focustxtform"].value;
    window.localStorage.setItem("focus", ftxt);
  } 
  if (window.localStorage.focus != null) {
    setTimeout(function () {
      focuscont.style.display = "none"; focuslist.style.display = "flex";
    }, 300);
    focuscont.style.opacity = "0";
    setTimeout(function () {
      focuslist.style.opacity = "1";
    }, 600);
    document.getElementById("listtxt").innerText = window.localStorage.focus;
  }
  if (flist.elements["focusbox"].checked) {
    flist.elements["focusbox"].click();
  }
});

export {inputname};
