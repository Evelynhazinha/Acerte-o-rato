document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioValido = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuarioValido) {
        localStorage.setItem("loggedUser", JSON.stringify(usuarioValido));
        window.location.href = "tela_jogo.html";
    } else {
        alert("E-mail ou senha incorretos!");
    }
});
