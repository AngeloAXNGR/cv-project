const Experience = ({experiences}) => {
  const experienceList = experiences.map(experience => {return <li>{experience}</li>})

  return(
    <div className="experience">
    <h1>Experience / Projects</h1>
    <ul>
      {experienceList}
    </ul>
  </div>
  )
}

export default Experience;