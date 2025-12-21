// Busca o botão pelo ID
const botao = document.getElementById("btn-sobre");

// Busca o texto pelo ID
const texto = document.getElementById("sobre-texto");

// Estado inicial (texto curto)
let textoCompleto = false;

// Escuta o clique do botão
botao.addEventListener("click", function () {

    if (textoCompleto === false) {
        texto.innerText =
            "Sou desenvolvedor trainee com foco em aprender e aplicar boas práticas " +
            "em desenvolvimento de software. Tenho contato com C#, JavaScript e SQL " +
            "e busco evoluir através de projetos práticos. Atualmente estudo diariamente " +
            "para melhorar minha lógica, organização de código e boas práticas.";

        botao.innerText = "Mostrar menos";
        textoCompleto = true;
    } else {
        texto.innerText =
            "Sou desenvolvedor trainee com foco em aprender e aplicar boas práticas " +
            "em desenvolvimento de software. Tenho contato com C#, JavaScript e SQL " +
            "e busco evoluir através de projetos práticos.";

        botao.innerText = "Mostrar mais";
        textoCompleto = false;
    }

});
