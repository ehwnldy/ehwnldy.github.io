import "../styles/Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "프로젝트 1",
      description: "반응형 웹사이트 개발 프로젝트입니다. React와 Tailwind CSS를 사용하여 구현했습니다.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 2,
      title: "프로젝트 2",
      description: "데이터 시각화 대시보드 프로젝트입니다. React와 D3.js를 활용하여 개발했습니다.",
      technologies: ["React", "D3.js", "CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "프로젝트 3",
      description: "소셜 미디어 애플리케이션입니다. React와 Firebase를 사용하여 구현했습니다.",
      technologies: ["React", "Firebase", "Redux"],
      link: "#",
    },
  ]

  return (
    <section className="projects">
      <div className="section-container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <div className="image-placeholder"></div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link">
                  자세히 보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
