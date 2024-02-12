// Functions for To Do List
import {hasValue} from "./greet.js";
import {storeStuff} from "./quotes.js";

const todoform = document.getElementById("todoform");
let arraytodo = [], 
    listdivs = document.getElementById("listdivs"),
    todotxt = document.getElementById("todotxt"),
    popup = document.getElementById("myPopup");

todotxt.addEventListener("click", function() {  // Function for toggling popup todolist by toggling the class .show
  popup.classList.toggle("show");
});

function innerTodo(item, itemvalue) {
  if (hasValue(item)) {
    let todotxt = itemvalue;
    const tododiv = document.createElement("div");
    const todo = document.createElement("input");
    todo.type = "checkbox";
    todo.id = "todocheck";

    const todoclear = document.createElement("div");
    todoclear.className = "todoclear";
    todoclear.innerHTML = "🗑";
   
    /*
    const todoedit = document.createElement("div");
    todoedit.className = "todoedit";
    todoedit.innerHTML = "✎";
    let editinput = document.createElement("input");
    editinput.type = "text";
    editinput.style.display = "none";
    */
           
    const todolabel = document.createElement("label");
    const todospan = document.createElement("span");
    todospan.innerHTML = todotxt;

    tododiv.appendChild(todo);
    todolabel.appendChild(todospan);
    tododiv.appendChild(todolabel);
    tododiv.appendChild(todoclear);
    //tododiv.appendChild(todoedit);
    //tododiv.appendChild(editinput);

    listdivs.appendChild(tododiv);
    todoform.elements["todoinput"].value = ""; 

    todoclear.addEventListener("click", function() { // for clearing the entries
      let index = arraytodo.indexOf(itemvalue);
      tododiv.remove();
      if (index > -1) {
        arraytodo.splice(index, 1);
      }
      storeStuff('todo', arraytodo);
    });
    /*
    todoedit.addEventListener("click", function() {
      let newText = prompt("Enter new text:");
      todospan.innerHTML = newText;
      arraytodo.splice(index, 1, todospan.innerHTML);
      storeStuff('todo', arraytodo);
    });
    */ /*
    const editin = listdivs.querySelector("input[type=text]"),
          containsClass = listdivs.classList.contains("editMode");
    editin.style.display = 'none';
    console.log("editin: "+ editin.value);
    todoedit.addEventListener("click", function() {
      editin.style.display = 'block';
      if (containsClass){
        todospan.innerHTML = editin.value;
        arraytodo[index] = editin.value;
        storeStuff('todo', arraytodo);
        listdivs.classList.toggle("editMode");
      }
    }); */
  }
}

function addTodo() { // function for the todo list
  todoform.addEventListener("submit", function(e) {
    e.preventDefault();
    let todotxt = todoform.elements["todoinput"].value;
    innerTodo(todoform.elements["todoinput"], todotxt);
    arraytodo.push(todotxt);
    storeStuff("todo", arraytodo);
  });
}

function popTodo() {
  for (let i = 0; i < arraytodo.length; i++) {
    innerTodo(document.getElementById("greeting").elements["changename"], arraytodo[i]);
  }
}

function loadTodo(idxname) {
  window.addEventListener("load", function() {
    arraytodo = JSON.parse(window.localStorage.getItem(idxname));
    popTodo();
  });
}

if (window.localStorage.todo != null) {
    loadTodo("todo");
    popTodo();
}

addTodo();
