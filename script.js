// Impede selecionar datas anteriores ao dia atual

const campoData = document.getElementById("data");

const hoje = new Date().toISOString().split("T")[0];

campoData.min = hoje;


// Máscara de telefone

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = valor;
});


// Validação do formulário

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = formulario.querySelector('input[type="text"]').value.trim();
    const data = campoData.value;
    const tel = telefone.value;

    if (nome.length < 3) {
        alert("Digite um nome válido.");
        return;
    }

    if (tel.length < 15) {
        alert("Digite um telefone válido.");
        return;
    }

    if (data === "") {
        alert("Selecione uma data.");
        return;
    }

    alert("Agendamento realizado com sucesso!");
    formulario.reset();
});


// Scroll suave para links internos

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Animação ao rolar a página

const elementos = document.querySelectorAll(".card, .benefit, form");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(elemento => {
    observer.observe(elemento);
});