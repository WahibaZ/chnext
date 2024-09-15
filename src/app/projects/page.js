import style from "./projects.module.css";
const projets = [
  { id: 1, title: "Projet 1", description: "Une brève description du projet 1." },
  { id: 2, title: "Projet 2", description: "Une brève description du projet 2." },
  { id: 3, title: "Projet 3", description: "Une brève description du projet 3." },
];
export default function projects() {
  return (
    <div className={style.projects}>
      <h1>My Projects</h1>
      <div className="projects-list">
        {projets.map(project => (
          <div key={project.id} className="project-item">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    

    </div>
  )
}

