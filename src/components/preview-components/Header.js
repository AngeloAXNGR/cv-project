const Header = ({applicantName, applicantTitle}) => {

  
  return(
    <div className="cv-header">
      <h1 id="applicant-name">{applicantName}</h1>
      <h2 id="applicant-position">{applicantTitle}</h2>
    </div>
  )
}

export default Header