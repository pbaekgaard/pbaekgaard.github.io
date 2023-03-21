import { useEffect, useState } from 'react';


function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('projects.json').then(res => res.json()).then(data => setProjects(data));
  }, []);
  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => (
        <div key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <a href={"https://github.com/pbaekgaard" + project.githubLink}>Github</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
