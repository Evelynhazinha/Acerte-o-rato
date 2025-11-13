function enviarRecuperacao() {
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('mensagem');

    if (!msg) return;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuario = usuarios.find(u => u.email === email);

    if (email === "") {
        msg.className = "mensagem error";
        msg.textContent = "Por favor, insira um e-mail!";
        msg.style.display = "block";
        return;
    }

    if (!usuario) {
        msg.className = "mensagem error";
        msg.textContent = "Este e-mail nao esta cadastrado!";
        msg.style.display = "block";
        return;
    }

    msg.className = "mensagem success";
    msg.textContent = `✅ Sua senha cadastrada: ${usuario.senha}`;
    msg.style.display = "block";
    document.getElementById('email').value = '';
}
