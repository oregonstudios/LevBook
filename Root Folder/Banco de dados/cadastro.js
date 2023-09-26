import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkcdAuS1_XIUISRASVuWpsqgXM6y6f4ZU",
    authDomain: "levebook-31afb.firebaseapp.com",
    projectId: "levebook-31afb",
    storageBucket: "levebook-31afb.appspot.com",
    messagingSenderId: "698580666209",
    appId: "1:698580666209:web:e0d35a919ac3d4e96d6720"
};

// Inicialize o Firebase com a configuração
const firebaseApp = initializeApp(firebaseConfig);

// Função para cadastrar um novo usuário no Firebase Authentication e redirecionar para a página de home
function cadastrar() {
    const email = document.getElementById("input-email").value;
    const senha = document.getElementById("input-senha").value;
    const nome = document.getElementById("input-nome").value;
    const telefone = document.getElementById("input-telefone").value;

    // Cadastrar o usuário no Firebase
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;

            // Após o cadastro no Firebase Authentication, enviar informações para o Firestore
            const firestore = getFirestore(firebaseApp);
            const usuariosCollection = collection(firestore, "usuarios");
            addDoc(usuariosCollection, {
                email: email,
                nome: nome,
                telefone: telefone
            })
            .then(() => {
                alert("Seus dados foram cadastrados com sucesso.");
                // Redirecionar para a página de homepage após o cadastro bem-sucedido
                window.location.href = "index.html";
            })
            .catch((error) => {
                alert("Falha ao cadastrar no Firestore: " + error.message);
            });
        })
        .catch((error) => {
            alert("Falha ao cadastrar no Firebase Authentication: " + error.message);
        });
}

// Adicionar um evento de envio ao formulário
const cadastroForm = document.querySelector(".form-registrar");
cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
});
