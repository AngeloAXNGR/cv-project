const Skills = ({skills}) => {
  const skillList = skills.map(skill => {return <li>{skill}</li>})

  return(
    <div className="skills">
    <h1>Skills</h1>
    <ul>
      {skillList}
    </ul>
  </div>
  )
}

export default Skills;