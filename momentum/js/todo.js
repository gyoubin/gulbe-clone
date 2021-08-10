const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function fullHeart(event){
    const li = event.target;
    if(li.classList[0] === "heart"){
        li.innerText = "🤍";
        li.classList.remove("heart");
    } else{
        li.innerText = "❤️";
        li.classList.add("heart");
    }
}

function toDofinish(event){
    const throughLine = event.target;
    const selected = event.target.parentElement;
    throughLine.classList.toggle('through-line');
    toDos.forEach((item) =>{
        if(item.id === parseInt(selected.id)) {
            item.clicked = !item.clicked;
        }
    });
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const heart = document.createElement("button");
    heart.innerText = "🤍";
    heart.addEventListener("click",fullHeart);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.addEventListener("click",toDofinish);
    const button = document.createElement("button");
    button.innerText = "🗑";
    button.classList.add("bigger");
    button.addEventListener("click",deleteToDo);
    li.appendChild(heart);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    toDos.forEach((item) => {
        if(item.clicked) {
           span.classList.add("through-line"); 
        } else {
            span.classList.remove("through-line"); 
        }
    });
}

function handleToDosubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
        clicked: false,
        heart: false,
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

if(savedUsername === null){
    toDoForm.classList.add(HIDDEN_CLASSNAME);
} 