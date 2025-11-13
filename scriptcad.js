document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (usuarios.some(u => u.email === email)) {
        alert("Este e-mail ja esta cadastrado!");
        return;
    }

    usuarios.push({ nome, email, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.setItem("loggedUser", JSON.stringify({ nome, email }));

    alert("Cadastro realizado com sucesso!");
    document.getElementById("form").reset();
});
