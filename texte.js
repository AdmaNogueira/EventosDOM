function botaoAbrir() {
    var textoRestaurante = document.querySelector ("p");
    var corBotao = document.getElementById ("bto").style.backgroundColor = "green"

    textoRestaurante.innerText = "Estamos Abertos!";
    document.getElementById ("bto2").style.backgroundColor = "white"
}