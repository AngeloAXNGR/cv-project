const Header = ({applicantName, applicantTitle}) => {

  
  return(
    <header>
      <h1 id="applicant-name">{applicantName}</h1>
      <h2 id="applicant-position">{applicantTitle}</h2>
    </header>
  )
}

export default Header