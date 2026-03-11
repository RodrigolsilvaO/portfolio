// Lista de projetos (dados)
const projects = [
    {
        title: "Sistema de Login",
        description: "Projeto de estudo simulando autenticação de usuários.",
    },
    {
        title: "API de Usuários",
        description: "API REST simples desenvolvida em C#.",
    },
    {
        title: "Landing Page",
        description: "Página responsiva criada com HTML e CSS.",
    },
];

// Pega a div onde os projetos vão aparecer
const projectsContainer = document.getElementById("projects");

// Para cada projeto, cria o HTML automaticamente
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

    projectsContainer.appendChild(projectDiv);
});
