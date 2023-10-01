class User {
    constructor(nome, telefone, email, senha) {
        this.nome = nome
        this.telefone = telefone
        this.email = email
        this.senha = senha
    }
}
let loggedIn = false
let usuarioLogado = ''

const u00000001 = new User('Oregon', '(85) 98989-8989','oregonstudios@gmail.com','amolivros123')
const u00000002 = new User('Roger', '(85) 99898-9898','profroger@gmail.com','amolivros123')

const inputEmail    = document.querySelector(".auth-email-input");
const inputPassword = document.querySelector(".auth-password-input");
const formLogin = document.querySelector(".form-login");

let allUsers = { u00000001, u00000002}

function signInAuth(email, senha){
    const usuarioEncontrado = Object.values(allUsers).find(
        user => user.email === email && user.senha === senha
    );
    if (usuarioEncontrado) {
        usuarioLogado = usuarioEncontrado.nome
        window.location.href = "../index.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
    
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = inputEmail.value;
    const senha = inputPassword.value;
    signInAuth(email, senha);
});
