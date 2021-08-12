const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function logOutId(){
  alert("로그아웃 되었습니다.");
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoForm.classList.add(HIDDEN_CLASSNAME);
  toDoList.innerText = "";
  toDos.forEach(()=>localStorage.removeItem(TODOS_KEY));
}

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerText = "Hello, " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  const logOut = document.createElement("button");
  logOut.innerText = "❌";
  logOut.addEventListener("click",logOutId);
  greeting.appendChild(logOut);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = "Hello " + savedUsername;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const logOut = document.createElement("button");
  logOut.innerText = "❌";
  logOut.addEventListener("click",logOutId);
  greeting.appendChild(logOut);
}