import { loginCaller } from "./server";

const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');

const LOGIN_API_URL = 'http://localhost:3000/login'

let formEl = document.getElementById("loginForm");
formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  messageDiv.style.display = 'none';
  messageDiv.textContent = '';

  const username = usernameInput.value;
  const password = passwordInput.value;

  const data = { username, password };

  try{
    const response = await fetch(LOGIN_API_URL, {
        method: 'POST', // Definindo o método como POST
        headers: {
            'Content-Type': 'application/json' // MUITO IMPORTANTE: Avisa ao servidor que o corpo é JSON
        },
        body: JSON.stringify(data) // Converte o objeto JavaScript para uma string JSON
    }
  )} catch(error){
    console.log(error)
  }
  

  console.log('Enviando dados:', data);
});