const cardRegistrar  = document.getElementsByClassName("card-aceitar-termos-registrar");
const formTermos     = document.querySelector(".form-aceitar-termos");

formTermos.addEventListener("submit", function (event) {
    event.preventDefault();
    for (var i = 0; i < cardRegistrar.length; i++) {
        cardRegistrar[i].innerHTML = '';
    }
});


