import React from 'react';
import Header from './preview-components/Header'
import Contact from './preview-components/Contact'
import About from './preview-components/About'
import Education from './preview-components/Education';
import Skills from './preview-components/Skills';
import Experience from './preview-components/Experience';





const Preview = React.forwardRef(({data}, ref) =>{
  const [skillData, setSkillData] = React.useState([]);
  const [experienceData, setExperienceData] = React.useState([]);

  
  React.useEffect(() =>{
    setSkillData(data.skills.split(','));
  },[data.skills])

  React.useEffect(() =>{
    setExperienceData(data.experiences.split(','));
  },[data.experiences])

  return(
    <div className="preview" ref={ref}>
      <Header
        applicantName={`${data.firstName} ${data.lastName}`}
        applicantTitle={data.title}
      />

      <main>
        <div className="profile-section">
          <div className="profile-picture">
            <img src={data.profilePicture} alt="" />
          </div>

          <div className="profile-summary">
            <Contact
              phoneNumber={data.phone}
              email={data.email}
              linkedin={data.linkedin}
              github={data.github}
              address={data.address}
            />

            <About
              about={data.about}
            />
          </div>
        </div>

        <div className="qualification-section">
          <Education
            degree={data.degree}
            universityName={data.universityName}
            collegeStart={data.collegeStart}
            collegeEnd={data.collegeEnd}
            hSDegree={data.hSDegree}
            hSName={data.hSName}
            hSStart={data.hSStart}
            hSEnd={data.hSEnd}
          />

          <Skills skills={skillData}/>

          <Experience
            experiences={experienceData}
          />
        </div>
      </main>
    </div>
  )
})
export default Preview