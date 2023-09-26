// Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkcdAuS1_XIUISRASVuWpsqgXM6y6f4ZU",
    authDomain: "levebook-31afb.firebaseapp.com",
    projectId: "levebook-31afb",
    storageBucket: "levebook-31afb.appspot.com",
    messagingSenderId: "698580666209",
    appId: "1:698580666209:web:e0d35a919ac3d4e96d6720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-senha").value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            // Autenticação bem-sucedida
            const user = userCredential.user;
            console.log(user);
            window.location.href = "index.html";
        })
        .catch(error => {
            // Erro na autenticação
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
            alert('Senha ou email incorretos.');
        });
});
