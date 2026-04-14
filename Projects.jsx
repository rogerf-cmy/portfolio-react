// Projects.jsx
import React from "react";

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Meus Projetos</h2>
      <ul>
        {projects.map((proj, index) => (
          <li key={index}>
            <h3>{proj.nome}</h3>
            <p>{proj.descricao}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">
              Ver projeto
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;