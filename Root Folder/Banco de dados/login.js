function logar(){
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCkcdAuS1_XIUISRASVuWpsqgXM6y6f4ZU",
        authDomain: "levebook-31afb.firebaseapp.com",
        projectId: "levebook-31afb",
        storageBucket: "levebook-31afb.appspot.com",
        messagingSenderId: "698580666209",
        appId: "1:698580666209:web:e0d35a919ac3d4e96d6720"
    };  

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-senha").value;

    firebase.auth().signInWithEmailAndPassword(email,password).then(response => {
        //console.log(response);
        window.location.href="../html/index.html";
    }).catch(error => {
        //console.log(error)
        alert('Senha ou email incorretor')
        //window.location.href="cadastro.html";
    });
}