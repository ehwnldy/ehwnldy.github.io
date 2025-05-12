import "../styles/Skills.css"

const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Redux", "Tailwind CSS"]
  const backendSkills = ["Node.js", "Express", "MongoDB", "SQL", "Firebase"]
  const toolsSkills = ["Git", "GitHub", "VS Code", "Figma", "Webpack"]

  return (
    <section className="skills">
      <div className="section-container">
        <h2 className="section-title">기술 스택</h2>
        <div className="skills-content">
          <div className="skills-category">
            <h3>프론트엔드</h3>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>백엔드</h3>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>도구 및 기타</h3>
            <div className="skills-list">
              {toolsSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
