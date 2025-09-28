document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    if (nome === "" || email === "" || senha === "") {
        alert("Todos os campos são obrigatórios!");
        nome.style.border="2vh solid red"
        email.style.border="2vh solid red"
        senha.style.border="2vh solid red"
        return;
    }
    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }
    alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nE-mail: ${email}`);
    document.getElementById("cadastroForm").reset();
});