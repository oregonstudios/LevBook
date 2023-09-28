const firebaseConfig = {
    apiKey: "AIzaSyCkcdAuS1_XIUISRASVuWpsqgXM6y6f4ZU",
    authDomain: "levebook-31afb.firebaseapp.com",
    projectId: "levebook-31afb",
    storageBucket: "levebook-31afb.appspot.com",
    messagingSenderId: "698580666209",
    appId: "1:698580666209:web:e0d35a919ac3d4e96d6720"
};

// Inicialize o Firebase com a configuração
firebase.initializeApp(firebaseConfig);

// Função para cadastrar um novo usuário no Firebase Authentication e redirecionar para a página de home
function cadastrar() {
    senha = document.getElementById("input-senha").value;
    const usuario = {
        email : document.getElementById("input-email").value,
        
        nome : document.getElementById("input-nome").value,
        telefone : document.getElementById("input-telefone").value
    }

    // Cadastrar o usuário no Firebase
    firebase.auth().createUserWithEmailAndPassword(usuario.email,senha)
        .then((userCredential) => {
            const user = userCredential.user;

            // Após o cadastro no Firebase Authentication, enviar informações para o Firestore
            firebase.firestore()
                .collection("usuarios")
                .doc(usuario.email)
                .set(usuario)
            .then(() => {
                alert("Seus dados foram cadastrados com sucesso.");
                // Redirecionar para a página de homepage após o cadastro bem-sucedido
                window.location.href = "../html/index.html"; 
            })
            .catch((error) => {
                alert("Falha ao cadastrar no Firestore: " + error.message);
            });
        })
        .catch((error) => {
            alert("Falha ao cadastrar no Firebase Authentication: " + error.message);
        });
}

