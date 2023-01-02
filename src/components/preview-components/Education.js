const Education = ({degree, universityName, collegeStart, collegeEnd, hSDegree, hSName, hSStart, hSEnd}) =>{
  return (
    <div className="education">
      <h1>EDUCATION</h1>
      <div className="education-content">
        <div className="tertiary-education">
          <h3>{degree}</h3>
          <p>
            {universityName}
          </p>
          <p>{collegeStart} - {collegeEnd}</p>
        </div>
        <div className="secondary-education">
          <h3>{hSDegree}</h3>
          <p>
            {hSName}
          </p>
          <p>{hSStart} - {hSEnd}</p>
        </div>
      </div>
    </div>
  )
}




export default Education;