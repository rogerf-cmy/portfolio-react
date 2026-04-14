// App.jsx
import React from "react";
import Projects from "./Projects";

const projetos = [
  {
    nome: "Portfólio Antigo",
    descricao: "Versão inicial em HTML/CSS.",
    link: "https://meuportfolioantigo.com"
  },
  {
    nome: "Portfólio React",
    descricao: "Nova versão com React e deploy na Vercel.",
    link: "https://meuportfolioreact.vercel.app"
  }
];

function App() {
  return (
    <div>
      <h1>Bem-vindo ao meu Portfólio</h1>
      <Projects projects={projetos} />
    </div>
  );
}

export default App;
