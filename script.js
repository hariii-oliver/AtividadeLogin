document
.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
    document.getElementById("nome").value;

    document.getElementById("mensagem")
    .textContent = `Olá, ${nome}!`;

});